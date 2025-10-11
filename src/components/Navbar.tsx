"use client"

import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";
import rrr from "@/images/rrr.png"
import Image from 'next/image'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/contact", label: "Contact Us"},
    { href: "/about", label: "About"},
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="flex h-12 items-center justify-between pr-2">
        <div className="inline-flex justify-center items-center">
            <div>
                <Image
                    src={rrr}
                    alt="Authentication illustration"
                    priority
                    className="h-10 w-16 object-contain drop-shadow-lg"
                />
            </div>
            <div>
                <span className="text-amber-900 font-bold text-xl">पहाड़ी स्वाद</span>
            </div>
        </div>

        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-black hover:text-orange-600 hover:bg-orange-200 hover:rounded-2xl p-1 px-2 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        
        <div className="hidden md:flex gap-2">
          <Link className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointers border-1 border-white px-3 py-2 rounded-lg text-white text-sm" href="/contact">
            Order Now
          </Link>
        </div>

        
        <div className="md:hidden">
            <Button 
            onClick={toggleMenu}
            className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointer border-1 border-white">
                {isMenuOpen ? <X /> : <Menu /> }
            </Button>
        </div>
    </div>

      
      
        {isMenuOpen && (
          <div>
            <nav className="flex flex-col items-center gap-4 p-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-black hover:text-orange-600 p-1 px-2 transition-colors hover:cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}


              <div>
          <Link className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointers  px-3 py-2 rounded-lg text-sm text-white" href="/contact">
            Order Now
          </Link>
      </div>
            </nav>
          </div>
        )}
      
    </nav>
  );
};
