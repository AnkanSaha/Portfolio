import type { Metadata } from "next";
import ProjectsHero from "../../components/projects/ProjectsHero/ProjectsHero";
import ProjectGrid from "../../components/projects/ProjectGrid/ProjectGrid";
import GitHubStatsBar from "../../components/projects/GitHubStatsBar/GitHubStatsBar";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open source projects and production work by Ankan Saha — DNS servers, NoSQL databases, CLI tools, and npm packages.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <GitHubStatsBar />
      <ProjectGrid />
    </>
  );
}
