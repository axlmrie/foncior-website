"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <li><Link href="/about" className="hover:text-[#1b5346] transition-colors">A Propos</Link></li>
          <li><Link href="/tarifs" className="hover:text-[#1b5346] transition-colors">Tarifs</Link></li>
          <li><Link href="/solution" className="hover:text-[#1b5346] transition-colors">Solution</Link></li>
          <li><Link href="/contact" className="hover:text-[#1b5346] transition-colors">Contact</Link></li>
        </ul>

        <div className="hidden md:block shrink-0">
          <Button className="bg-[#1b5346] cursor-pointer hover:bg-[#123a31] text-white px-6 py-5 rounded-md text-base font-semibold">
            Rejoindre la Beta
          </Button>
        </div>

        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 space-y-6 text-[17px] font-bold text-black">
          <Link href="/about" onClick={toggleMenu} className="hover:text-[#1b5346] transition-colors">A Propos</Link>
          <Link href="/tarifs" onClick={toggleMenu} className="hover:text-[#1b5346] transition-colors">Tarifs</Link>
          <Link href="/solution" onClick={toggleMenu} className="hover:text-[#1b5346] transition-colors">Solution</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-[#1b5346] transition-colors">Contact</Link>
          
          <Button onClick={toggleMenu} className="bg-[#1b5346] hover:bg-[#123a31] text-white px-6 py-5 rounded-md text-base font-semibold w-3/4 max-w-sm mt-4">
            Rejoindre la Beta
          </Button>
        </div>
      )}
    </nav>
  );
}