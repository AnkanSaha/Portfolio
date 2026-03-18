"use client";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { portfolioData } from "../../../data/portfolioData";
import styles from "./ExperienceTimeline.module.css";

export default function ExperienceTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader label="// experience" title="Work History" />
        <div className={styles.timeline}>
          {portfolioData.experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
