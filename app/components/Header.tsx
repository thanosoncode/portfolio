import Box from "./Box";

interface HeaderProps {
  title: string;
  subtitle?: string;
  classes?: string;
}

const Header = ({ title, subtitle, classes }: HeaderProps) => {
  return (
    <header className={classes}>
      <h2 className="my-10 text-2xl text-primary-color">{title}</h2>
    </header>
  );
};

export default Header;
