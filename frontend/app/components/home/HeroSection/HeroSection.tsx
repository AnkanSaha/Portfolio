"use client";
import dynamic from "next/dynamic";
import HeroText from "./HeroText";
import HeroActions from "./HeroActions";
import styles from "./HeroSection.module.css";

const HeroTerminal = dynamic(() => import("../../Terminal/HeroTerminal"), { ssr: false });

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <HeroText />
          <HeroActions />
        </div>
        <div className={styles.right}>
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
