"use client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleTaskbarWindow } from "../../store/slices/windowsSlice";
import { APP_REGISTRY } from "../../apps/registry";
import styles from "./TaskbarButtons.module.css";

export default function TaskbarButtons() {
  const windows = useAppSelector((s) => s.windows.windows);
  const zOrder = useAppSelector((s) => s.windows.zOrder);
  const focusedId = useAppSelector((s) => s.windows.focusedId);
  const dispatch = useAppDispatch();

  if (zOrder.length === 0) return null;

  return (
    <div className={styles.bar}>
      {zOrder.map((id) => {
        const win = windows[id];
        if (!win) return null;
        const app = APP_REGISTRY[win.appId];
        if (!app) return null;
        const Icon = app.icon;
        const isActive = focusedId === id && !win.minimized;
        return (
          <button
            key={id}
            type="button"
            className={`${styles.btn} ${isActive ? styles.active : ""}`}
            onClick={() => dispatch(toggleTaskbarWindow(id))}
          >
            <Icon size={13} />
            <span className={styles.label}>{win.title}</span>
          </button>
        );
      })}
    </div>
  );
}
