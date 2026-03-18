import styles from "./SkillsHero.module.css";

export default function SkillsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.label}>{"// skills"}</span>
        <h1 className={styles.title}>
          Technical<br />
          <span className={styles.highlight}>Expertise</span>
        </h1>
        <p className={styles.subtitle}>
          2+ years building production systems. Specialized in backend engineering,
          cloud infrastructure, and open-source tooling.
        </p>
      </div>
    </section>
  );
}
