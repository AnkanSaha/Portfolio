"use client";
import { useState } from "react";
import { useSetting } from "../../hooks/useSetting";
import WhiskerMenuButton from "./WhiskerMenuButton";
import QuickLaunch from "./QuickLaunch";
import TaskbarButtons from "./TaskbarButtons";
import SystemTray from "./SystemTray";
import Clock from "./Clock";
import PowerMenu from "./PowerMenu";
import styles from "./Panel.module.css";

export default function Panel() {
  const [autoHide] = useSetting<boolean>("panelAutoHide", false);
  const [hovering, setHovering] = useState(false);
  const collapsed = autoHide && !hovering;

  return (
    <div
      className={`${styles.autoHideWrapper} ${collapsed ? styles.collapsed : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={styles.panel}>
        <WhiskerMenuButton />
        <div className={styles.divider} />
        <QuickLaunch />
        <div className={styles.divider} />
        <TaskbarButtons />
        <div className={styles.spacer} />
        <div className={styles.right}>
          <SystemTray />
          <div className={styles.divider} />
          <Clock />
          <PowerMenu />
        </div>
      </div>
    </div>
  );
}
