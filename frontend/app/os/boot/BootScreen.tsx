"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAppDispatch } from "../../store/hooks";
import { setPhase } from "../../store/slices/systemSlice";
import { requestFullscreen } from "../theme/useAutoFullscreen";
import { GRUB_ENTRIES, BOOT_LOG, BOOT_STAGE_MS } from "./bootSequence";
import styles from "./BootScreen.module.css";

const SESSION_KEY = "os:booted";
type Stage = "gate" | "grub" | "log" | "splash";

const LOG_CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const LOG_LINE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function BootScreen() {
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState<Stage>("gate");
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);
  const startedRef = useRef(false);

  function finish() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    dispatch(setPhase("desktop"));
  }

  function start() {
    if (startedRef.current) return;
    startedRef.current = true;
    requestFullscreen();

    let alreadyBooted = false;
    try {
      alreadyBooted = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (alreadyBooted) {
      finish();
      return;
    }
    setStage("grub");
  }

  useLayoutEffect(() => {
    // Rebooting from within the app (power menu, halted-screen power button,
    // terminal `reboot`) already ran inside a real click — fullscreen is
    // already active, so don't make the visitor click through the gate again.
    if (document.fullscreenElement) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // One timer per stage, each armed only while its own stage is active —
    // advancing past "grub" must not cancel the timer that later advances
    // past "log", since that timer belongs to a later run of this effect.
    if (stage === "grub") {
      const t = setTimeout(() => setStage("log"), BOOT_STAGE_MS.grub);
      return () => clearTimeout(t);
    }
    if (stage === "log") {
      const t = setTimeout(() => setStage("splash"), BOOT_STAGE_MS.log);
      return () => clearTimeout(t);
    }
    if (stage === "splash") {
      const t = setTimeout(finish, BOOT_STAGE_MS.splash);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  useEffect(() => {
    if (stage !== "splash") return;
    const start = Date.now();
    const id = setInterval(() => {
      setProgress(Math.min(100, ((Date.now() - start) / BOOT_STAGE_MS.splash) * 100));
    }, 40);
    return () => clearInterval(id);
  }, [stage]);

  useEffect(() => {
    const skip = () => (stage === "gate" ? start() : finish());
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <motion.div className={styles.screen} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <AnimatePresence mode="wait">
        {stage === "gate" && (
          <motion.div key="gate" className={styles.gate} exit={{ opacity: 0 }}>
            <img src="/os/dragon.svg" alt="" className={styles.gateDragon} />
            <div className={styles.gateText}>Press any key to boot Ankan OS</div>
          </motion.div>
        )}

        {stage === "grub" && (
          <motion.div key="grub" className={styles.grub} exit={{ opacity: 0 }}>
            <div className={styles.grubTitle}>GNU GRUB version 2.12</div>
            {GRUB_ENTRIES.map((entry, i) => (
              <div key={entry} className={`${styles.grubEntry} ${i === 0 ? styles.grubActive : ""}`}>
                {entry}
              </div>
            ))}
          </motion.div>
        )}

        {stage === "log" && (
          <motion.div
            key="log"
            className={styles.log}
            variants={LOG_CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {BOOT_LOG.map((line) => (
              <motion.div key={line} className={styles.logLine} variants={LOG_LINE_VARIANTS}>
                <span className={styles.ok}>[ OK ]</span> {line}
              </motion.div>
            ))}
          </motion.div>
        )}

        {stage === "splash" && (
          <motion.div
            key="splash"
            className={styles.splash}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src="/os/dragon.svg" alt="" className={styles.dragon} />
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.splashLabel}>Starting Ankan OS</div>
          </motion.div>
        )}
      </AnimatePresence>

      {stage !== "gate" && <div className={styles.hint}>Press any key to skip</div>}
    </motion.div>
  );
}
