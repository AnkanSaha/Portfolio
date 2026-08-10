"use client";
import { FiBatteryCharging } from "react-icons/fi";
import { useOpenApp } from "../window/useOpenApp";
import WifiPopover from "./WifiPopover";
import SoundPopover from "./SoundPopover";
import styles from "./SystemTray.module.css";

export default function SystemTray() {
  const openApp = useOpenApp();

  return (
    <div className={styles.tray}>
      <WifiPopover />
      <SoundPopover />
      <button type="button" className={styles.batteryBtn} title="Battery" onClick={() => openApp("battery")}>
        <FiBatteryCharging />
      </button>
    </div>
  );
}
