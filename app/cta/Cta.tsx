import LinkContained from "../components/LinkContained";
import Box from "../components/Box";

const Cta = () => {
  return (
    <Box classes="py-8">
      <div className="flex flex-col items-center gap-8 py-24" id="contact">
        <h1 className="text-primary-color text-center text-4xl sm:text-6xl">
          You made it this far
        </h1>
        <LinkContained href="/contact" text="Send an email" />
      </div>
    </Box>
  );
};

export default Cta;
