import type { ReactNode } from "react";
import styles from "./Toolbar.module.css";

export default function Toolbar({ children }: { children: ReactNode }) {
  return <div className={styles.toolbar}>{children}</div>;
}

export function ToolbarSpacer() {
  return <div className={styles.spacer} />;
}
