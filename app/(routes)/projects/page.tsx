import Container from "@/app/components/Container";
import Header from "../../components/Header";
import { MotionPageWrapper } from "../../components/MotionPageWrapper";
import { nimaAnima, atlasChania, jobPerfect } from "../../utils/data";
import ProjectsContainer from "./ProjectWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThanosJS | Projects",
  description: "Take a look at my freelance and personal projects.",
};

const ProjectsPage = () => {
  return (
    <MotionPageWrapper>
      <Container>
        <Header
          title="Personal projects"
          subtitle="Side projects I am building to learn and explore my ideas"
        />
        <ProjectsContainer left={jobPerfect} right={null} />
        <Header
          title="Freelance projects"
          subtitle="Independent projects I'm creating and delivering outside work to improve and challenge myself"
        />
        <ProjectsContainer left={nimaAnima} right={atlasChania} />
      </Container>
    </MotionPageWrapper>
  );
};

export default ProjectsPage;
