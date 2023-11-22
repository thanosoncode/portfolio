interface HeaderProps {
  title: string;
  subtitle?: string;
  classes?: string;
}

const Header = ({ title, subtitle, classes }: HeaderProps) => {
  return (
    <header className={`py-10 ${classes}`}>
      <h1 className=" mb-2 text-3xl font-semibold text-primary-color">
        {title}
      </h1>
      <h2 className="text-base text-secondary-color">{subtitle}</h2>
    </header>
  );
};

export default Header;
