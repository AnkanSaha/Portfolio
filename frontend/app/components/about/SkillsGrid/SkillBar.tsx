"use client";
import { motion } from "framer-motion";
import styles from "./SkillsGrid.module.css";

interface SkillBarProps {
  label: string;
  pct: number;
  color: "green" | "cyan" | "blue";
  delay?: number;
}

export default function SkillBar({ label, pct, color, delay = 0 }: SkillBarProps) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillRow}>
        <span className={styles.skillLabel}>{label}</span>
        <span className={`${styles.skillPct} ${styles[color]}`}>{pct}%</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={`${styles.bar} ${styles[color]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
