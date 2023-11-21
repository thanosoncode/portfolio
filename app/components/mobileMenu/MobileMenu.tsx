"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

interface MobileMenuProps {
  isMenuOpen: boolean;
  links: {
    name: string;
    href: string;
  }[];
  onClose: () => void;
}

const MobileMenu = ({ onClose, links, isMenuOpen }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={menuRef}
      className={`fixed left-0 top-0 z-20 flex h-full w-full flex-col items-center bg-black duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="mb-8 mr-[6vw] mt-[3vw] self-end">
        <div className="cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:duration-200 hover:[&>svg]:opacity-80">
          <IoClose />
        </div>
      </button>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="duration-200 hover:text-appGreen-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
