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
          subtitle="Checkout my cool projects"
        />
        <ProjectsContainer left={nimaAnima} right={atlasChania} />
        <Header
          title="Personal projects"
          subtitle="personal stuff I do to learn"
        />
        <ProjectsContainer left={workWizards} right={trainingLog} />
      </Container>
    </MotionPageWrapper>
  );
};

export default ProjectsPage;
