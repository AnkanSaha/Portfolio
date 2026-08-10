"use client";
import { useState } from "react";
import { FiGithub, FiFileText, FiClipboard, FiPackage, FiBookOpen } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";
import styles from "./BrowserStartPage.module.css";

const TILES = [
  { label: "GitHub", url: portfolioData.social.github, icon: FiGithub },
  { label: "Blog", url: "https://blog.ankan.in/", icon: FiFileText },
  { label: "Resume", url: "https://resume.ankan.in/Resume_of_Ankan_Saha.pdf", icon: FiClipboard },
  { label: "AxioDB on NPM", url: "https://www.npmjs.com/package/axiodb", icon: FiPackage },
  { label: "NexoralDNS", url: "https://github.com/nexoral/NexoralDNS", icon: FiGithub },
  { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kali_Linux", icon: FiBookOpen },
];

export default function BrowserStartPage({ onNavigate }: { onNavigate: (target: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.page}>
      <img src="/os/kali-dragon.svg" alt="" className={styles.dragon} />
      <form
        className={styles.searchForm}
        onSubmit={(e) => {
          e.preventDefault();
          onNavigate(query);
        }}
      >
        <input
          className={styles.searchInput}
          placeholder="Search the web or type a URL"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </form>
      <div className={styles.tiles}>
        {TILES.map((t) => (
          <button key={t.label} type="button" className={styles.tile} onClick={() => onNavigate(t.url)}>
            <span className={styles.tileIcon}>
              <t.icon />
            </span>
            <span className={styles.tileLabel}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
