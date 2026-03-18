"use client";
import Typewriter from "typewriter-effect";
import styles from "./HeroSection.module.css";

export default function HeroText() {
  return (
    <div className={styles.textBlock}>
      <div className={styles.greeting}>
        <span className={styles.prompt}>$ </span>
        <span className={styles.greetingText}>Hello, World!</span>
      </div>

      <h1 className={styles.name}>
        I&apos;m <span className={styles.nameHighlight}>Ankan Saha</span>
      </h1>

      <div className={styles.typewriter}>
        <span className={styles.typePrefix}>&gt; </span>
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Backend Engineering Specialist",
              "Infrastructure Architect",
              "Open Source Contributor",
              "Cloudflare Workers Expert",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
          }}
        />
      </div>

      <p className={styles.bio}>
        Building scalable backend systems serving <span className={styles.highlight}>10M+ users</span>.
        Engineered infrastructure at <span className={styles.highlight}>Bengal&apos;s biggest OTT platform</span>.
        Specialized in microservices, real-time processing, and open-source tooling.
      </p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>2+</span>
          <span className={styles.statLabel}>Years Exp</span>
        </div>
        <div className={styles.statDivider}>/</div>
        <div className={styles.stat}>
          <span className={styles.statValue}>10M+</span>
          <span className={styles.statLabel}>Users Served</span>
        </div>
        <div className={styles.statDivider}>/</div>
        <div className={styles.stat}>
          <span className={styles.statValue}>8K+</span>
          <span className={styles.statLabel}>DNS QPS</span>
        </div>
      </div>
    </div>
  );
}
