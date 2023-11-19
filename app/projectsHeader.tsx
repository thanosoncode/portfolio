import Box from "./box";

interface HeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

const ProjectsHeader = ({ title, subtitle, id }: HeaderProps) => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-16 px-[3vw]"
    >
      <h2 className="mb-4 text-6xl" id={id}>
        {title}
      </h2>
      <p className="text-xl">{subtitle}</p>
    </Box>
  );
};

export default ProjectsHeader;
