import Box from "../components/Box";

const Experience = () => {
  return (
    <>
      <Box outerClasses="border-b border-neutral-600">
        <div className="grid grid-cols-1 sm:grid-cols-[40%_60%]">
          <div className="h-full px-[3vw]">
            <div className="py-10">
              <h3 className="text-xl">
                <div>
                  Front-end Engineer{" "}
                  <span className="mb-2 text-appGreen-400">GWI</span>
                </div>
                <div className="text-base text-neutral-400">
                  Mar 2022 &ndash; Present
                </div>
              </h3>
            </div>
          </div>
          <div className="border-t border-neutral-600 px-[3vw] sm:border-l">
            <div className="flex flex-col gap-6 py-10">
              <div className="flex items-start gap-2">
                <p className="">
                  Building{" "}
                  <span className="text-appGreen-400">
                    new micro-frontend and features
                  </span>{" "}
                  for the platform using React, Typescript and Single-SPA
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="">
                  Revamping and expanding the platform&apos;s{" "}
                  <span className="text-appGreen-400">
                    in-house UI library in Storybook
                  </span>{" "}
                  including documentation, accessibility enhancements, and an
                  enhanced developer experience
                </p>
              </div>
              <div className="flex items-start gap-2">
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
                <p className="">
                  Optimizing and extending existing code improving{" "}
                  <span className="text-appGreen-400">
                    performance and readability
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="">
                  Effectively collaborating in{" "}
                  <span className="text-appGreen-400">agile methodologies</span>{" "}
                  with stakeholders to achieve our goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        innerClasses="grid grid-cols-1 sm:grid-cols-[40%_60%]"
        outerClasses="border-b border-neutral-600"
      >
        <div className="h-full px-[3vw]">
          <div className="py-10">
            <h3 className="text-xl">
              <div>
                Software engineer{" "}
                <span className="text-appGreen-400">NimaAnima</span>
              </div>
              <div className="text-base text-neutral-400">
                Sep 2023 &ndash; Present
              </div>
            </h3>
          </div>
        </div>
        <div className="border-t border-neutral-600 px-[3vw] sm:border-l">
          <p className="py-10">
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
        innerClasses="grid grid-cols-1 sm:grid-cols-[40%_60%]"
        outerClasses="border-b border-neutral-600"
      >
        <div className="h-full px-[3vw]">
          <div className="py-10">
            <h3 className="text-xl">
              <div>
                Software engineer{" "}
                <span className="text-appGreen-400">Atlas Chania</span>
              </div>
              <div className="text-base text-neutral-400">
                Jun 2023 &ndash; Aug 2023
              </div>
            </h3>
          </div>
        </div>
        <div className="border-t border-neutral-600 px-[3vw] sm:border-l">
          <p className="py-10">
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
