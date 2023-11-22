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
        className="relative h-6 w-6 flex-shrink-0 opacity-70 duration-200 hover:opacity-60 sm:h-8 sm:w-8"
      />
    </Link>
  );
};

export default LinkIcon;
