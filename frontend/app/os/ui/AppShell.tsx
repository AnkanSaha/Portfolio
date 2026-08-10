import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

interface AppShellProps {
  toolbar?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
}

export default function AppShell({ toolbar, sidebar, children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      {toolbar}
      <div className={styles.body}>
        {sidebar}
        {children}
      </div>
    </div>
  );
}
