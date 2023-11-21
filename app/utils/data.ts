import nima from "../../public/projects/nimaanima.png";
import atlas from "../../public/projects/atlaschania.png";
import next from "../../public/icons/next.png";
import typescript from "../../public/icons/typescript.png";
import query from "../../public/icons/query.png";
import stripe from "../../public/icons/stripe.png";
import redux from "../../public/icons/redux.png";
import tailwind from "../../public/icons/tailwind2.png";
import prisma from "../../public/icons/prisma.png";
import mongo from "../../public/icons/mongo.png";
import quill from "../../public/icons/quill.png";
import nextAuth from "../../public/icons/next-auth.png";
import react from "../../public/icons/react.png";
import material from "../../public/icons/material.png";
import node from "../../public/icons/node.png";
import express from "../../public/icons/express.png";
import recharts from "../../public/icons/recharts.png";
import training from "../../public/projects/training-log.png";
import wizards from "../../public/projects/wizards.png";
import { Project } from "./types";

export const nimaAnima: Project = {
  name: "NimaAnima",
  image: nima,
  description: "E-commerce with custom CMS and payment integration",
  icons: [
    { name: "Typescript", image: typescript },
    { name: "Next.js", image: next },
    { name: "Stripe", image: stripe },
    { name: "Redux-toolkit", image: redux },
    { name: "React query", image: query },
    { name: "Next auth", image: nextAuth },
    { name: "TailwindCSS", image: tailwind },
    { name: "Prisma", image: prisma },
    { name: "MongoDB", image: mongo },
  ],
  demoUrl: "https://nimaanima.vercel.app/",
  codeUrl: "https://github.com/thanosoncode/nimaanima",
};

export const atlasChania: Project = {
  name: "Atlas Chania",
  image: atlas,
  description: "Gym website with blog and newsletter management",
  icons: [
    { name: "Typescript", image: typescript },
    { name: "Next.js", image: next },
    { name: "React query", image: query },
    { name: "Next auth", image: nextAuth },
    { name: "React quill", image: quill },
    { name: "TailwindCSS", image: tailwind },
    { name: "Prisma", image: prisma },
    { name: "MongoDB", image: mongo },
  ],
  demoUrl: "https://www.atlaschania.gr/",
  codeUrl: "https://github.com/thanosoncode/atlas-chania-test",
};

export const trainingLog: Project = {
  name: "Training log",
  image: training,
  description:
    "MERN app with user flows and data visualization to track workouts",
  icons: [
    { name: "Typescript", image: typescript },
    { name: "React.js", image: react },
    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "React query", image: query },
    { name: "Material UI", image: material },
    { name: "Recharts", image: recharts },
    { name: "Prisma", image: prisma },
    { name: "MongoDB", image: mongo },
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};

export const workWizards: Project = {
  name: "Work wizards",
  image: wizards,
  description: "Online marketplace for professionals in hospitality",
  icons: [
    { name: "Typescript", image: typescript },
    { name: "Next.js", image: next },
    { name: "Stripe", image: stripe },
    { name: "Redux-toolkit", image: redux },
    { name: "React query", image: query },
    { name: "Next auth", image: nextAuth },
    { name: "TailwindCSS", image: tailwind },
    { name: "Prisma", image: prisma },
    { name: "MongoDB", image: mongo },
  ],
  demoUrl: "https://traininglog.netlify.app/",
  codeUrl: "https://github.com/thanosoncode/training-log",
};
