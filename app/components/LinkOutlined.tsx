import Link from "next/link";

interface LinkOutlinedProps {
  href: string;
  text: string;
}

const LinkOutlined = ({ href, text }: LinkOutlinedProps) => {
  return (
    <Link
      href={href}
      className="text-primary-color hover:border-secondary-color hover:text-secondary-color block w-44 whitespace-nowrap rounded-md border border-white py-1.5 text-center duration-200 sm:py-2"
    >
      {text}
    </Link>
  );
};

export default LinkOutlined;
