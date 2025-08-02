import Introduction from "./components/Home/Introduction";
import TechStack from "./components/Home/TechStack";
import WorkExperience from "./components/Home/WorkExperience";
import Projects from "./components/Home/Projects";
import CurrentlyLearning from "./components/Home/CurrentlyLearning";
import WorkEthic from "./components/Home/WorkEthic";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <WorkExperience />
      <Projects />
      <CurrentlyLearning />
      <WorkEthic />
    </>
  );
}
