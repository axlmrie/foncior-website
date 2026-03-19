"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "A Propos", href: "/about" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Solution", href: "/solution" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="z-50 shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/fonciorIcons.png"
              alt="Logo de Foncior"
              width={216}
              height={150}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <ul className="hidden items-center space-x-12 text-[17px] font-bold text-black md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href ? "text-primary" : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 md:block">
          <Link href="/beta">
            <Button className="bg-primary cursor-pointer rounded-md px-6 py-5 text-base font-semibold text-white hover:bg-[#123a31]">
              Rejoindre la Beta
            </Button>
          </Link>
        </div>

        <div className="z-50 flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 flex w-full flex-col items-center space-y-6 border-t border-gray-100 bg-white py-6 text-[17px] font-bold text-black shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`transition-colors ${
                pathname === link.href ? "text-primary" : "hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button
            onClick={toggleMenu}
            className="bg-primary mt-4 w-3/4 max-w-sm cursor-pointer rounded-md px-6 py-5 text-base font-semibold text-white hover:bg-[#123a31]"
          >
            Rejoindre la Beta
          </Button>
        </div>
      )}
    </nav>
  );
}
