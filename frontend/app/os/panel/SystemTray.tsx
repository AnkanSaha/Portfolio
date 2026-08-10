"use client";
import { useEffect, useState } from "react";
import { FiWifi, FiWifiOff, FiVolume2, FiBatteryCharging } from "react-icons/fi";
import styles from "./SystemTray.module.css";

export default function SystemTray() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div className={styles.tray}>
      <span title={online ? "Online" : "Offline"} className={online ? "" : styles.offline}>
        {online ? <FiWifi /> : <FiWifiOff />}
      </span>
      <FiVolume2 />
      <FiBatteryCharging />
    </div>
  );
}
