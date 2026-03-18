import GlowButton from "../../shared/GlowButton/GlowButton";
import styles from "./HeroSection.module.css";

export default function HeroActions() {
  return (
    <div className={styles.actions}>
      <GlowButton href="/projects" variant="primary">View Projects</GlowButton>
      <GlowButton href="/contact" variant="secondary">Get in Touch</GlowButton>
      <GlowButton
        href="https://github.com/AnkanSaha"
        variant="outline"
        external
      >
        GitHub
      </GlowButton>
    </div>
  );
}
