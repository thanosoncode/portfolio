import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  image: StaticImageData;
  description: string;
  icons: {
    name: string;
    image: StaticImageData;
  }[];
  demoUrl: string;
  codeUrl: string;
};
