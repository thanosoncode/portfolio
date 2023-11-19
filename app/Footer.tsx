import Box from "./box";
import Image from "next/image";
import github from "../public/icons/github.png";
import linkedIn from "../public/icons/linkedin.png";

const Footer = () => {
  return (
    <>
      <Box
        outerClasses="border-b border-neutral-600"
        innerClasses="flex items-center justify-between py-8 px-[3vw]"
      >
        <div className="flex gap-8">
          <div>experience</div>
          <div>projects</div>
          <div>contact</div>
        </div>
        <div className="flex gap-6">
          <Image
            src={linkedIn}
            alt="linkedIn"
            width={50}
            height={50}
            className="relative h-10 w-10 flex-shrink-0"
          />
          <Image
            src={github}
            alt="github"
            width={50}
            height={50}
            className="relative h-10 w-10 flex-shrink-0"
          />
        </div>
      </Box>
      <Box innerClasses="py-8 px-[3vw]">2023</Box>
    </>
  );
};

export default Footer;
