import Box from "./box";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const ProjectsHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-16 px-[3vw]"
    >
      <h2 className="mb-4 text-6xl">{title}</h2>
      <p className="text-xl">{subtitle}</p>
    </Box>
  );
};

export default ProjectsHeader;
