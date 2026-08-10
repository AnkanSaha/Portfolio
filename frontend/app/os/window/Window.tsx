"use client";
import { useRef, type ReactNode } from "react";
import { Rnd, type RndDragCallback, type RndResizeCallback } from "react-rnd";
import { motion } from "motion/react";
import { useAppDispatch } from "../../store/hooks";
import {
  closeWindow,
  focusWindow,
  minimizeWindow,
  moveResizeWindow,
  toggleMaximize,
  type WindowState,
} from "../../store/slices/windowsSlice";
import WindowTitleBar from "./WindowTitleBar";
import { detectSnapZone, getMaximizedRect, getSnapRect } from "./useWindowGeometry";
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH, WINDOW_DRAG_HANDLE } from "../constants";
import styles from "./Window.module.css";

interface WindowProps {
  win: WindowState;
  icon: ReactNode;
  zIndex: number;
  focused: boolean;
  children: ReactNode;
}

export default function Window({ win, icon, zIndex, focused, children }: WindowProps) {
  const dispatch = useAppDispatch();
  const rndRef = useRef<Rnd>(null);

  const rect = win.maximized ? getMaximizedRect() : { x: win.x, y: win.y, w: win.w, h: win.h };

  const handleDragStop: RndDragCallback = (_e, data) => {
    const zone = detectSnapZone(data.x, data.y);
    const snapRect = getSnapRect(zone);
    if (zone === "top") {
      if (!win.maximized) dispatch(toggleMaximize(win.id));
      return;
    }
    const geometry = snapRect ?? { x: data.x, y: data.y, w: win.w, h: win.h };
    dispatch(moveResizeWindow({ id: win.id, geometry }));
  };

  const handleResizeStop: RndResizeCallback = (_e, _dir, ref, _delta, position) => {
    dispatch(
      moveResizeWindow({
        id: win.id,
        geometry: {
          x: position.x,
          y: position.y,
          w: parseFloat(ref.style.width),
          h: parseFloat(ref.style.height),
        },
      })
    );
  };

  return (
    <Rnd
      ref={rndRef}
      style={{ zIndex, pointerEvents: "auto" }}
      position={{ x: rect.x, y: rect.y }}
      size={{ width: rect.w, height: rect.h }}
      minWidth={MIN_WINDOW_WIDTH}
      minHeight={MIN_WINDOW_HEIGHT}
      bounds="window"
      dragHandleClassName={WINDOW_DRAG_HANDLE}
      disableDragging={win.maximized}
      enableResizing={!win.maximized}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      onMouseDown={() => {
        if (!focused) dispatch(focusWindow(win.id));
      }}
    >
      <motion.div
        className={`${styles.frame} ${focused ? styles.focused : ""}`}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, y: 24 }}
        transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
      >
        <WindowTitleBar
          icon={icon}
          title={win.title}
          focused={focused}
          onMinimize={() => dispatch(minimizeWindow(win.id))}
          onMaximize={() => dispatch(toggleMaximize(win.id))}
          onClose={() => dispatch(closeWindow(win.id))}
          onDoubleClick={() => dispatch(toggleMaximize(win.id))}
        />
        <div className={styles.content}>{children}</div>
      </motion.div>
    </Rnd>
  );
}
