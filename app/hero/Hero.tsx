import Box from "../components/Box";
import github from "../../public/icons/github.png";
import linkedIn from "../../public/icons/linkedin.png";
import LinkIcon from "../components/LinkIcon";

const Hero = () => {
  return (
    <Box classes="py-8">
      <div className="py-16 sm:py-24">
        <h1 className="text-primary-color mb-2 text-3xl sm:text-4xl">
          Chrysanthopoulos Thanos
        </h1>
        <div className="text-primary-color mb-4 text-lg sm:text-2xl">
          Software engineer
        </div>
        <div className="my-4 flex flex-col gap-2">
          <div>Currently building with React, Typescript, Next.js and Node</div>
          <div> Always curious to learn new stuff</div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="text-primary-color">Contact</div>
          <div className="text-primary-color">Resume</div>
        </div>
        {/* <div className="flex gap-4">
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
      </div> */}
      </div>
    </Box>
  );
};

export default Hero;
