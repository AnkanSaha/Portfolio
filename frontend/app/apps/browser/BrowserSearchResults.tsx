"use client";
import { useEffect, useState } from "react";
import { searchWeb, type SearchResponse } from "./browserSearch";
import styles from "./BrowserSearchResults.module.css";

interface BrowserSearchResultsProps {
  query: string;
  onNavigate: (target: string) => void;
}

type Status = "loading" | "done" | "error";

export default function BrowserSearchResults({ query, onNavigate }: BrowserSearchResultsProps) {
  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<SearchResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    setData(null);

    searchWeb(query, controller.signal)
      .then((res) => {
        setData(res);
        setStatus("done");
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setStatus("error");
      });

    return () => controller.abort();
  }, [query]);

  if (status === "loading") {
    return <div className={styles.page}>{/* no layout shift while waiting */}</div>;
  }

  if (status === "error") {
    return (
      <div className={styles.page}>
        <div className={styles.state}>Couldn&apos;t reach the search index. Check your connection and try again.</div>
      </div>
    );
  }

  const results = data?.results ?? [];

  return (
    <div className={styles.page}>
      <div className={styles.stats}>
        {results.length > 0 ? (
          <>
            About {data?.totalHits.toLocaleString()} results for &ldquo;{query}&rdquo;
          </>
        ) : (
          <>No results for &ldquo;{query}&rdquo;</>
        )}
        {data?.suggestion && (
          <span className={styles.suggestion}>
            {" "}
            — did you mean{" "}
            <button type="button" className={styles.suggestionLink} onClick={() => onNavigate(data.suggestion!)}>
              {data.suggestion}
            </button>
            ?
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <div className={styles.state}>Try a different search term.</div>
      ) : (
        <div className={styles.results}>
          {results.map((r) => (
            <div key={r.url} className={styles.result}>
              <div className={styles.resultUrl}>{r.url}</div>
              <button type="button" className={styles.resultTitle} onClick={() => onNavigate(r.url)}>
                {r.title}
              </button>
              <div className={styles.resultSnippet}>{r.snippet}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
