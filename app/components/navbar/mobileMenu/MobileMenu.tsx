"use client";
import { LINKS } from "@/app/utils/constants";
import { LinkItem } from "@/app/utils/types";
import Link from "next/link";
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ onClose, isMenuOpen }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={menuRef}
      className={`fixed left-0 top-0 z-20 flex h-full w-full flex-col items-center bg-black duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="mb-8 mr-16 mt-8 self-end">
        <div className="cursor-pointer [&>svg]:h-6 [&>svg]:w-6 [&>svg]:duration-200 hover:[&>svg]:opacity-80">
          <IoClose />
        </div>
      </button>
      <div className="flex flex-col gap-4">
        {LINKS.map((link) => (
          <Link
            onClick={onClose}
            key={link.name}
            href={link.href}
            className="duration-200 hover:text-primary-color"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
