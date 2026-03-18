"use client";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import SkillBar from "./SkillBar";
import { portfolioData } from "../../../data/portfolioData";
import styles from "./SkillsGrid.module.css";

const COLORS: Array<"green" | "cyan" | "blue"> = ["green", "cyan", "blue", "green", "cyan"];

const PCT_MAP: Record<string, number> = {
  "JavaScript": 95, "TypeScript": 93, "Node.js": 95, "Express.js": 92,
  "Fastify": 88, "NestJS": 82, "Golang": 80,
  "React.js": 85, "Next.js": 83, "Redux Toolkit": 82, "Zustand": 78,
  "TailwindCSS": 80, "GraphQL": 78,
  "MongoDB": 92, "SQL": 78, "Redis": 90, "Redis Streams": 85,
  "RabbitMQ": 80, "Docker": 92, "AWS Lambda": 78,
  "Cloudflare Workers": 88, "Nginx": 85, "Git": 94, "CI/CD": 87, "Linux": 86,
  "Gemini API": 82, "OpenAI API": 80, "Google AI File API": 78,
  "Microservices": 87, "Modular Monolith": 82, "Event-driven Architecture": 83,
  "RESTful APIs": 94, "WebSockets": 86,
};

function parsePct(str: string): { label: string; pct: number } {
  return { label: str, pct: PCT_MAP[str] ?? 80 };
}

export default function SkillsGrid() {
  const entries = portfolioData.skillCategories.map((c) => [c.name, c.skills] as [string, string[]]);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader label="// skills" title="Technical Skills" />
        <div className={styles.grid}>
          {entries.map(([cat, skills], ci) => (
            <div key={cat} className={styles.catCard}>
              <h3 className={styles.catTitle}>{cat}</h3>
              {skills.map((s, si) => {
                const { label, pct } = parsePct(s);
                return (
                  <SkillBar
                    key={s}
                    label={label}
                    pct={pct}
                    color={COLORS[ci % COLORS.length]}
                    delay={si * 0.06}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
