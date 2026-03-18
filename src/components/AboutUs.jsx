"use client";
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/airplane.jpeg"
              alt="Airplane"
              className="w-full md:w-[70%] h-64 md:h-170 object-cover rounded-2xl md:rounded-[50px] mx-auto"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-0 text-center md:text-left items-center md:items-start">

            {/* Heading Row */}
            <div className="flex items-center gap-3">
              <span className="block w-8 md:w-16 h-1 flex-shrink-0 bg-gradient-to-r from-[#f59e66] via-[#d87731] to-[#D4AF37]"></span>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#D4AF37] leading-snug">
                Sky Wings Aviation provides
              </h3>
            </div>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Sky Wings Aviation provides professional aircraft ground handling services for airline
              operators and aviation partners. While the company is newly established, our team brings
              years of industry experience and operational expertise.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Our services cover scheduled, charter, cargo, air ambulance, and VIP flights, and we
              operate 24/7 to ensure continuous, reliable support. At Sky Wings Aviation, safety,
              efficiency, and exceptional service are our priorities.
            </p>

            {/* Button */}
            <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
              ABOUT US
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;