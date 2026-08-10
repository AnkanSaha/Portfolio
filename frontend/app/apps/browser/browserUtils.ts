export const START_PAGE = "kali://new-tab";
export const PROXY_PATH = "/api/proxy";
const SEARCH_PREFIX = "kali-search:";

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

/** Resolve address-bar input into a navigable URL. Real URLs pass through
 * as-is; anything else is treated as a search query. Every major search
 * engine (Google, Bing, DuckDuckGo — verified against its response headers)
 * sends X-Frame-Options/frame-ancestors that block iframing entirely, so a
 * search query resolves to an internal sentinel instead of a URL — the
 * browser renders a real "open search results" page for it rather than
 * pretending an embed that can't work. */
export function resolveInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === START_PAGE) return START_PAGE;
  if (trimmed.startsWith(SEARCH_PREFIX)) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (DOMAIN_LIKE.test(trimmed) && !trimmed.includes(" ")) return `https://${trimmed}`;
  return `${SEARCH_PREFIX}${encodeURIComponent(trimmed)}`;
}

export function isStartPage(url: string): boolean {
  return url === START_PAGE;
}

export function isSearchQuery(url: string): boolean {
  return url.startsWith(SEARCH_PREFIX);
}

export function searchQueryFrom(url: string): string {
  return decodeURIComponent(url.slice(SEARCH_PREFIX.length));
}

export function displayUrl(url: string): string {
  if (isStartPage(url)) return "";
  if (isSearchQuery(url)) return searchQueryFrom(url);
  return url;
}

export function tabLabel(url: string): string {
  if (isStartPage(url)) return "New Tab";
  if (isSearchQuery(url)) return `Search: ${searchQueryFrom(url)}`;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
