import Container from "@/app/components/Container";
import Header from "../../components/Header";
import { MotionPageWrapper } from "../../components/MotionPageWrapper";
import { experiences } from "@/app/utils/data";

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
                <h2 className="font-semibold text-primary-color">
                  {exp.title}
                </h2>
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
