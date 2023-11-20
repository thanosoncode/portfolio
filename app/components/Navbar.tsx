import Link from "next/link";
import Box from "./box";

const Navbar = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-700"
      innerClasses="flex items-center justify-between py-8 px-[3vw]"
    >
      <div>thanosweb.dev</div>
      <div className="flex gap-8">
        <Link
          href="#experience"
          className="duration-200 hover:text-appGreen-400"
        >
          experience
        </Link>
        <Link href="#projects" className="duration-200 hover:text-appGreen-400">
          projects
        </Link>
        <Link href="#contact" className="duration-200 hover:text-appGreen-400">
          contact
        </Link>
      </div>
    </Box>
  );
};

export default Navbar;
