import Box from "../../components/Box";
import Project from "./Project";
import { Project as TProject } from "../../utils/types";

interface ProjectsWrapperPropsProps {
  left: TProject;
  right: TProject;
}

const ProjectsWrapperProps = ({ left, right }: ProjectsWrapperPropsProps) => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Project project={left} />
        <Project project={right} />
      </div>
    </div>
  );
};

export default ProjectsWrapperProps;
