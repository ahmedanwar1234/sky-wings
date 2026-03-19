"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaSun, FaMoon } from "react-icons/fa";

const SMOOTH = [0.25, 0.46, 0.45, 0.94];

const ServicesSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const services = [
    {
      id: 1,
      title: "Charter & VIP Jet Services",
  description: "Private charter flights & exclusive VIP jet experiences with white-glove service, tailored to your schedule.",      image: "charterr.jpg",
      alt: "Charter Service Illustration",
    },
    {
      id: 2,
      title: "Cargo",
      description: "Secure, efficient cargo handling with end-to-end tracking and dedicated support.",
      image: "cargo.jpg",
      alt: "Cargo Service Illustration",
    },
    {
      id: 3,
      title: "Passenger Handling",
      description: "Premium ground handling to ensure a smooth, hassle-free experience gate to gate.",
      image: "passenger-handeling.jpg",
      alt: "Passenger Handling Service Illustration",
    },
    {
      id: 4,
      title: "Aviation Security Services",
      description: "Comprehensive aviation security solutions ensuring the safety of passengers, crew, and assets at every touchpoint.",
      image: "aviation-security.jpg",
      alt: "Aviation Security Service Illustration",
    },
  
    {
      id: 6,
      title: "Fuel Supply Management",
      description: "Reliable, cost-effective fuel supply and management services with real-time monitoring and global network support.",
      image: "fuel.jpg",
      alt: "Fuel Supply Management Illustration",
    },
    {
      id: 7,
      title: "Flight Permits",
      description: "Streamlined flight permit processing and regulatory coordination across all jurisdictions — fast, accurate, and hassle-free.",
      image: "flight.jpg",
      alt: "Flight Permits Service Illustration",
    },
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      } transition-colors duration-500 bg-[url('/bg-section-02.png')] bg-cover bg-center`}
    >
      <div className="container mx-auto px-4 py-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-[#D4AF37]">
              Our Services
            </h2>
            <span className="block mt-2 h-[2px] w-full bg-gradient-to-r from-[#f59e66] via-[#d87731] to-[#D4AF37]"></span>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-600">
            Get to know our services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setIsHovered(service.id)}
              onMouseLeave={() => setIsHovered(null)}
              onFocus={() => setIsHovered(service.id)}
              onBlur={() => setIsHovered(null)}
              tabIndex={0}
              role="article"
              aria-label={service.title}
            >
              {/* Image with zoom on hover */}
              <motion.img
                src={service.image}
                alt={service.alt}
                className="absolute w-full h-full object-cover"
                animate={{
                  scale: isHovered === service.id ? 1.08 : 1,
                }}
                transition={{ duration: 0.6, ease: SMOOTH }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0";
                }}
              />

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background:
                    isHovered === service.id
                      ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                }}
                transition={{ duration: 0.5, ease: SMOOTH }}
              />

              {/* Card Content */}
              <div className="absolute bottom-0 p-6 w-full">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description fades in on hover */}
                <motion.p
                  className="text-gray-300 text-sm mb-3 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isHovered === service.id ? 1 : 0,
                    height: isHovered === service.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: SMOOTH }}
                >
                  {service.description}
                </motion.p>

                {/* Button fades in on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered === service.id ? 1 : 0,
                    y: isHovered === service.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.4, delay: 0.05, ease: SMOOTH }}
                >
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-blue-800 text-white rounded-md transition-colors duration-300"
                    aria-label={`Explore more about ${service.title}`}
                  >
                    Explore more
                    <motion.span
                      animate={{ x: isHovered === service.id ? 4 : 0 }}
                      transition={{ duration: 0.3, ease: SMOOTH }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;