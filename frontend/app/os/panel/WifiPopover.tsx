"use client";
import { useEffect, useState } from "react";
import { FiWifi, FiWifiOff } from "react-icons/fi";
import { Switch } from "../ui";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setWifiEnabled } from "../../store/slices/systemSlice";
import TrayPopover from "./TrayPopover";
import styles from "./TrayPopoverContent.module.css";

export default function WifiPopover() {
  const dispatch = useAppDispatch();
  const wifiEnabled = useAppSelector((s) => s.system.wifiEnabled);
  const [browserOnline, setBrowserOnline] = useState(true);

  useEffect(() => {
    setBrowserOnline(navigator.onLine);
    const goOnline = () => setBrowserOnline(true);
    const goOffline = () => setBrowserOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const connected = wifiEnabled && browserOnline;

  return (
    <TrayPopover icon={connected ? <FiWifi /> : <FiWifiOff />} label={connected ? "Online" : "Offline"} active={connected}>
      <div className={styles.row}>
        <div>
          <div className={styles.title}>Wi-Fi</div>
          <div className={styles.subtitle}>
            {!browserOnline ? "No real network connection" : connected ? "Connected" : "Turned off"}
          </div>
        </div>
        <Switch on={wifiEnabled} onToggle={() => dispatch(setWifiEnabled(!wifiEnabled))} />
      </div>
      <div className={styles.hint}>
        Turning Wi-Fi off simulates no internet connection — apps that load live data (GitHub, Nexoral, Blog) will
        show an offline screen instead.
      </div>
    </TrayPopover>
  );
}
