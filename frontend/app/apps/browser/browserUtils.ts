export const START_PAGE = "kali://new-tab";
export const PROXY_PATH = "/api/proxy";

/** URL the iframe actually loads — routed through our own server-side proxy
 * so the target's X-Frame-Options never reaches the browser. */
export function proxiedSrc(url: string): string {
  return `${PROXY_PATH}?url=${encodeURIComponent(url)}`;
}

/** Given the iframe's own (same-origin, since it's served from our proxy)
 * location after an in-page link click, recover the real target URL — or
 * null if this isn't a proxied navigation (e.g. still on about:blank). */
export function realUrlFromProxiedLocation(href: string): string | null {
  try {
    const parsed = new URL(href);
    if (parsed.pathname !== PROXY_PATH) return null;
    const raw = parsed.searchParams.get("url");
    return raw ? decodeURIComponent(raw) : null;
  } catch {
    return null;
  }
}

const DOMAIN_LIKE = /^[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?(\/.*)?$/i;

/** Resolve address-bar input into a navigable URL, exactly like a real
 * browser: URLs pass through as-is, anything else becomes a search engine
 * URL. Since navigation always goes through our own proxy (which strips the
 * target's X-Frame-Options), a real search results page — not a canned
 * list — loads for any query. DuckDuckGo's plain-HTML endpoint is used
 * because it's simple server-rendered markup that survives proxying far
 * better than a JS-heavy results page would. */
export function resolveInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === START_PAGE) return START_PAGE;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (DOMAIN_LIKE.test(trimmed) && !trimmed.includes(" ")) return `https://${trimmed}`;
  return `https://html.duckduckgo.com/html/?q=${encodeURIComponent(trimmed)}`;
}

export function isStartPage(url: string): boolean {
  return url === START_PAGE;
}

function searchQueryOf(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "html.duckduckgo.com") return null;
    return parsed.searchParams.get("q");
  } catch {
    return null;
  }
}

export function displayUrl(url: string): string {
  if (isStartPage(url)) return "";
  return searchQueryOf(url) ?? url;
}

export function tabLabel(url: string): string {
  if (isStartPage(url)) return "New Tab";
  const query = searchQueryOf(url);
  if (query) return `Search: ${query}`;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
