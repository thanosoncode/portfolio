import Box from "./box";

const Navbar = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-700"
      innerClasses="flex items-center justify-between py-8 px-[3vw]"
    >
      <div>thanosweb.dev</div>
      <div className="flex gap-8">
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
    </Box>
  );
};

export default Navbar;
