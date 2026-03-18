import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection/HeroSection";
import StatsSection from "./components/home/StatsSection/StatsSection";
import SkillsPreview from "./components/home/SkillsPreview/SkillsPreview";
import FeaturedProjects from "./components/home/FeaturedProjects/FeaturedProjects";
import MatrixRainClient from "./components/shared/MatrixRain/MatrixRainClient";

export const metadata: Metadata = {
  title: "Ankan Saha | Full Stack Developer",
  description:
    "Full Stack Developer & Backend Engineering Specialist. Building scalable infrastructure for 10M+ users. Open to opportunities.",
};

export default function Home() {
  return (
    <>
      <MatrixRainClient />
      <HeroSection />
      <StatsSection />
      <SkillsPreview />
      <FeaturedProjects />
    </>
  );
}
