import Image from "next/image";
import Box from "./box";
import react from "../public/icons/react-white.webp";
import next from "../public/icons/next-white.png";
import node from "../public/icons/node-white.png";
import ts from "../public/icons/ts-white.png";

const Hero = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 px-[3vw] bg-gradient-to-br from-[#4658e7] to-[#05168a]"
    >
      <div className="py-24">
        <h1 className="mb-2 text-6xl">Chrysanthopoulos Thanos</h1>
        <div className="mb-8 text-5xl text-appGreen-400">Software engineer</div>
        <div className="my-4 leading-relaxed">
          Always curious to learn new stuff
          <br />
          Currently building with React, Typescript, Next.js and Node
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={react}
            alt="react"
            width={20}
            height={20}
            className="h-8 w-9 flex-shrink-0"
          />
          <Image
            src={ts}
            alt="react"
            width={20}
            height={20}
            className="h-9 w-9 flex-shrink-0"
          />
          <Image
            src={next}
            alt="react"
            width={20}
            height={20}
            className="h-8 w-8 flex-shrink-0"
          />
          <Image
            src={node}
            alt="react"
            width={20}
            height={20}
            className="h-9 w-9 flex-shrink-0"
          />
        </div>
        <div className="mt-8 flex gap-8">
          <div className="w-48 whitespace-nowrap rounded-md bg-white py-2 text-center text-appBlue-400">
            Say hi
          </div>
          <div className="w-48 whitespace-nowrap rounded-md border border-white py-2 text-center text-white">
            Download resume
          </div>
          I
        </div>
      </div>
    </Box>
  );
};

export default Hero;
