import Box from "../../components/Box";
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
      <Box>
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
      </Box>
    </MotionPageWrapper>
  );
};

export default ProjectsPage;
