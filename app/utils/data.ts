import nima from "../../public/projects/nimaanima.jpg";
import atlas from "../../public/projects/atlaschania.jpg";
import training from "../../public/projects/training-log.jpg";
import wizards from "../../public/projects/wizards.jpg";
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
    "React-query",
    "React-hook-form",
    "Zod",
    "Next-auth",
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
    "React-query",
    "Next-auth",
    "React-quill",
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
    "JWT",
    "React-query",
    "MaterialUI",
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
    "React-query",
    "React-hook-form",
    "Next-auth",
    "TailwindCSS",
    "Prisma",
    "MongoDB",
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};

export const experiences = [
  {
    title: "Front-end Engineer @ GWI",
    duration: "Mar 2022 - Present",
    bullets: [
      {
        start:
          "Building new microfrontends and features for the platform using",
        highlight: "React, Typescript and Single-spa",
        end: "",
      },
      {
        start: "Revamping and expanding the platform's",
        highlight: "in-house UI library in Storybook",
        end: "including documentation, accessibility enhancements, and an enhanced developer experience",
      },
      {
        start: "Achieving an",
        highlight: "85% codebase test coverage",
        end: "across multiple repositories using Jest and React-testing-library and Cypress",
      },
      {
        start: "Optimizing and extending existing code improving",
        highlight: "performance and readability",
        end: "",
      },
      {
        start: "Effectively collaborating in",
        highlight: "agile methodologies",
        end: "with stakeholders to achieve our goals",
      },
    ],
  },
  {
    title: "Software Engineer @ NimaAnima",
    duration: "Aug 2023 - Present",
    bullets: [
      {
        start: "Developing an full stack e-commerce with",
        highlight: "custom CMS and payment integration",
        end: "using Next.js, Typescript, Stripe, Redux-toolkit, React-query, Prisma, TailwindCSS",
      },
    ],
  },
  {
    title: "Software Engineer @ Atlas Chania",
    duration: "May 2023 - Aug 2023",
    bullets: [
      {
        start: "Developed full stack gym website including",
        highlight: "blog and newsletter management",
        end: "for admins using Next.js, Typescript, Tailwind CSS, Prisma, Next-auth, React-quill, and Resend.",
      },
    ],
  },
];
