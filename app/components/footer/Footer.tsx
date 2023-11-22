import github from "../../../public/icons/github.png";
import linkedIn from "../../../public/icons/linkedin.png";
import Link from "next/link";
import LinkIcon from "../LinkIcon";
import Container from "../Container";
import { LINKS } from "@/app/utils/constants";

const Footer = () => {
  return (
    <Container classes="flex items-center justify-between py-8">
      <div className="flex gap-8">
        {LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm duration-200 hover:text-primary-color sm:text-base"
          >
            {link.name}
          </Link>
        ))}
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
