import Image from "next/image";
import { Project } from "../../utils/types";
import Link from "next/link";

interface ProjectProps {
  project: Project;
}

const Project = ({
  project: { name, description, demoUrl, codeUrl, image, stack },
}: ProjectProps) => {
  return (
    <div className="">
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <div className="text-2xl text-primary-color">{name}</div>
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
            className="hover: flex items-center whitespace-nowrap rounded-md border border-primary-color px-4 py-1 text-primary-color hover:bg-primary-color hover:text-black"
          >
            View Demo
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover: flex items-center whitespace-nowrap rounded-md border border-primary-color px-4 py-1 text-primary-color hover:bg-primary-color hover:text-black"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
