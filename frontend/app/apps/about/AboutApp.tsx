import { AppShell, ScrollArea, Badge } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import { useGitHubData } from "../../hooks/useGitHubData";
import styles from "./AboutApp.module.css";

export default function AboutApp() {
  const initials = portfolioData.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const { data: github } = useGitHubData("AnkanSaha");

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.header}>
          <div className={styles.avatar}>
            {github?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- remote GitHub avatar, no local static path for next/image
              <img src={github.avatarUrl} alt="" className={styles.avatarImg} />
            ) : (
              initials
            )}
          </div>
          <div>
            <div className={styles.name}>{portfolioData.name}</div>
            <div className={styles.title}>{portfolioData.title}</div>
            <div className={styles.subtitle}>{portfolioData.subtitle}</div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Summary"}</div>
          <p className={styles.summary}>{portfolioData.summary}</p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Details"}</div>
          <div className={styles.factGrid}>
            <div>
              <div className={styles.factLabel}>Location</div>
              <div className={styles.factValue}>{portfolioData.location}</div>
            </div>
            <div>
              <div className={styles.factLabel}>Email</div>
              <div className={styles.factValue}>{portfolioData.alternateEmail}</div>
            </div>
            <div>
              <div className={styles.factLabel}>Status</div>
              <div className={styles.factValue}>{portfolioData.currentCompany}</div>
            </div>
            <div>
              <div className={styles.factLabel}>Phone</div>
              <div className={styles.factValue}>{portfolioData.phone}</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Education"}</div>
          <div className={styles.eduCard}>
            <div className={styles.eduDegree}>{portfolioData.education.degree}</div>
            <div className={styles.eduMeta}>
              {portfolioData.education.university} · {portfolioData.education.period} ·{" "}
              {portfolioData.education.location}
            </div>
            <p className={styles.summary}>{portfolioData.education.description}</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Languages"}</div>
          <div className={styles.badgeRow}>
            {portfolioData.languages.map((lang) => (
              <Badge key={lang}>{lang}</Badge>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>{"// Achievements"}</div>
          <div className={styles.badgeRow}>
            {portfolioData.achievements.map((a) => (
              <Badge key={a} tone="accent">
                {a}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollArea>
    </AppShell>
  );
}
