import { APP_REGISTRY } from "../../apps/registry";
import { useOpenApp } from "../window/useOpenApp";
import styles from "./QuickLaunch.module.css";

const PINNED = ["terminal", "about", "projects", "resume", "contact", "github", "files"];

export default function QuickLaunch() {
  const openApp = useOpenApp();

  return (
    <div className={styles.launch}>
      {PINNED.map((id) => {
        const app = APP_REGISTRY[id];
        const Icon = app.icon;
        return (
          <button key={id} type="button" className={styles.btn} title={app.title} onClick={() => openApp(id)}>
            <Icon size={15} />
          </button>
        );
      })}
    </div>
  );
}
