import { portfolioData } from "../../../data/portfolioData";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import styles from "./AchievementsSection.module.css";
import { FiAward } from "react-icons/fi";

export default function AchievementsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader label="// achievements" title="Recognition & Impact" />
        <div className={styles.grid}>
          {portfolioData.achievements.map((a) => (
            <div key={a} className={styles.item}>
              <FiAward className={styles.icon} />
              <span>{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
