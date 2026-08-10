"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiPower, FiRefreshCw } from "react-icons/fi";
import { useAppDispatch } from "../../store/hooks";
import { setPhase } from "../../store/slices/systemSlice";
import styles from "./PowerMenu.module.css";

export default function PowerMenu() {
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <button type="button" className={styles.btn} onClick={() => setOpen((o) => !o)} aria-label="Power">
        <FiPower size={15} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className={styles.overlay} onClick={() => setOpen(false)} />
            <motion.div
              className={styles.menu}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              <button
                type="button"
                className={styles.item}
                onClick={() => typeof window !== "undefined" && window.location.reload()}
              >
                <FiRefreshCw /> Restart
              </button>
              <button
                type="button"
                className={styles.item}
                onClick={() => {
                  setOpen(false);
                  setConfirming(true);
                }}
              >
                <FiPower /> Shut Down
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {confirming && (
          <motion.div className={styles.confirmOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className={styles.dialog}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
            >
              <div className={styles.dialogIcon}>
                <FiPower />
              </div>
              <div className={styles.dialogTitle}>Shut down this session?</div>
              <div className={styles.dialogText}>This will close the tab. Any unsaved state will be lost.</div>
              <div className={styles.dialogActions}>
                <button type="button" className={styles.dialogBtn} onClick={() => setConfirming(false)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className={`${styles.dialogBtn} ${styles.confirmBtn}`}
                  onClick={() => {
                    setConfirming(false);
                    dispatch(setPhase("shuttingDown"));
                  }}
                >
                  Shut Down
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
