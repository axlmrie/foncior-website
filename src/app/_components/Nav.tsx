"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'A Propos', href: '/about' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Solution', href: '/solution' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        
        <div className="shrink-0 z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image 
              src="/fonciorIcons.png"  
              alt="Logo de Foncior" 
              width={216} 
              height={150} 
              className="w-auto h-12 object-contain" 
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-12 text-[17px] font-bold text-black">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`transition-colors ${
                  pathname === link.href ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block shrink-0">
          <Button className="bg-primary cursor-pointer hover:bg-[#123a31] text-white px-6 py-5 rounded-md text-base font-semibold">
            Rejoindre la Beta
          </Button>
        </div>

        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu} className="text-black focus:outline-none cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 space-y-6 text-[17px] font-bold text-black">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={toggleMenu} 
              className={`transition-colors ${
                pathname === link.href ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Button onClick={toggleMenu} className="bg-primary hover:bg-[#123a31] cursor-pointer text-white px-6 py-5 rounded-md text-base font-semibold w-3/4 max-w-sm mt-4">
            Rejoindre la Beta
          </Button>
        </div>
      )}
    </nav>
  );
}