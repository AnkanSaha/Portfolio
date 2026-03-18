import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import TechBadge from "../../shared/TechBadge/TechBadge";
import GlowButton from "../../shared/GlowButton/GlowButton";
import { portfolioData } from "../../../data/portfolioData";
import styles from "./FeaturedProjects.module.css";
import { FiGithub, FiPackage, FiArrowRight } from "react-icons/fi";

const FEATURED = ["NexoralDNS", "AxioDB", "ContainDB"];

export default function FeaturedProjects() {
  const projects = portfolioData.projects.filter((p) => FEATURED.includes(p.name));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          label="// work"
          title="Featured Projects"
          subtitle="Production-grade open source tools built for performance and scale."
        />

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={p.name} className={styles.card} style={{ animationDelay: `${i * 100}ms` }}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectName}>{p.name}</h3>
                <p className={styles.tagline}>{p.tagline}</p>
              </div>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.badges}>
                {p.technologies.slice(0, 4).map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <div className={styles.cardFooter}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <FiGithub /> GitHub
                </a>
                {p.npm && (
                  <a href={p.npm} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FiPackage /> npm
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <GlowButton href="/projects" variant="primary">
            All Projects <FiArrowRight />
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
