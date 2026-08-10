"use client";
import { useState } from "react";
import { FiExternalLink, FiRefreshCw } from "react-icons/fi";
import { AppShell, Toolbar, ToolbarSpacer } from "../../os/ui";
import styles from "./BlogApp.module.css";

const BLOG_URL = "https://blog.ankan.in/";

export default function BlogApp() {
  const [reloadNonce, setReloadNonce] = useState(0);

  return (
    <AppShell
      toolbar={
        <Toolbar>
          <span className={styles.title}>blog.ankan.in</span>
          <ToolbarSpacer />
          <button type="button" className={styles.link} onClick={() => setReloadNonce((n) => n + 1)}>
            <FiRefreshCw /> Reload
          </button>
          <a className={styles.link} href={BLOG_URL} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Open
          </a>
        </Toolbar>
      }
    >
      <iframe key={reloadNonce} className={styles.frame} src={BLOG_URL} title="Ankan Saha — Blog" />
    </AppShell>
  );
}
