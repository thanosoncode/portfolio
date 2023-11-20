import Box from "../components/box";
import github from "../../public/icons/github.png";
import linkedIn from "../../public/icons/linkedin.png";
import Link from "next/link";
import LinkIcon from "../components/LinkIcon";

const Footer = () => {
  return (
    <>
      <Box
        outerClasses="border-b border-neutral-600"
        innerClasses="flex items-center justify-between py-8 px-[3vw]"
      >
        <div className="flex gap-8">
          <Link
            href="#projects"
            className="duration-200 hover:text-appGreen-400"
          >
            experience
          </Link>
          <Link
            href="#projects"
            className="duration-200 hover:text-appGreen-400"
          >
            projects
          </Link>
          <Link
            href="#projects"
            className="duration-200 hover:text-appGreen-400"
          >
            contact
          </Link>
        </div>
        <div className="flex gap-6">
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
      </Box>
      <Box innerClasses="py-8 px-[3vw]">2023</Box>
    </>
  );
};

export default Footer;
