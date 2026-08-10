export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface SearchResponse {
  results: SearchResult[];
  totalHits: number;
  suggestion: string | null;
}

const API = "https://en.wikipedia.org/w/api.php";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function articleUrl(title: string): string {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}

/** Wikipedia's search API sends Access-Control-Allow-Origin: * and needs no
 * key, so it's a real, live, general-purpose search callable directly from
 * the browser — and every result URL is on a domain already confirmed to
 * allow iframing, so clicking through actually loads inside the window. */
export async function searchWeb(query: string, signal?: AbortSignal): Promise<SearchResponse> {
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    format: "json",
    origin: "*",
    srlimit: "8",
    srsearch: query,
  });

  const res = await fetch(`${API}?${params}`, { signal });
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  const data = await res.json();

  const results: SearchResult[] = (data.query?.search ?? []).map((r: { title: string; snippet: string }) => ({
    title: r.title,
    url: articleUrl(r.title),
    snippet: stripHtml(r.snippet),
  }));

  return {
    results,
    totalHits: data.query?.searchinfo?.totalhits ?? 0,
    suggestion: data.query?.searchinfo?.suggestion ?? null,
  };
}
