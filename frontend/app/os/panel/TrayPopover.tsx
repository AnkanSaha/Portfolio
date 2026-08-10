"use client";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./TrayPopover.module.css";

interface TrayPopoverProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  children: ReactNode;
}

export default function TrayPopover({ icon, label, active, children }: TrayPopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.btn} ${active === false ? styles.inactive : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={label}
        title={label}
      >
        {icon}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className={styles.overlay} onClick={() => setOpen(false)} />
            <motion.div
              className={styles.panel}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
