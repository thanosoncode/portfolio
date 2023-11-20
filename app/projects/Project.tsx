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
    <div className="p-[3vw]">
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-8 pt-4">
        <div className="text-3xl">{name}</div>
        <div className="flex flex-wrap gap-4">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon.image}
              alt={icon.name}
              width={50}
              height={50}
              className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
            />
          ))}
        </div>
        <div>{description}</div>
        <div className="flex gap-8">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover: flex items-center whitespace-nowrap rounded-md border border-appGreen-400 px-4 py-1 text-appGreen-400 hover:bg-appGreen-400 hover:text-black"
          >
            View Demo
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={codeUrl}
            className="flex items-center whitespace-nowrap rounded-md border border-white px-4 py-1 duration-200 hover:border-black hover:bg-white hover:text-black"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
