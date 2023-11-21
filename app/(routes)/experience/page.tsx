import Container from "@/app/components/Container";
import Header from "../../components/Header";
import { MotionPageWrapper } from "../../components/MotionPageWrapper";

const experiences = [
  {
    title: "Front-end Engineer @ GWI",
    duration: "Mar 2022 - Present",
    bullets: [
      {
        start: "Building",
        highlight: "new microfrontend and features",
        end: "for the platform using React, Typescript and single-spa",
      },
      {
        start: "Revamping and expanding the platform's",
        highlight: "in-house UI library in Storybook",
        end: "including documentation, accessibility enhancements, and an enhanced developer experience",
      },
      {
        start: "Achieving an",
        highlight: "85% codebase test coverage",
        end: "across multiple repositories using Jest and React Testing Library and Cypress",
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
        end: "using Next.js, Typescript, Stripe, Redux-toolkit, React-query,Prisma, TailwindCSS",
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

const Experience = () => {
  return (
    <MotionPageWrapper>
      <Container classes="pb-20">
        <Header title="Work experience" />
        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-12 sm:grid-cols-[40%_60%]"
            >
              <div>
                <h2 className="text-primary-color">{exp.title}</h2>
                <p>{exp.duration}</p>
              </div>
              <div className="flex flex-col gap-6">
                {exp.bullets.map((bullet, index) => (
                  <div key={index}>
                    <span>{bullet.start} </span>
                    <span className="text-primary-color">
                      {bullet.highlight}{" "}
                    </span>
                    <span>{bullet.end}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </MotionPageWrapper>
  );
};

export default Experience;
