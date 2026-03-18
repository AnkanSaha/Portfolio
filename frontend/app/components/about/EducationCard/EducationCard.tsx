import { portfolioData } from "../../../data/portfolioData";
import styles from "./EducationCard.module.css";
import { FiBookOpen } from "react-icons/fi";

export default function EducationCard() {
  const { education } = portfolioData;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>{"// education"}</span>
        <div className={styles.card}>
          <div className={styles.icon}><FiBookOpen /></div>
          <div>
            <h3 className={styles.degree}>{education.degree}</h3>
            <p className={styles.university}>{education.university}</p>
            <p className={styles.period}>{education.period}</p>
            <p className={styles.desc}>{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
