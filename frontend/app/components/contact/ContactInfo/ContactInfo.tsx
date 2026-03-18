import { portfolioData } from "../../../data/portfolioData";
import styles from "./ContactInfo.module.css";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Contact Details</h2>

      <div className={styles.items}>
        <div className={styles.item}>
          <span className={styles.icon}><FiMail /></span>
          <div>
            <p className={styles.itemLabel}>Email</p>
            <a href={`mailto:${portfolioData.alternateEmail}`} className={styles.itemValue}>
              {portfolioData.alternateEmail}
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}><FiMapPin /></span>
          <div>
            <p className={styles.itemLabel}>Location</p>
            <p className={styles.itemValue}>{portfolioData.location}</p>
          </div>
        </div>
      </div>

      <div className={styles.social}>
        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FiGithub /> GitHub
        </a>
        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FiLinkedin /> LinkedIn
        </a>
        <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FiTwitter /> Twitter
        </a>
      </div>

      <div className={styles.availability}>
        <span className={styles.dot} />
        <span>Available for new opportunities</span>
      </div>
    </div>
  );
}
