import Box from "../../components/Box";
import Link from "next/link";

const Hero = () => {
  return (
    <Box classes="flex items-center justify-center md:justify-start h-[calc(100vh-184px)]">
      <div className="py-16 sm:py-24">
        <h1 className="mb-2 text-4xl font-semibold text-primary-color">
          Chrysanthopoulos Thanos
        </h1>
        <div className="mb-4 text-2xl text-primary-color">
          Software engineer
        </div>
        <div className="my-4 flex flex-col gap-2">
          <div>Currently building with React, Typescript, Next.js and Node</div>
          <div> Always curious to learn new stuff</div>
        </div>
        <div className="mb-4 flex gap-4">
          <Link
            href="/contact"
            className="border-b border-transparent px-1 text-primary-color duration-200 hover:border-primary-color"
          >
            Contact
          </Link>
          <div className="border-b border-transparent px-1 text-primary-color duration-200 hover:border-primary-color">
            Resume
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
