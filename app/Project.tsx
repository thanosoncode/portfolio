import Image from "next/image";
import { Project } from "./utils/types";
import Link from "next/link";

interface ProjectProps {
  project: Project;
}

const Project = ({
  project: { name, description, demoUrl, codeUrl, image, icons },
}: ProjectProps) => {
  return (
    <div className="p-12">
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-8 pt-4">
        <div className="text-4xl">{name}</div>
        <div className="flex flex-wrap gap-4">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon.image}
              alt={icon.name}
              width={50}
              height={50}
              className="h-10 w-10"
            />
          ))}
        </div>
        <div>{description}</div>
        <div className="flex gap-8">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md border border-appGreen-400 px-4 py-1 text-appGreen-400"
          >
            View Demo
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={codeUrl}
            className="flex items-center rounded-md border border-white px-4 py-1 "
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
