import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.label}>// contact</span>
        <h1 className={styles.title}>
          Let&apos;s Build<br />
          <span className={styles.highlight}>Something Great</span>
        </h1>
        <p className={styles.subtitle}>
          Open to full-time roles, freelance projects, and interesting collaborations.
          Drop me a message — I respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
