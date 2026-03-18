import type { Metadata } from "next";
import SkillsHero from "../../components/skills/SkillsHero/SkillsHero";
import SkillsAllGrid from "../../components/skills/SkillsAllGrid/SkillsAllGrid";
import AchievementsSection from "../../components/skills/AchievementsSection/AchievementsSection";
import LanguagesSection from "../../components/skills/LanguagesSection/LanguagesSection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full technical skill set of Ankan Saha — languages, frameworks, cloud infrastructure, AI integrations, and system design expertise.",
};

export default function SkillsPage() {
  return (
    <>
      <SkillsHero />
      <SkillsAllGrid />
      <AchievementsSection />
      <LanguagesSection />
    </>
  );
}
