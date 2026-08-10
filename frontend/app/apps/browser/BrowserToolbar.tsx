"use client";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiRefreshCw, FiHome, FiExternalLink } from "react-icons/fi";
import { isStartPage, isSearchQuery, displayUrl } from "./browserUtils";
import styles from "./BrowserToolbar.module.css";

interface BrowserToolbarProps {
  url: string;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
  onReload: () => void;
  onHome: () => void;
  onNavigate: (target: string) => void;
}

export default function BrowserToolbar({
  url,
  canGoBack,
  canGoForward,
  onBack,
  onForward,
  onReload,
  onHome,
  onNavigate,
}: BrowserToolbarProps) {
  const [input, setInput] = useState(displayUrl(url));

  useEffect(() => {
    setInput(displayUrl(url));
  }, [url]);

  return (
    <div className={styles.toolbar}>
      <button type="button" className={styles.navBtn} onClick={onBack} disabled={!canGoBack} aria-label="Back">
        <FiArrowLeft />
      </button>
      <button type="button" className={styles.navBtn} onClick={onForward} disabled={!canGoForward} aria-label="Forward">
        <FiArrowRight />
      </button>
      <button type="button" className={styles.navBtn} onClick={onReload} aria-label="Reload">
        <FiRefreshCw />
      </button>
      <button type="button" className={styles.navBtn} onClick={onHome} aria-label="Home">
        <FiHome />
      </button>

      <form
        className={styles.addressForm}
        onSubmit={(e) => {
          e.preventDefault();
          onNavigate(input);
        }}
      >
        <input
          className={styles.addressInput}
          value={input}
          placeholder="Search or type a URL"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {!isStartPage(url) && !isSearchQuery(url) && (
        <a className={styles.externalLink} href={url} target="_blank" rel="noopener noreferrer">
          <FiExternalLink /> Open
        </a>
      )}
    </div>
  );
}
