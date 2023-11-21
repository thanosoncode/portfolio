"use client";
import Link from "next/link";
import Box from "../Box";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./mobileMenu/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { name: "experience", href: "/experience" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current) {
      const x = event.clientX;
      const y = event.clientY;

      const { left, top, right, bottom } =
        menuRef.current.getBoundingClientRect();

      const clickedInside =
        x > left && x < right && y > top - 122 && y < bottom;

      if (clickedInside) {
        return;
      }
      setIsMenuOpen(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Box classes="flex justify-between py-8">
      <Link className="text-lg font-medium text-primary-color" href="/">
        thanosjs
      </Link>
      <div className="hidden gap-8 md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="duration-200 hover:text-primary-color"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <button onClick={openMenu} className="block md:hidden">
        <div className="cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:duration-200 hover:[&>svg]:opacity-80">
          <HiOutlineMenu />
        </div>
      </button>
      <MobileMenu links={links} isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </Box>
  );
};

export default Navbar;
