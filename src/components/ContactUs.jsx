import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <div className="bg-center bg-no-repeat bg-cover h-full">
      <div className="relative w-full  overflow-hidden bg-[#050202] text-white px-8 py-16 md:px-16 md:py-20 mb-20 shadow-2xl isolate">

        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0404] to-[#1a0505]"></div>

          <div className="absolute -top-[50%] -right-[10%] w-[120%] h-[200%] bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-orange-900/40 via-red-950/20 to-transparent blur-[120px]"></div>

          <div className="absolute -top-[20%] -right-[15%] w-[800px] h-[800px] bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-600/10 to-transparent blur-[90px] mix-blend-screen opacity-80"></div>

          <div className="absolute -top-[5%] -right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-100/30 via-orange-200/5 to-transparent blur-[60px] mix-blend-overlay"></div>

          <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-40 mix-blend-screen pointer-events-none">
            <div className="absolute top-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-amber-100 to-transparent rotate-[-35deg] transform origin-top-right blur-[1px]"></div>
            <div className="absolute top-0 right-0 w-[150%] h-[40px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rotate-[-35deg] transform origin-top-right blur-[20px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Text block */}
          <div className="max-w-xl">
            <div className="flex flex-row items-center gap-3 mb-3">
              <h2 className="text-3xl md:text-6xl text-white font-bold">
                Talk to an expert
              </h2>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              For any inquiries or information feel free to contact us at anytime.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 self-start md:self-auto bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] text-white font-semibold text-sm md:text-base px-5 py-3 transition-all duration-300 whitespace-nowrap"
          >
            <FaPhoneAlt className="w-4 h-4" />
            Contact Us
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ContactUs