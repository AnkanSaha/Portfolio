"use client";
import { useGitHubData } from "../../../hooks/useGitHubData";
import styles from "./StatsSection.module.css";

interface StatCard {
  label: string;
  value: string | number;
  suffix?: string;
  color: "green" | "cyan" | "blue";
}

export default function StatsSection() {
  const { data, status } = useGitHubData();

  const loading = status === "loading" || status === "idle";

  const stats: StatCard[] = [
    {
      label: "GitHub Followers",
      value: loading ? "..." : (data?.followers ?? "–"),
      color: "cyan",
    },
    {
      label: "Public Repos",
      value: loading ? "..." : (data?.publicRepos ?? "–"),
      color: "green",
    },
    {
      label: "Total Stars",
      value: loading ? "..." : (data?.totalStars ?? "–"),
      color: "blue",
    },
    {
      label: "Public Gists",
      value: loading ? "..." : (data?.publicGists ?? "–"),
      color: "cyan",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s) => (
          <div key={s.label} className={`${styles.card} ${styles[s.color]}`}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
