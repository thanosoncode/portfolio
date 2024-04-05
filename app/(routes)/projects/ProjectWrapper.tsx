import Project from "./Project";
import { Project as TProject } from "../../utils/types";

interface ProjectsWrapperPropsProps {
  left: TProject | null;
  right: TProject | null;
}

const ProjectsWrapperProps = ({ left, right }: ProjectsWrapperPropsProps) => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 gap-y-24 md:grid-cols-2 md:gap-12">
        <Project project={left} />
        <Project project={right} />
      </div>
    </div>
  );
};

export default ProjectsWrapperProps;
