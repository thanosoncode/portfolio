import Link from "next/link";

interface LinkContainedProps {
  href: string;
  text: string;
}

const LinkContained = ({ href, text }: LinkContainedProps) => {
  return (
    <Link
      href={href}
      className="block w-48 whitespace-nowrap rounded-md bg-white py-2 text-center text-lg text-black duration-200  hover:bg-appGreen-400"
    >
      {text}
    </Link>
  );
};

export default LinkContained;
