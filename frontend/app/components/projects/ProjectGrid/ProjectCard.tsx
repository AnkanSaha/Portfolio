import TechBadge from "../../shared/TechBadge/TechBadge";
import type { Project } from "../../../data/portfolioData";
import styles from "./ProjectGrid.module.css";
import { FiGithub, FiPackage, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{project.name}</h3>
          {project.npm && (
            <span className={styles.npmBadge}>npm</span>
          )}
        </div>
        <p className={styles.tagline}>{project.tagline}</p>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.badges}>
        {project.technologies.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FiGithub /> Source
        </a>
        {project.npm && (
          <a href={project.npm} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FiPackage /> npm
          </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkRight}`}>
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
}
