"use client";
import { FiGithub } from "react-icons/fi";
import { AppShell, ScrollArea } from "../../os/ui";
import { useGitHubData } from "../../hooks/useGitHubData";
import styles from "./GitHubApp.module.css";

export default function GitHubApp() {
  const { data, status, error } = useGitHubData();

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.header}>
          <FiGithub />
          <span>
            github.com/<span className={styles.username}>AnkanSaha</span>
          </span>
        </div>

        {status === "loading" || status === "idle" ? (
          <div className={styles.state}>Fetching live stats…</div>
        ) : status === "failed" ? (
          <div className={`${styles.state} ${styles.error}`}>{error ?? "Failed to load GitHub stats."}</div>
        ) : data ? (
          <div className={styles.grid}>
            <div className={styles.tile}>
              <div className={styles.value}>{data.followers}</div>
              <div className={styles.label}>Followers</div>
            </div>
            <div className={styles.tile}>
              <div className={styles.value}>{data.following}</div>
              <div className={styles.label}>Following</div>
            </div>
            <div className={styles.tile}>
              <div className={styles.value}>{data.publicRepos}</div>
              <div className={styles.label}>Public Repos</div>
            </div>
            <div className={styles.tile}>
              <div className={styles.value}>{data.totalStars}</div>
              <div className={styles.label}>Total Stars</div>
            </div>
          </div>
        ) : null}
      </ScrollArea>
    </AppShell>
  );
}
