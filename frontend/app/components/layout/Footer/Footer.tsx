import styles from "./Footer.module.css";
import { portfolioData } from "../../../data/portfolioData";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.bracket}>[</span>Ankan Saha<span className={styles.bracket}>]</span>
          </span>
          <p className={styles.tagline}>Full Stack Developer &amp; Backend Specialist</p>
        </div>

        <div className={styles.center}>
          <span className={styles.copy}>
            &copy; {year} Ankan Saha. Built with Next.js &amp; ❤️
          </span>
        </div>

        <div className={styles.social}>
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FiTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
