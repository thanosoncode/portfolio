import Link from "next/link";

interface LinkOutlinedProps {
  href: string;
  text: string;
}

const LinkOutlined = ({ href, text }: LinkOutlinedProps) => {
  return (
    <Link
      href={href}
      className="block w-48 whitespace-nowrap rounded-md border border-white py-2 text-center text-lg text-white duration-200 hover:border-appGreen-400 hover:text-appGreen-400"
    >
      {text}
    </Link>
  );
};

export default LinkOutlined;
