"use client";
import { useRef } from "react";
import { useXterm } from "./useXterm";
import { useSetting } from "../../hooks/useSetting";
import styles from "./TerminalApp.module.css";

export default function TerminalApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity] = useSetting<number>("terminalOpacity", 95);
  const [fontSize] = useSetting<number>("terminalFontSize", 14);
  useXterm(containerRef, { fontSize });

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `linear-gradient(rgba(35,37,46,${opacity / 100}), rgba(35,37,46,${opacity / 100})), url(/os/wallpaper.svg)`,
        backdropFilter: "blur(6px)",
      }}
    >
      <div ref={containerRef} className={styles.terminal} />
    </div>
  );
}
