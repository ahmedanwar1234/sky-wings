"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/service", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  const linkClass = (href) =>
    `border-b-2 font-bold text-[15px] transition-all duration-300 ease-in-out hover:text-gray-500 hover:border-gray-500 ${
      pathname === href
        ? "text-gray-500 border-none"
        : "text-[#D4AF37] border-transparent"
    }`;

  return (
    <header className="text-white relative">
      <div className="container mx-auto flex justify-between items-center py-8 md:pt-10 px-5 md:w-[60%] md:px-0">

        {/* Logo - slides down from top */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src="/logo1.png" alt="Fly Bird Logo" className="w-34 h-auto object-contain" />
        </motion.div>

        {/* Hamburger Button - fades in */}
        <motion.button
          className="md:hidden text-black mb-7  focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.85 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>

        {/* Desktop Nav - each link staggers in */}
        <nav className="hidden mb-7 md:flex space-x-8">
          {navLinks.map(({ href, label }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Nav - slides down smoothly when opened */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col space-y-4 py-4 px-4">
                {navLinks.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.07 }}
                  >
                    <Link href={href} className={linkClass(href)} onClick={() => setIsOpen(false)}>
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;