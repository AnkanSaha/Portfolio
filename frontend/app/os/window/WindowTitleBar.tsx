import type { ReactNode } from "react";
import WindowControls from "./WindowControls";
import { WINDOW_DRAG_HANDLE } from "../constants";
import styles from "./WindowTitleBar.module.css";

interface WindowTitleBarProps {
  icon: ReactNode;
  title: string;
  focused: boolean;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onDoubleClick: () => void;
}

export default function WindowTitleBar({
  icon,
  title,
  focused,
  onMinimize,
  onMaximize,
  onClose,
  onDoubleClick,
}: WindowTitleBarProps) {
  return (
    <div
      className={`${styles.titlebar} ${WINDOW_DRAG_HANDLE} ${focused ? styles.focused : ""}`}
      onDoubleClick={onDoubleClick}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
      <WindowControls onMinimize={onMinimize} onMaximize={onMaximize} onClose={onClose} />
    </div>
  );
}
