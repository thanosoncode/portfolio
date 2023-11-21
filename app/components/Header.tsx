import Box from "./Box";

interface HeaderProps {
  title: string;
  subtitle?: string;
  classes?: string;
}

const Header = ({ title, subtitle, classes }: HeaderProps) => {
  return (
    <header className={classes}>
      <h2 className="text-primary-color mb-2 text-3xl sm:mb-10 sm:text-2xl ">
        {title}
      </h2>
    </header>
  );
};

export default Header;
