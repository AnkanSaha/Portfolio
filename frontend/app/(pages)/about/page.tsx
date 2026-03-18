import type { Metadata } from "next";
import AboutHero from "../../components/about/AboutHero/AboutHero";
import ExperienceTimeline from "../../components/about/ExperienceTimeline/ExperienceTimeline";
import SkillsGrid from "../../components/about/SkillsGrid/SkillsGrid";
import EducationCard from "../../components/about/EducationCard/EducationCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ankan Saha — backend engineer, infrastructure specialist, and open-source contributor with 3+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ExperienceTimeline />
      <SkillsGrid />
      <EducationCard />
    </>
  );
}
