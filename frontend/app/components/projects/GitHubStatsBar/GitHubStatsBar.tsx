"use client";
import { useGitHubData } from "../../../hooks/useGitHubData";
import styles from "./GitHubStatsBar.module.css";
import { FiStar, FiGitBranch, FiUsers, FiCode } from "react-icons/fi";

export default function GitHubStatsBar() {
  const { data, status } = useGitHubData();
  const loading = status === "loading" || status === "idle";

  const stats = [
    { icon: <FiUsers />, label: "Followers", value: loading ? "..." : data?.followers ?? "–" },
    { icon: <FiGitBranch />, label: "Repos", value: loading ? "..." : data?.publicRepos ?? "–" },
    { icon: <FiStar />, label: "Total Stars", value: loading ? "..." : data?.totalStars ?? "–" },
    { icon: <FiCode />, label: "Gists", value: loading ? "..." : data?.publicGists ?? "–" },
  ];

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.icon}>{s.icon}</span>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
