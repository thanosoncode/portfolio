import Box from "./box";
import Project from "./Project";
import { Project as TProject } from "./utils/types";

interface ProjectsContainerProps {
  left: TProject;
  right: TProject;
}

const ProjectsContainer = ({ left, right }: ProjectsContainerProps) => {
  return (
    <Box outerClasses="border-b border-neutral-600">
      <div className="flex">
        <Project project={left} />
        <div className="w-[1px] bg-neutral-600"></div>
        <Project project={right} />
      </div>
    </Box>
  );
};

export default ProjectsContainer;
