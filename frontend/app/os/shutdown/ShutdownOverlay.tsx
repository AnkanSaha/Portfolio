"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPower } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPhase } from "../../store/slices/systemSlice";
import { requestFullscreen } from "../theme/useAutoFullscreen";
import { SHUTDOWN_LOG, SHUTDOWN_STAGE_MS } from "./shutdownSequence";
import styles from "./ShutdownOverlay.module.css";

type Stage = "log" | "black";

// window.close() only works on a tab that a script opened. A tab the visitor
// navigated to directly cannot be closed by script in any current browser —
// that restriction can't be bypassed. window.open("", "_self") re-claims the
// window as script-opened in a handful of older/embedded browser contexts,
// so it's worth trying as a second attempt before giving up. Deliberately
// does NOT touch fullscreen state — exiting it here would only strand a
// failed close outside fullscreen for no benefit.
function attemptTabClose() {
  if (typeof window === "undefined") return;
  window.close();
  try {
    window.open("", "_self");
    window.close();
  } catch {
    /* ignore */
  }
}

export default function ShutdownOverlay() {
  const dispatch = useAppDispatch();
  const phase = useAppSelector((s) => s.system.phase);
  const [stage, setStage] = useState<Stage>("log");

  useEffect(() => {
    if (phase !== "shuttingDown") return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStage("black"), SHUTDOWN_STAGE_MS.log));
    timers.push(setTimeout(attemptTabClose, SHUTDOWN_STAGE_MS.log + SHUTDOWN_STAGE_MS.blackout));
    timers.push(
      setTimeout(
        () => dispatch(setPhase("halted")),
        SHUTDOWN_STAGE_MS.log + SHUTDOWN_STAGE_MS.blackout + SHUTDOWN_STAGE_MS.closeAttempt
      )
    );

    return () => timers.forEach(clearTimeout);
  }, [phase, dispatch]);

  function reboot() {
    requestFullscreen();
    try {
      sessionStorage.removeItem("os:booted");
    } catch {
      /* ignore */
    }
    setStage("log");
    dispatch(setPhase("boot"));
  }

  return (
    <motion.div className={styles.screen} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AnimatePresence mode="wait">
        {phase === "shuttingDown" && stage === "log" && (
          <motion.div key="log" className={styles.log} exit={{ opacity: 0 }}>
            {SHUTDOWN_LOG.map((line) => (
              <div key={line} className={styles.logLine}>
                <span className={styles.stopping}>[STOP]</span> {line}
              </div>
            ))}
          </motion.div>
        )}

        {phase === "shuttingDown" && stage === "black" && (
          <motion.div key="black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ flex: 1 }} />
        )}

        {phase === "halted" && (
          <motion.div key="halted" className={styles.halted} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className={styles.haltedText}>System halted.</div>
            <button type="button" className={styles.powerBtn} onClick={reboot} aria-label="Power on">
              <FiPower />
            </button>
            <div className={styles.powerHint}>
              Chrome blocks scripts from closing a tab you opened yourself — press Ctrl+W (Cmd+W on Mac) to close it,
              or press power to restart the OS.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
