"use client";
import { motion } from "framer-motion";
import TechBadge from "../../shared/TechBadge/TechBadge";
import type { Experience } from "../../../data/portfolioData";
import styles from "./ExperienceTimeline.module.css";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export default function ExperienceCard({ exp, index }: ExperienceCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
    >
      <div className={styles.dot} />
      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.title}>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
          </div>
          <span className={styles.period}>{exp.period}</span>
        </div>
        <p className={styles.description}>{exp.description}</p>
        <div className={styles.badges}>
          {exp.technologies.map((t) => (
            <TechBadge key={t} label={t} variant="cyan" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
