"use client";
import { useState, type MouseEvent } from "react";
import { AnimatePresence } from "motion/react";
import Wallpaper from "./Wallpaper";
import DesktopIcons from "./DesktopIcons";
import DesktopContextMenu from "./DesktopContextMenu";
import styles from "./Desktop.module.css";

export default function Desktop() {
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);

  function handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    setMenuPos({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <Wallpaper />
      <div className={styles.desktop} onContextMenu={handleContextMenu}>
        <DesktopIcons />
      </div>
      <AnimatePresence>
        {menuPos && <DesktopContextMenu x={menuPos.x} y={menuPos.y} onClose={() => setMenuPos(null)} />}
      </AnimatePresence>
    </>
  );
}
