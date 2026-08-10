import { FiWifiOff } from "react-icons/fi";
import styles from "./OfflineScreen.module.css";

export default function OfflineScreen() {
  return (
    <div className={styles.screen}>
      <FiWifiOff className={styles.icon} />
      <div className={styles.title}>You&apos;re Offline</div>
      <div className={styles.text}>Wi-Fi is turned off. Turn it back on from the system tray to load this page.</div>
    </div>
  );
}
