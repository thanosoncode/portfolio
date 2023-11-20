import Hero from "./hero/Hero";
import Header from "./components/Header";
import ProjectsContainer from "./projects/ProjectsContainer";
import { atlasChania, nimaAnima, trainingLog, workWizards } from "./utils/data";
import Experience from "./experience/Experience";
import Cta from "./cta/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <Header
        title="Work experience"
        subtitle="my work experience"
        id="experience"
      />
      <Experience />
      <Header
        title="Freelance projects"
        subtitle="Checkout my cool projects"
        id="projects"
      />
      <ProjectsContainer left={nimaAnima} right={atlasChania} />
      <Header
        title="Personal projects"
        subtitle="personal stuff I do to learn"
      />
      <ProjectsContainer left={workWizards} right={trainingLog} />
      <Cta />
    </>
  );
};

export default Home;
