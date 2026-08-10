import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { AppShell, ScrollArea } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import styles from "./ContactApp.module.css";

export default function ContactApp() {
  const socials = Object.entries(portfolioData.social);

  return (
    <AppShell>
      <ScrollArea>
        <p className={styles.intro}>
          Reach out directly — every link below goes straight to a real inbox or profile, no contact form in between.
        </p>

        <div className={styles.list}>
          <a className={styles.row} href={`mailto:${portfolioData.alternateEmail}`}>
            <span className={styles.icon}>
              <FiMail />
            </span>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{portfolioData.alternateEmail}</span>
          </a>
          <a className={styles.row} href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}>
            <span className={styles.icon}>
              <FiPhone />
            </span>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{portfolioData.phone}</span>
          </a>
          <div className={styles.row}>
            <span className={styles.icon}>
              <FiMapPin />
            </span>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{portfolioData.location}</span>
          </div>
        </div>

        <div className={styles.sectionTitle}>{"// Elsewhere"}</div>
        <div className={styles.socials}>
          {socials.map(([name, url]) => (
            <a key={name} className={styles.social} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </div>
      </ScrollArea>
    </AppShell>
  );
}
