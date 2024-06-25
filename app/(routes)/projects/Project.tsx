import Image from "next/image";
import { TProject } from "../../utils/types";
import Link from "next/link";

interface ProjectProps {
  project: TProject | null;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (!project) return null;

  const { name, image, inProgress, description, stack, demoUrl, codeUrl } =
    project;

  return (
    <div className="">
      <div>
        <Image
          src={image}
          alt={name}
          placeholder="blur"
          sizes="(min-width: 1000px) 430px, (min-width: 780px) calc(40vw + 38px), calc(100vw - 32px)"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <div className="flex items-center gap-4 text-2xl font-medium text-primary-color">
          {name}
          {inProgress ? (
            <span className="text-sm text-secondary-color">In progress</span>
          ) : (
            ""
          )}
        </div>
        <div className="text-primary-color">{description}</div>
        <div className="flex flex-wrap gap-x-2 gap-y-1 py-4 sm:gap-x-4 sm:gap-y-2  sm:py-5">
          {stack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="flex gap-8">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover: flex items-center whitespace-nowrap rounded-md border border-primary-color px-4 py-1 text-primary-color hover:bg-primary-color hover:text-background-color"
          >
            View Demo
          </Link>
          {codeUrl ? (
            <Link
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover: flex items-center whitespace-nowrap rounded-md border border-primary-color px-4 py-1 text-primary-color hover:bg-primary-color hover:text-background-color"
            >
              View Code
            </Link>
          ) : (
            <div className="whitespace-nowrap rounded-md border border-primary-color px-4 py-1 text-primary-color">
              Private
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
