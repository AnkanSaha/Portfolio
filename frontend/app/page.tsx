import Introduction from "./components/Home/Introduction";
import TechStack from "./components/Home/TechStack";
import WorkExperience from "./components/Home/WorkExperience";
import Projects from "./components/Home/Projects";
import Education from "./components/Home/Education";
import Languages from "./components/Home/Languages";
import WorkEthic from "./components/Home/WorkEthic";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Education />
      <Languages />
      <WorkEthic />
    </>
  );
}
