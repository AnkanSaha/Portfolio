import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  tone?: "default" | "accent" | "green";
  children: ReactNode;
}

export default function Badge({ tone = "default", children }: BadgeProps) {
  const toneClass = tone !== "default" ? styles[tone] : "";
  return <span className={`${styles.badge} ${toneClass}`}>{children}</span>;
}
