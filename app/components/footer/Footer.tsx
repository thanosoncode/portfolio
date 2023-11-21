import github from "../../../public/icons/github.png";
import linkedIn from "../../../public/icons/linkedin.png";
import Link from "next/link";
import LinkIcon from "../LinkIcon";
import Container from "../Container";

const Footer = () => {
  return (
    <Container classes="flex items-center justify-between py-8">
      <div className="flex gap-8">
        <Link href="#projects" className="hover:text-appGreen-400 duration-200">
          experience
        </Link>
        <Link href="#projects" className="hover:text-appGreen-400 duration-200">
          projects
        </Link>
        <Link href="#projects" className="hover:text-appGreen-400 duration-200">
          contact
        </Link>
      </div>
      <div className="flex gap-6">
        <LinkIcon
          href="https://www.linkedin.com/in/thanos-chrysanthopoulos/"
          image={linkedIn}
          alt="linkedIn"
        />
        <LinkIcon
          href="https://github.com/thanosoncode"
          image={github}
          alt="github"
        />
      </div>
    </Container>
  );
};

export default Footer;
