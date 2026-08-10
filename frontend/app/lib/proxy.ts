const BLOCKED_HOSTNAME_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^192\.168\./,
  /^169\.254\./,
  /^0\.0\.0\.0$/,
  /^\[?::1\]?$/,
  /^\[?fc[0-9a-f]{2}:/i,
  /\.local$/i,
];

const MAX_BODY_BYTES = 6 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 10_000;

export const PROXY_PATH = "/api/proxy";

export class ProxyError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
  }
}

export function validateTargetUrl(raw: string | null): URL {
  if (!raw) throw new ProxyError("No URL provided.", 400);

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new ProxyError("That doesn't look like a valid URL.", 400);
  }

  if (!/^https?:$/.test(parsed.protocol)) {
    throw new ProxyError("Only http and https URLs can be opened.", 400);
  }

  // Heuristic hostname blocklist against private/loopback/link-local ranges
  // to stop this route being used for SSRF against internal infrastructure.
  // This is a string check, not a DNS-rebinding-proof guarantee.
  if (BLOCKED_HOSTNAME_PATTERNS.some((p) => p.test(parsed.hostname))) {
    throw new ProxyError("This address can't be opened through the browser.", 400);
  }

  return parsed;
}

function errorPage(message: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;font-family:ui-monospace,Menlo,monospace;background:#23252e;color:#e6e6e6;text-align:center;padding:24px"><div>${message}</div></body></html>`;
}

function injectedScript(origin: string): string {
  return `<script>(function(){
var BASE=${JSON.stringify(origin)};
function resolve(u){try{return new URL(u,BASE).href;}catch(e){return u;}}
function needsResolve(u){return typeof u==="string"&&!/^https?:|^data:|^blob:|^#/i.test(u);}
var origFetch=window.fetch;
window.fetch=function(input,init){
  if(needsResolve(input)) input=resolve(input);
  return origFetch.call(this,input,init);
};
var origOpen=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(method,url){
  var args=Array.prototype.slice.call(arguments);
  if(needsResolve(url)) args[1]=resolve(url);
  return origOpen.apply(this,args);
};
})();</script>`;
}

function rewriteHtml(html: string, origin: string): string {
  const injected = `<base href="${origin}/">${injectedScript(origin)}`;
  let out = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => `${m}${injected}`) : injected + html;

  // Route in-page links back through the proxy so navigation stays proxied.
  out = out.replace(/(<a\b[^>]*?\shref\s*=\s*)(["'])(.*?)\2/gi, (match, prefix, quote, href) => {
    if (/^(javascript:|mailto:|tel:|#)/i.test(href)) return match;
    let absolute: string;
    try {
      absolute = new URL(href, origin).href;
    } catch {
      return match;
    }
    return `${prefix}${quote}${PROXY_PATH}?url=${encodeURIComponent(absolute)}${quote}`;
  });

  return out;
}

export interface ProxiedResponse {
  body: string | ReadableStream<Uint8Array> | null;
  status: number;
  contentType: string;
}

/** Fetches a page server-side and, for HTML, rewrites it so it can be framed
 * from our own origin (the target's X-Frame-Options / CSP never reaches the
 * browser — only our own response headers do, and we simply don't set
 * restrictive ones). Non-HTML responses (images, fonts, PDFs) stream through
 * unchanged since those were never subject to frame-blocking in the first
 * place. */
export async function fetchProxied(target: URL): Promise<ProxiedResponse> {
  let upstream: Response;
  try {
    upstream = await fetch(target.href, {
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "user-agent": "Mozilla/5.0 (compatible; KaliPortfolioBrowser/1.0)" },
    });
  } catch {
    throw new ProxyError(`Couldn't reach ${target.hostname}.`, 502);
  }

  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";

  if (!contentType.includes("text/html")) {
    return { body: upstream.body, status: upstream.status, contentType };
  }

  const raw = await upstream.text();
  if (raw.length > MAX_BODY_BYTES) {
    throw new ProxyError("That page is too large to open here.", 502);
  }

  return {
    body: rewriteHtml(raw, target.origin),
    status: upstream.status,
    contentType: "text/html; charset=utf-8",
  };
}

export function proxyErrorPage(message: string): string {
  return errorPage(message);
}
