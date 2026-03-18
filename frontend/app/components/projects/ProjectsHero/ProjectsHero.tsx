import styles from "./ProjectsHero.module.css";

export default function ProjectsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.label}>{"// projects"}</span>
        <h1 className={styles.title}>
          Open Source<br />
          <span className={styles.highlight}>& Production Work</span>
        </h1>
        <p className={styles.subtitle}>
          Production-grade tools, libraries, and infrastructure projects. Built for performance,
          reliability, and developer experience.
        </p>
      </div>
    </section>
  );
}
