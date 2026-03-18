"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../../../data/portfolioData";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import styles from "./SkillsAllGrid.module.css";

const ICON_MAP: Record<string, string> = {
  "Languages & Frameworks": "⚙️",
  "Frontend Ecosystem": "🖥️",
  "Databases & Cloud": "☁️",
  "AI & Integration": "🤖",
  "System Design": "🏗️",
};

const COLOR_MAP: Record<string, "green" | "cyan" | "blue" | "purple" | "orange"> = {
  "Languages & Frameworks": "green",
  "Frontend Ecosystem": "cyan",
  "Databases & Cloud": "blue",
  "AI & Integration": "purple",
  "System Design": "orange",
};

export default function SkillsAllGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          label="// tech stack"
          title="All Skills"
          subtitle="Every tool and technology I work with — from languages to cloud infrastructure."
        />

        <div className={styles.grid}>
          {portfolioData.skillCategories.map((cat, ci) => {
            const color = COLOR_MAP[cat.name] ?? "cyan";
            return (
              <motion.div
                key={cat.name}
                className={`${styles.card} ${styles[color]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{ICON_MAP[cat.name] ?? "🔧"}</span>
                  <h3 className={styles.catName}>{cat.name}</h3>
                </div>

                <div className={styles.pills}>
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className={`${styles.pill} ${styles[`pill_${color}`]}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: ci * 0.08 + si * 0.04 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
