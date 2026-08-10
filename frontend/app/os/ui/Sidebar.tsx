import type { CSSProperties, ReactNode } from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  width?: number;
  children: ReactNode;
}

export default function Sidebar({ width, children }: SidebarProps) {
  const style = width ? ({ "--sidebar-width": `${width}px` } as CSSProperties) : undefined;
  return (
    <nav className={styles.sidebar} style={style}>
      {children}
    </nav>
  );
}
