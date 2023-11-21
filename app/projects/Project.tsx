import Image from "next/image";
import { Project } from "../utils/types";
import Link from "next/link";

interface ProjectProps {
  project: Project;
}

const Project = ({
  project: { name, description, demoUrl, codeUrl, image, icons },
}: ProjectProps) => {
  return (
    <div className="">
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <div className="text-primary-color text-2xl">{name}</div>
        <div className="text-primary-color">{description}</div>
        <div className="flex flex-wrap gap-4 py-5">
          {icons.map((icon, index) => (
            <div key={index}>{icon.name}</div>
            // <Image
            //   key={index}
            //   src={icon.image}
            //   alt={icon.name}
            //   width={50}
            //   height={50}
            //   className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            // />
          ))}
        </div>
        <div className="flex gap-8">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover: border-primary-color text-primary-color hover:bg-primary-color flex items-center whitespace-nowrap rounded-md border px-4 py-1 hover:text-black"
          >
            View Demo
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover: border-primary-color text-primary-color hover:bg-primary-color flex items-center whitespace-nowrap rounded-md border px-4 py-1 hover:text-black"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
