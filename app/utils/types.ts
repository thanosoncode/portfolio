import { StaticImageData } from "next/image";

export type TProject = {
  name: string;
  image: StaticImageData;
  description: string;
  inProgress: boolean;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
};

export type LinkItem = {
  name: string;
  href: string;
};
