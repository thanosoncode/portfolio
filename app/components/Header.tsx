import Box from "./box";

interface HeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

const Header = ({ title, subtitle, id }: HeaderProps) => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 sm:py-16 px-[3vw]"
    >
      <h2 className="mb-2 text-4xl sm:mb-4 sm:text-6xl" id={id}>
        {title}
      </h2>
      <p className="text-lg sm:text-xl">{subtitle}</p>
    </Box>
  );
};

export default Header;
