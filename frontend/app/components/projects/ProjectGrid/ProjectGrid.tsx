"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../../../data/portfolioData";
import styles from "./ProjectGrid.module.css";

const ALL_TAGS = ["All", "TypeScript", "Golang", "Node.js", "Docker", "npm"];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = portfolioData.projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "npm") return !!p.npm;
    return p.technologies.some((t) => t.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.filters}>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${filter === tag ? styles.activeFilter : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
