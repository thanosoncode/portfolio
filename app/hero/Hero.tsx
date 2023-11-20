import Box from "../components/box";
import github from "../../public/icons/github.png";
import linkedIn from "../../public/icons/linkedin.png";
import LinkIcon from "../components/LinkIcon";
import LinkOutlined from "../components/LinkOutlined";
import LinkContained from "../components/LinkContained";

const Hero = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 px-[3vw]"
    >
      <div className="py-24">
        <h1 className="mb-2 text-4xl sm:text-6xl">Chrysanthopoulos Thanos</h1>
        <div className="mb-8 text-3xl text-appGreen-400 sm:text-5xl">
          Software engineer
        </div>
        <div className="my-8 leading-relaxed">
          Currently building with React, Typescript, Next.js and Node
          <br />
          Always curious to learn new stuff
        </div>
        <div className="flex items-center gap-4">
          <LinkIcon
            href="https://www.linkedin.com/in/thanos-chrysanthopoulos/"
            image={linkedIn}
            alt="linkedIn"
          />
          <LinkIcon
            href="https://github.com/thanosoncode"
            image={github}
            alt="github"
          />
        </div>
        <div className="mt-8 flex gap-4">
          <LinkContained text="Say hi" href="/contact" />
          <LinkOutlined text="Download resume" href="" />
        </div>
      </div>
    </Box>
  );
};

export default Hero;
