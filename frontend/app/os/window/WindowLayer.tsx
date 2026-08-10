"use client";
import { AnimatePresence } from "motion/react";
import { useAppSelector } from "../../store/hooks";
import { APP_REGISTRY } from "../../apps/registry";
import Window from "./Window";
import styles from "./WindowLayer.module.css";

export default function WindowLayer() {
  const windows = useAppSelector((s) => s.windows.windows);
  const zOrder = useAppSelector((s) => s.windows.zOrder);
  const focusedId = useAppSelector((s) => s.windows.focusedId);

  return (
    <div className={styles.layer}>
      <AnimatePresence>
        {zOrder.map((id, index) => {
          const win = windows[id];
          if (!win || win.minimized) return null;
          const app = APP_REGISTRY[win.appId];
          if (!app) return null;
          const AppComponent = app.component;
          const AppIcon = app.icon;
          return (
            <Window key={id} win={win} icon={<AppIcon />} zIndex={100 + index} focused={focusedId === id}>
              <AppComponent params={win.params} />
            </Window>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
