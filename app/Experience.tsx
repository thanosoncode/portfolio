import Image from "next/image";
import Box from "./box";
import bullet from "../public/icons/bulletstar.png";

const Experience = () => {
  return (
    <>
      <Box
        innerClasses="flex items-start"
        outerClasses="border-b border-neutral-600"
      >
        <div className="h-full w-2/5 px-[3vw]">
          <div className="py-12">
            <h3 className="text-4xl">
              <div>
                Front-end Engineer{" "}
                <span className="mb-2 text-appGreen-400">GWI</span>
              </div>
              <div className="text-2xl text-neutral-300">
                Mar 2022 &ndash; Present
              </div>
            </h3>
          </div>
        </div>
        <div className="w-3/5 border-l border-neutral-600 px-[3vw] ">
          <div className="flex flex-col gap-6 py-12">
            <div className="flex items-start gap-2">
              {/* <Image
                src={bullet}
                alt="bullet"
                width={12}
                height={12}
                className="h-6 w-6"
              /> */}
              <p className="">
                Building{" "}
                <span className="text-appGreen-400">
                  new micro-frontend and features
                </span>{" "}
                for the platform using React, Typescript and Single-SPA
              </p>
            </div>
            <div className="flex items-start gap-2">
              {/* <Image
                src={bullet}
                alt="bullet"
                width={12}
                height={12}
                className="h-6 w-6"
              /> */}
              <p className="">
                Revamping and expanding the platform's{" "}
                <span className="text-appGreen-400">
                  in-house UI library in Storybook
                </span>{" "}
                including documentation, accessibility enhancements, and an
                enhanced developer experience
              </p>
            </div>
            <div className="flex items-start gap-2">
              {/* <Image
                src={bullet}
                alt="bullet"
                width={12}
                height={12}
                className="h-6 w-6"
              /> */}
              <p className="">
                Achieving an{" "}
                <span className="text-appGreen-400">
                  85% codebase test coverage
                </span>{" "}
                across multiple repositories using Jest and React Testing
                Library and Cypress
              </p>
            </div>
            <div className="flex items-start gap-2">
              {/* <Image
                src={bullet}
                alt="bullet"
                width={12}
                height={12}
                className="h-6 w-6"
              /> */}
              <p className="">
                Optimizing and extending existing code improving{" "}
                <span className="text-appGreen-400">
                  performance and readability
                </span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              {/* <Image
                src={bullet}
                alt="bullet"
                width={12}
                height={12}
                className="h-6 w-6"
              /> */}
              <p className="">
                Effectively collaborating in{" "}
                <span className="text-appGreen-400">agile methodologies</span>{" "}
                with stakeholders to achieve our goals
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Box
        innerClasses="flex items-start"
        outerClasses="border-b border-neutral-600"
      >
        <div className="h-full w-2/5 border-r border-neutral-600 px-[3vw]">
          <div className="py-12">
            <h3 className="text-4xl">
              <div>
                Software Engineer{" "}
                <span className="text-appGreen-400">NimaAnima</span>
              </div>
              <div className="text-2xl text-neutral-300">
                Sep 2023 &ndash; Present
              </div>
            </h3>
          </div>
        </div>
        <div className="w-3/5 px-[3vw]">
          <p className="py-12">
            Developing an full stack e-commerce with{" "}
            <span className="text-appGreen-400">
              custom CMS and payment integration
            </span>{" "}
            using Next.js, Typescript, Stripe, Redux-toolkit,
            React-query,Prisma, TailwindCSS
          </p>
        </div>
      </Box>
      <Box
        innerClasses="flex items-start"
        outerClasses="border-b border-neutral-600"
      >
        <div className="h-full w-2/5 border-r border-neutral-600 px-[3vw]">
          <div className="py-12">
            <h3 className="text-4xl">
              <div>
                Software Engineer{" "}
                <span className="text-appGreen-400">Atlas Chania</span>
              </div>
              <div className="text-2xl text-neutral-300">
                Jun 2023 &ndash; Aug 2023
              </div>
            </h3>
          </div>
        </div>
        <div className="w-3/5 px-[3vw]">
          <p className="py-12">
            Developed full stack website including{" "}
            <span className="text-appGreen-400">
              blog and newsletter management
            </span>{" "}
            for admins using Next.js, Typescript, Tailwind CSS, Prisma,
            Next-auth, React-quill, and Resend.
          </p>
        </div>
      </Box>
    </>
  );
};

export default Experience;
