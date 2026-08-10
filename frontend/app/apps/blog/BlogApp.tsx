"use client";
import { useState } from "react";
import { FiExternalLink, FiRefreshCw } from "react-icons/fi";
import { AppShell, Toolbar, ToolbarSpacer, OfflineScreen } from "../../os/ui";
import { useAppSelector } from "../../store/hooks";
import styles from "./BlogApp.module.css";

const BLOG_URL = "https://blog.ankan.in/";

export default function BlogApp() {
  const [reloadNonce, setReloadNonce] = useState(0);
  const wifiEnabled = useAppSelector((s) => s.system.wifiEnabled);

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
      {wifiEnabled ? (
        <iframe key={reloadNonce} className={styles.frame} src={BLOG_URL} title="Ankan Saha — Blog" />
      ) : (
        <OfflineScreen />
      )}
    </AppShell>
  );
}
