import Box from "../components/Box";
import Project from "./Project";
import { Project as TProject } from "../utils/types";

interface ProjectsContainerProps {
  left: TProject;
  right: TProject;
}

const ProjectsContainer = ({ left, right }: ProjectsContainerProps) => {
  return (
    <Box classes="mb-24">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <Project project={left} />
        <Project project={right} />
      </div>
    </Box>
  );
};

export default ProjectsContainer;
