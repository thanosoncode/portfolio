import Box from "../components/Box";
import Project from "./Project";
import { Project as TProject } from "../utils/types";

interface ProjectsContainerProps {
  left: TProject;
  right: TProject;
}

const ProjectsContainer = ({ left, right }: ProjectsContainerProps) => {
  return (
    <Box outerClasses="border-b border-neutral-600">
      <div className="flex flex-col sm:flex-row">
        <Project project={left} />
        <div className="h-[1px] w-full bg-neutral-600 sm:h-auto sm:w-[1px]"></div>
        <Project project={right} />
      </div>
    </Box>
  );
};

export default ProjectsContainer;
