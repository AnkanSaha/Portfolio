import { AppShell, ScrollArea, Badge } from "../../os/ui";
import { portfolioData } from "../../data/portfolioData";
import styles from "./SkillsApp.module.css";

export default function SkillsApp() {
  return (
    <AppShell>
      <ScrollArea>
        {portfolioData.skillCategories.map((cat) => (
          <div key={cat.name} className={styles.category}>
            <div className={styles.categoryTitle}>{`// ${cat.name}`}</div>
            <div className={styles.badgeRow}>
              {cat.skills.map((skill) => (
                <Badge key={skill} tone="accent">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </AppShell>
  );
}
