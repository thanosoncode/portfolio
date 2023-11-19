import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectsHeader from "./projectsHeader";
import ProjectsContainer from "./ProejectsContainer";
import { atlasChania, nimaAnima, trainingLog, workWizards } from "./utils/data";
import Footer from "./Footer";
import Experience from "./Experience";
import Cta from "./Cta";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectsHeader
        title="Work experience"
        subtitle="my work experience"
        id="experience"
      />
      <Experience />
      <ProjectsHeader
        title="Freelance projects"
        subtitle="Checkout my cool projects"
        id="projects"
      />
      <ProjectsContainer left={nimaAnima} right={atlasChania} />
      <ProjectsHeader
        title="Personal projects"
        subtitle="personal stuff I do to learn"
      />
      <ProjectsContainer left={workWizards} right={trainingLog} />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
