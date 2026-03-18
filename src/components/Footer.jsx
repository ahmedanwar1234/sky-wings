"use client";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRightCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

const services = [
  { label: "Operation", href: "#" },
  { label: "Commercial", href: "#" },
  { label: "A/C Leasing", href: "#" },
  { label: "Spares", href: "#" },
  { label: "Tourism", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "white" }}
    >
      {/* Subtle warm dot overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7B3F00 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {/* ── Brand Column ── */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/logo1.png" className="w-50 h-50" alt="" />

            {/* Social Icons */}
         
          </div>

          {/* ── Services Column ── */}
          <div>
            <h3
              className="font-bold text-lg mb-5 relative inline-block"
              style={{ color: "#3B1F00" }}
            >
              Our Services
              <span
                className="absolute -bottom-1.5 left-0 w-8 h-0.5 rounded-full"
                style={{ background: "#7B3F00" }}
              />
            </h3>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                    style={{ color: "#5C2D00" }}
                  >
                    <FiArrowRightCircle
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#7B3F00" }}
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div>
            <h3
              className="font-bold text-lg mb-5 relative inline-block"
              style={{ color: "#3B1F00" }}
            >
              Contact Details
              <span
                className="absolute -bottom-1.5 left-0 w-8 h-0.5 rounded-full"
                style={{ background: "#7B3F00" }}
              />
            </h3>
            <ul className="space-y-4">
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "#5C2D00" }}
              >
                <FiPhone
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "#7B3F00" }}
                />
                <span>+20 1018568892</span>
              </li>
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "#5C2D00" }}
              >
                <FiMail
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "#7B3F00" }}
                />
                <a
                  href="mailto:info@sky-wings-eg.com"
                  className="transition-colors duration-200"
                  style={{ color: "#5C2D00" }}
                >
                  info@sky-wings-eg.com
                </a>
              </li>
              <li
                className="flex items-start gap-3 text-sm"
                style={{ color: "#5C2D00" }}
              >
                <FiMapPin
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "#7B3F00" }}
                />
                <span>
                  14 Ministers Square 1177, Sheraton Airport, Nozha, Cairo
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t" style={{ borderColor: "#7B3F0040" }} />

        <p className="mt-5 text-center text-xs" style={{ color: "#7B3F00" }}>
          2026 © All Rights Reserved. Developed by{" Anwar "}
        </p>
      </div>

      {/* Scroll-to-top button — fixed with onClick */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        style={{ background: "#D4AF37" }}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}