import type { ReactNode } from "react";
import styles from "./MobileGate.module.css";

export default function MobileGate({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.gate}>
        <img src="/os/kali-dragon.svg" alt="" className={styles.dragon} />
        <div className={styles.line}>
          <span className={styles.fail}>[ FAIL ]</span> Failed to start Graphical Interface.
        </div>
        <div className={styles.line}>Detected viewport below the minimum 768px.</div>
        <p className={styles.message}>
          This portfolio runs as a full desktop operating system — it needs a tablet, laptop or desktop to boot.
        </p>
        <p className={styles.hint}>Come back on a bigger screen.</p>
      </div>
      <div className={styles.osWrapper}>{children}</div>
    </>
  );
}
