"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import WhiskerMenu from "./WhiskerMenu";
import styles from "./WhiskerMenuButton.module.css";

export default function WhiskerMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.btn} ${open ? styles.active : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <img src="/os/dragon.svg" alt="" className={styles.dragon} />
        Applications
      </button>
      <AnimatePresence>{open && <WhiskerMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
