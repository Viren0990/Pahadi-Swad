"use client"

import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";
import rrr from "@/images/rrr.png"
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/contact", label: "Contact Us"},
    { href: "/about", label: "About"},
  ];

  // Animation variants
  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const linkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.div 
          className="inline-flex justify-center items-center gap-2"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={rrr}
                alt="Pahadi Swad Logo"
                priority
                className="h-12 w-16 object-contain drop-shadow-lg"
              />
            </motion.div>
            <motion.span 
              className="text-amber-900 font-bold text-xl"
              whileHover={{ 
                scale: 1.05,
                color: "#ea580c"
              }}
            >
              पहाड़ी स्वाद
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-6"
          variants={navbarVariants}
        >
          {navLinks.map(({ href, label }, index) => (
            <motion.div
              key={href}
              variants={linkVariants}
              custom={index}
            >
              <Link href={href}>
                <motion.span
                  className="text-gray-700 font-medium px-3 py-2 rounded-lg inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#fed7aa",
                    color: "#ea580c"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop CTA Button */}
        <motion.div 
          className="hidden md:flex gap-2"
          variants={linkVariants}
        >
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Order Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          variants={linkVariants}
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              onClick={toggleMenu}
              className="bg-orange-500 hover:bg-orange-700"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-200 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-2 p-4">
              {navLinks.map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={mobileItemVariants}
                  className="w-full"
                >
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full"
                  >
                    <motion.div
                      className="text-gray-700 font-medium hover:text-orange-600 p-3 px-4 transition-colors text-center w-full rounded-lg"
                      whileHover={{ 
                        backgroundColor: "#fed7aa",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={mobileItemVariants}
                className="w-full mt-2"
              >
                <Link href="/contact" className="w-full block">
                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Order Now
                  </motion.button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
