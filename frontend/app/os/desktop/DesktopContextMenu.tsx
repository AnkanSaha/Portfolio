"use client";
import { motion } from "motion/react";
import { FiTerminal, FiHardDrive, FiSettings, FiUser } from "react-icons/fi";
import { useOpenApp } from "../window/useOpenApp";
import styles from "./DesktopContextMenu.module.css";

interface DesktopContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

export default function DesktopContextMenu({ x, y, onClose }: DesktopContextMenuProps) {
  const openApp = useOpenApp();

  function pick(appId: string) {
    openApp(appId);
    onClose();
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} onContextMenu={(e) => e.preventDefault()} />
      <motion.div
        className={styles.menu}
        style={{ left: x, top: y }}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
      >
        <button type="button" className={styles.item} onClick={() => pick("terminal")}>
          <FiTerminal /> Open Terminal Here
        </button>
        <button type="button" className={styles.item} onClick={() => pick("files")}>
          <FiHardDrive /> Files
        </button>
        <div className={styles.sep} />
        <button type="button" className={styles.item} onClick={() => pick("about")}>
          <FiUser /> About This Portfolio
        </button>
        <button type="button" className={styles.item} onClick={() => pick("settings")}>
          <FiSettings /> Settings
        </button>
      </motion.div>
    </>
  );
}
