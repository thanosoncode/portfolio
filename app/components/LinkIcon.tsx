import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface LinkIconProps {
  href: string;
  image: StaticImageData;
  alt: string;
}

const LinkIcon = ({ href, image, alt }: LinkIconProps) => {
  return (
    <Link
      className="block"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <Image
        src={image}
        alt={alt}
        width={50}
        height={50}
        className="relative h-8 w-8 flex-shrink-0 duration-200 hover:opacity-80 sm:h-10 sm:w-10"
      />
    </Link>
  );
};

export default LinkIcon;
