import Container from "@/app/components/Container";
import Header from "../../components/Header";
import { MotionPageWrapper } from "../../components/MotionPageWrapper";
import {
  nimaAnima,
  atlasChania,
  workWizards,
  trainingLog,
} from "../../utils/data";
import ProjectsContainer from "./ProjectWrapper";

const ProjectsPage = () => {
  return (
    <MotionPageWrapper>
      <Container>
        <Header
          title="Freelance projects"
          subtitle="Independent projects I'm creating and delivering outside work to improve and challenge myself"
        />
        <ProjectsContainer left={nimaAnima} right={atlasChania} />
        <Header
          title="Personal projects"
          subtitle="Side projects I am building to learn and explore my ideas"
        />
        <ProjectsContainer left={workWizards} right={trainingLog} />
      </Container>
    </MotionPageWrapper>
  );
};

export default ProjectsPage;
