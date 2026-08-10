import type { ReactNode } from "react";
import styles from "./ScrollArea.module.css";

export default function ScrollArea({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.scroll} ${className ?? ""}`}>{children}</div>;
}
