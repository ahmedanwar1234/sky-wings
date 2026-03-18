"use client";
import Link from "next/link";

const services = [
  { label: "Operation", href: "#" },
  { label: "Commercial", href: "#" },
  { label: "A/C Leasing", href: "#" },
  { label: "Spares", href: "#" },
  { label: "Tourism", href: "#" },
];

// Simple inline SVG icons
const PhoneIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4 shrink-0" style={{ color: "#7B3F00" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Social icons
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background: "white",
      }}
    >
      {/* Subtle warm overlay */}
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
<img src="/logo1.png" className=" w-50 h-50" alt="" />
          

            {/* Social Icons */}
          
          </div>

          {/* ── Services Column ── */}
          <div>
            <h3 className="font-bold text-lg mb-5 relative inline-block" style={{ color: "#3B1F00" }}>
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 rounded-full" style={{ background: "#7B3F00" }} />
            </h3>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                    style={{ color: "#5C2D00" }}
                  >
                    <ArrowIcon />
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
            <h3 className="font-bold text-lg mb-5 relative inline-block" style={{ color: "#3B1F00" }}>
              Contact Details
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 rounded-full" style={{ background: "#7B3F00" }} />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm" style={{ color: "#5C2D00" }}>
                <span style={{ color: "#7B3F00" }} className="mt-0.5"><PhoneIcon /></span>
                <span>+20 1018568892</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "#5C2D00" }}>
                <span style={{ color: "#7B3F00" }} className="mt-0.5"><MailIcon /></span>
                <a href="mailto:info@flybird-eg.com" className="transition-colors duration-200" style={{ color: "#5C2D00" }}>
                  info@sky-wings-eg.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "#5C2D00" }}>
                <span style={{ color: "#7B3F00" }}><LocationIcon /></span>
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

      {/* Scroll-to-top button */}
      <button
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        style={{ background: "#7B3F00" }}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
}