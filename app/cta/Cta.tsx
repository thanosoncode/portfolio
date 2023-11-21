import LinkContained from "../components/LinkContained";
import Box from "../components/Box";

const Cta = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 px-[3vw]"
    >
      <div className="flex flex-col items-center gap-8 py-24" id="contact">
        <h1 className="text-center text-4xl sm:text-6xl">
          You made it this far
        </h1>
        <LinkContained href="/contact" text="Send an email" />
      </div>
    </Box>
  );
};

export default Cta;
