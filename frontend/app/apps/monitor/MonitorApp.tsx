"use client";
import { useEffect, useState } from "react";
import { AppShell, ScrollArea } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import styles from "./MonitorApp.module.css";

const SKILLS = portfolioData.skillCategories.flatMap((c) => c.skills).slice(0, 8);
const BASE_PCT = SKILLS.map((_, i) => Math.max(70, 95 - i * 3));

function jitter(base: number) {
  return Math.min(99, Math.max(base - 6, base + Math.round((Math.random() - 0.5) * 8)));
}

export default function MonitorApp() {
  const [cpu, setCpu] = useState(62);
  const [mem, setMem] = useState(48);
  const [disk] = useState(44);

  useEffect(() => {
    const id = setInterval(() => {
      setCpu(jitter(60));
      setMem(jitter(48));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// System"}</div>
          <div className={styles.gaugeGrid}>
            <div className={styles.gauge}>
              <div className={styles.gaugeValue}>{cpu}%</div>
              <div className={styles.gaugeLabel}>CPU</div>
            </div>
            <div className={styles.gauge}>
              <div className={styles.gaugeValue}>{mem}%</div>
              <div className={styles.gaugeLabel}>Memory</div>
            </div>
            <div className={styles.gauge}>
              <div className={styles.gaugeValue}>{disk}%</div>
              <div className={styles.gaugeLabel}>Disk</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Skill Usage"}</div>
          {SKILLS.map((skill, i) => (
            <div key={skill} className={styles.meterRow}>
              <span className={styles.meterLabel}>{skill}</span>
              <div className={styles.meterTrack}>
                <div className={styles.meterFill} style={{ width: `${BASE_PCT[i]}%` }} />
              </div>
              <span className={styles.meterValue}>{BASE_PCT[i]}%</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </AppShell>
  );
}
