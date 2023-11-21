import Box from "../components/Box";
import Header from "../components/Header";
import { MotionPageWrapper } from "../components/MotionPageWrapper";

const Experience = () => {
  return (
    <MotionPageWrapper>
      <Box>
        <Header title="Work experience" classes="py-8" />
      </Box>
      <Box classes="flex flex-col gap-16 mb-40">
        <div className="grid grid-cols-1 pb-10 sm:grid-cols-[40%_60%] sm:pb-0">
          <div className="h-full">
            <div className="text-primary-color mb-2 text-xl">
              <h3 className="">Front-end Engineer @ GWI</h3>
              <p className="text-base text-neutral-400">
                Mar 2022 &ndash; Present
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <p className="">
                Building{" "}
                <span className="text-primary-color">
                  new micro-frontend and features
                </span>{" "}
                for the platform using React, Typescript and Single-SPA
              </p>
            </div>
            <div className="flex items-start gap-2">
              <p className="">
                Revamping and expanding the platform&apos;s{" "}
                <span className="text-primary-color">
                  in-house UI library in Storybook
                </span>{" "}
                including documentation, accessibility enhancements, and an
                enhanced developer experience
              </p>
            </div>
            <div className="flex items-start gap-2">
              <p className="">
                Achieving an{" "}
                <span className="text-primary-color">
                  85% codebase test coverage
                </span>{" "}
                across multiple repositories using Jest and React Testing
                Library and Cypress
              </p>
            </div>
            <div className="flex items-start gap-2">
              <p className="">
                Optimizing and extending existing code improving{" "}
                <span className="text-primary-color">
                  performance and readability
                </span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <p className="">
                Effectively collaborating in{" "}
                <span className="text-primary-color">agile methodologies</span>{" "}
                with stakeholders to achieve our goals
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[40%_60%]">
          <div className="h-full ">
            <div className="text-primary-color mb-2 text-xl">
              <h3 className="">Software Engineer @ NimaAnima</h3>
              <p className="text-base text-neutral-400">
                Aug 2023 &ndash; Present
              </p>
            </div>
          </div>
          <div className="">
            <p className="">
              Developing an full stack e-commerce with{" "}
              <span className="text-primary-color">
                custom CMS and payment integration
              </span>{" "}
              using Next.js, Typescript, Stripe, Redux-toolkit,
              React-query,Prisma, TailwindCSS
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[40%_60%]">
          <div className="h-full ">
            <div className="text-primary-color mb-2 text-xl">
              <h3 className="">Software Engineer @ AtlasChania</h3>
              <p className="text-base text-neutral-400">
                Jun 2023 &ndash; Sep 2023
              </p>
            </div>
          </div>
          <div className="">
            <p className="">
              Developed full stack website including{" "}
              <span className="text-primary-color">
                blog and newsletter management
              </span>{" "}
              for admins using Next.js, Typescript, Tailwind CSS, Prisma,
              Next-auth, React-quill, and Resend.
            </p>
          </div>
        </div>
      </Box>
    </MotionPageWrapper>
  );
};

export default Experience;
