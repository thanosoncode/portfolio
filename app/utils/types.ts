import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  image: StaticImageData;
  description: string;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
};

export type LinkItem = {
  name: string;
  href: string;
};
