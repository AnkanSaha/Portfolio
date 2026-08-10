import { FiGithub, FiPackage, FiExternalLink } from "react-icons/fi";
import { AppShell, ScrollArea, Badge } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import styles from "./ProjectsApp.module.css";

export default function ProjectsApp() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const secondary = portfolioData.projects.filter((p) => !p.featured);

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.sectionTitle}>{"// Featured"}</div>
        <div className={styles.featuredGrid}>
          {featured.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardName}>{p.name}</span>
                <span className={styles.cardPeriod}>{p.period}</span>
              </div>
              <div className={styles.cardTagline}>{p.tagline}</div>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.badgeRow}>
                {p.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className={styles.links}>
                <a className={styles.link} href={p.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </a>
                {p.npm && (
                  <a className={styles.link} href={p.npm} target="_blank" rel="noopener noreferrer">
                    <FiPackage /> NPM
                  </a>
                )}
                {p.live && (
                  <a className={styles.link} href={p.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sectionTitle}>{"// More Projects"}</div>
        <div className={styles.secondaryList}>
          {secondary.map((p) => (
            <a
              key={p.name}
              className={styles.secondaryRow}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              <span className={styles.secondaryName}>{p.name}</span>
              <span className={styles.secondaryTagline}>{p.tagline}</span>
            </a>
          ))}
        </div>
      </ScrollArea>
    </AppShell>
  );
}
