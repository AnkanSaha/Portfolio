"use client";
import { FiBattery } from "react-icons/fi";
import { BatteryIcon } from "../ui";
import { useOpenApp } from "../window/useOpenApp";
import { useBattery } from "../../apps/battery/useBattery";
import WifiPopover from "./WifiPopover";
import SoundPopover from "./SoundPopover";
import styles from "./SystemTray.module.css";

export default function SystemTray() {
  const openApp = useOpenApp();
  const battery = useBattery();

  const label = battery.supported ? `${battery.level}% — ${battery.charging ? "Charging" : "On battery"}` : "Battery";

  return (
    <div className={styles.tray}>
      <WifiPopover />
      <SoundPopover />
      <button type="button" className={styles.batteryBtn} title={label} onClick={() => openApp("battery")}>
        {battery.supported ? <BatteryIcon level={battery.level} charging={battery.charging} /> : <FiBattery />}
      </button>
    </div>
  );
}
