import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import TechBadge from "../../shared/TechBadge/TechBadge";
import GlowButton from "../../shared/GlowButton/GlowButton";
import { portfolioData } from "../../../data/portfolioData";
import styles from "./SkillsPreview.module.css";

const VARIANTS: Array<"green" | "cyan" | "blue"> = ["green", "cyan", "blue"];

export default function SkillsPreview() {
  const categories = portfolioData.skillCategories.slice(0, 3).map((c) => [c.name, c.skills] as [string, string[]]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          label="// expertise"
          title="Skills & Technologies"
          subtitle="Specialized in backend systems, cloud infrastructure, and performance engineering."
        />

        <div className={styles.grid}>
          {categories.map(([cat, skills], ci) => (
            <div key={cat} className={styles.card}>
              <h3 className={styles.catTitle}>{cat}</h3>
              <div className={styles.badges}>
                {skills.slice(0, 6).map((s) => (
                  <TechBadge key={s} label={s} variant={VARIANTS[ci % 3]} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <GlowButton href="/about" variant="outline">View Full Skills →</GlowButton>
        </div>
      </div>
    </section>
  );
}
