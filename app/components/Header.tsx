interface HeaderProps {
  title: string;
  subtitle?: string;
  classes?: string;
}

const Header = ({ title, subtitle, classes }: HeaderProps) => {
  return (
    <header className={classes}>
      <h2 className="py-10 text-3xl font-semibold text-primary-color">
        {title}
      </h2>
    </header>
  );
};

export default Header;
