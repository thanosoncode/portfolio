import Link from "next/link";

interface LinkContainedProps {
  href: string;
  text: string;
}

const LinkContained = ({ href, text }: LinkContainedProps) => {
  return (
    <Link
      href={href}
      className="block w-44  whitespace-nowrap rounded-md bg-white py-1.5 text-center text-black duration-200 hover:bg-appGreen-400 sm:py-2  sm:text-lg"
    >
      {text}
    </Link>
  );
};

export default LinkContained;
