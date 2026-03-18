import { portfolioData } from "../../../data/portfolioData";
import styles from "./LanguagesSection.module.css";

const LEVEL_COLOR: Record<string, string> = {
  Native: "green",
  Professional: "cyan",
  Conversational: "blue",
};

export default function LanguagesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>// languages</span>
        <div className={styles.row}>
          {portfolioData.languages.map((lang) => {
            const [name, level] = lang.split(" (");
            const lvl = level?.replace(")", "") ?? "";
            const color = LEVEL_COLOR[lvl] ?? "cyan";
            return (
              <div key={lang} className={`${styles.card} ${styles[color]}`}>
                <span className={styles.name}>{name}</span>
                <span className={styles.level}>{lvl}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
