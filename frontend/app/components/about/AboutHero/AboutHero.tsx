import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.label}>// about</span>
        <h1 className={styles.title}>
          The Engineer<br />
          <span className={styles.highlight}>Behind the Code</span>
        </h1>
        <p className={styles.subtitle}>
          Self-taught backend specialist with a passion for distributed systems, performance
          engineering, and open-source development. I turn complex infrastructure challenges
          into elegant, scalable solutions.
        </p>
      </div>
    </section>
  );
}
