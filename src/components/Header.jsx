"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const services = [
  { href: "/service/charter-vip", label: "Charter & VIP Jet Services" },
  { href: "/service/cargo", label: "Cargo" },
  { href: "/service/passenger-handling", label: "Passenger Handling" },
  { href: "/service/aviation-security", label: "Aviation Security Services" },
  { href: "/service/fuel-supply", label: "Fuel Supply Management" },
  { href: "/service/flight-permits", label: "Flight Permits" },
  { href: "/service/ground-handling", label: "Ground Handling" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = pathname.startsWith("/service");

  const linkClass = (href) =>
    `border-b-2 font-bold text-[15px] md:text-[16px] transition-all duration-300 ease-in-out hover:text-gray-600 ${pathname === "/" ? "hover:text-white" : "hover:text-gray-600"} hover:border-gray-500 ${
      pathname === href
        ? `text-${pathname === "/" ? "white" : "gray-600"} border-none`
        : "text-[#D4AF37] border-transparent"
    }`;

  return (
    <header className="text-white relative">
      <div className="container mx-auto flex justify-between items-center md:py-8 md:pt-10 px-5 md:w-[60%] md:px-0">

        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/logo1.png" alt="Fly Bird Logo" className="w-34 h-auto object-contain" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`md:hidden ${pathname === "/" ? "text-white" : "text-gray-600"} mb-7 focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden mb-7 md:flex space-x-8 items-center">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 border-b-2 font-bold text-[15px] md:text-[16px] transition-all duration-300 ease-in-out hover:${pathname === "/" ? "md:text-white" : "text-gray-600"} hover:border-gray-500 ${
                isServiceActive
                  ? "text-white border-none"
                  : "text-[#D4AF37] border-transparent"
              }`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 z-50 pt-3">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Golden top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#f59e66] via-[#d87731] to-[#D4AF37]" />
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className={`block px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-[#D4AF37] hover:text-white ${
                          pathname === service.href
                            ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                            : "text-gray-700"
                        }`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            )}
          </div>

          <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>
        </nav>

       {/* Mobile Nav - Left Slide Drawer */}
{/* Backdrop */}
{isOpen && (
  <div
    className="md:hidden fixed inset-0 bg-black/40 z-40"
    onClick={() => setIsOpen(false)}
  />
)}

{/* Drawer */}
<nav
  className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Drawer Header */}
  <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
    <Link href="/" onClick={() => setIsOpen(false)}>
      <img src="/logo1.png" alt="Fly Bird Logo" className="w-28 h-auto object-contain" />
    </Link>
    <button
      onClick={() => setIsOpen(false)}
      className="text-gray-400 hover:text-gray-600 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  {/* Nav Links */}
  <div className="flex flex-col flex-1 px-5 py-6 space-y-1 overflow-y-auto">
    <Link
      href="/"
      className={`px-3 py-3 rounded-lg font-semibold text-[15px] transition-all duration-200 ${
        pathname === "/" ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>

    <Link
      href="/about"
      className={`px-3 py-3 rounded-lg font-semibold text-[15px] transition-all duration-200 ${
        pathname === "/about" ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      About Us
    </Link>

    {/* Services Accordion */}
    <div>
      <button
        className={`flex items-center justify-between w-full px-3 py-3 rounded-lg font-semibold text-[15px] transition-all duration-200 ${
          isServiceActive ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37]"
        }`}
        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
      >
        Services
        <FaChevronDown className={`text-xs transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
      </button>

      {mobileServicesOpen && (
        <div className="mt-1 ml-3 flex flex-col space-y-1 border-l-2 border-[#D4AF37]/30 pl-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === service.href
                  ? "text-[#D4AF37] bg-[#D4AF37]/5"
                  : "text-gray-500 hover:text-[#D4AF37] hover:bg-gray-50"
              }`}
              onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </div>

    <Link
      href="/contact"
      className={`px-3 py-3 rounded-lg font-semibold text-[15px] transition-all duration-200 ${
        pathname === "/contact" ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      Contact Us
    </Link>
  </div>

 
</nav>
      </div>
    </header>
  );
};

export default Header;