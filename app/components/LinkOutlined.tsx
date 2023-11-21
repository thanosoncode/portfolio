import Link from "next/link";

interface LinkOutlinedProps {
  href: string;
  text: string;
}

const LinkOutlined = ({ href, text }: LinkOutlinedProps) => {
  return (
    <Link
      href={href}
      className="block w-44 whitespace-nowrap rounded-md border border-white py-1.5 text-center text-white duration-200 hover:border-appGreen-400 hover:text-appGreen-400 sm:py-2 sm:text-lg"
    >
      {text}
    </Link>
  );
};

export default LinkOutlined;
