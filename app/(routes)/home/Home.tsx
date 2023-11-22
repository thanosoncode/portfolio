import Container from "@/app/components/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <Container
      classes={`flex items-center justify-center md:justify-start h-[calc(100vh-184px)]`}
    >
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="mb-2 text-4xl font-semibold text-primary-color">
            Chrysanthopoulos Thanos
          </h1>
          <h2 className="text-xl text-primary-color">Software engineer</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div>Currently building with React, Typescript, Next.js and Node</div>
          <div> Always curious to learn new stuff</div>
        </div>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="border-b border-transparent px-1 text-primary-color duration-200 hover:border-primary-color"
          >
            Contact
          </Link>
          <Link
            href="resume/resume.pdf"
            target="a_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent px-1 text-primary-color duration-200 hover:border-primary-color"
          >
            Resume
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
