import Link from "next/link";

interface LinkContainedProps {
  href: string;
  text: string;
}

const LinkContained = ({ href, text }: LinkContainedProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-background-color bg-primary-color hover:text-primary-color hover:border-primary-color  text-background-color block w-44 whitespace-nowrap rounded-md border py-1.5 text-center duration-200 sm:py-2"
    >
      {text}
    </Link>
  );
};

export default LinkContained;
