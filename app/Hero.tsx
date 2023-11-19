import Box from "./box";

const Hero = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 px-[3vw] bg-gradient-to-br from-[#4658e7] to-[#05168a]"
    >
      <div className="py-24">
        <h1 className="text-6xl">Chrysanthopoulos Thanos</h1>
        <div className="text-5xl text-appGreen-400">Software engineer</div>
        <div className="mt-4 leading-relaxed">
          Always curious to learn new stuff
          <br />
          Currently building with React, Typescript, Next.js and Node
        </div>
        <div className="mt-8 flex gap-8">
          <div className="w-48 whitespace-nowrap rounded-md bg-white py-2 text-center text-black">
            Say hi
          </div>
          <div className="w-48 whitespace-nowrap rounded-md border border-white py-2 text-center text-white">
            Download resume
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
