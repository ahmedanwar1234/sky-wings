import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-full"
      style={{ backgroundImage: "url('bg2.jpg')" }}
    >
<div className="h-full transition-all duration-300" style={{ backgroundColor: 'rgba(76, 128, 193, 0.84)' }}>
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Left - Text */}
            <div>
              {/* Title Row */}
              <div className="flex flex-row items-center gap-3 mb-3">
                <span className="block w-10 md:w-16 h-1 flex-shrink-0 bg-gradient-to-r from-[#f59e66] via-[#d87731] to-[#D4AF37]"></span>
                <h2 className="text-xl md:text-3xl text-white font-bold">
                  Talk to an expert
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                For any inquiries or information feel free to contact us at anytime.
              </p>
            </div>

            {/* Right - Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 self-start md:self-auto bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] text-white font-semibold text-sm md:text-base px-5 py-3  transition-all duration-300 whitespace-nowrap"
            >
              <FaPhoneAlt className="w-4 h-4" />
              Contact Us
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs