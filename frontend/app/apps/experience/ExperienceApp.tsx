import { AppShell, ScrollArea, Badge } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import styles from "./ExperienceApp.module.css";

export default function ExperienceApp() {
  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.timeline}>
          {portfolioData.experience.map((exp) => (
            <div key={exp.company} className={styles.entry}>
              <span className={styles.dot} />
              <div className={styles.roleTitle}>{exp.title}</div>
              <div className={styles.company}>
                {exp.company}
                {exp.companyDesc && <span className={styles.companyDesc}> — {exp.companyDesc}</span>}
              </div>
              <div className={styles.meta}>
                {exp.period} · {exp.location}
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className={styles.badgeRow}>
                {exp.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </AppShell>
  );
}
