import nima from "../../public/projects/nimaanima.png";
import atlas from "../../public/projects/atlaschania.png";
import training from "../../public/projects/training-log.png";
import wizards from "../../public/projects/wizards.png";
import { Project } from "./types";

export const nimaAnima: Project = {
  name: "NimaAnima",
  image: nima,
  description: "E-commerce with custom CMS and payment integration",
  stack: [
    "Typescript",
    "Next.js",
    "Stripe",
    "Redux-toolkit",
    "React query",
    "Next auth",
    "TailwindCSS",
    "Prisma",
    "MongoDB",
  ],
  demoUrl: "https://nimaanima.vercel.app/",
  codeUrl: "https://github.com/thanosoncode/nimaanima",
};

export const atlasChania: Project = {
  name: "Atlas Chania",
  image: atlas,
  description: "Gym website with blog and newsletter management",
  stack: [
    "Typescript",
    "Next.js",
    "React query",
    "Next auth",
    "React quill",
    "TailwindCSS",
    "Prisma",
    "MongoDB",
  ],
  demoUrl: "https://www.atlaschania.gr/",
  codeUrl: "https://github.com/thanosoncode/atlas-chania-test",
};

export const trainingLog: Project = {
  name: "Training log",
  image: training,
  description:
    "MERN app with user flows and data visualization to track workouts",
  stack: [
    "Typescript",
    "React.js",
    "Node.js",
    "Express.js",
    "React query",
    "Material UI",
    "Recharts",
    "Prisma",
    "MongoDB",
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};

export const workWizards: Project = {
  name: "Work wizards",
  image: wizards,
  description: "Online marketplace for professionals in hospitality",
  stack: [
    "Typescript",
    "Next.js",
    "Stripe",
    "Redux-toolkit",
    "React query",
    "Next auth",
    "TailwindCSS",
    "Prisma",
    "MongoDB",
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};
