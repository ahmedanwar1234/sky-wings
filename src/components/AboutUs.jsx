"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

          {/* Image - slides in from left on scroll */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img
              src="/airplane.jpeg"
              alt="Airplane"
              className="w-full md:w-[70%] h-64 md:h-170 object-cover rounded-2xl md:rounded-[50px] mx-auto"
            />
          </motion.div>

          {/* Text Block - slides in from right on scroll */}
          <motion.div
            className="md:w-1/2 md:pl-8 text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Heading */}
            <motion.h3
              className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#d87731]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Sky Wings Aviation provides
            </motion.h3>

            {/* Paragraph 1 */}
            <motion.p
              className="text-gray-700 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              Sky Wings Aviation provides professional aircraft ground handling services for airline
              operators and aviation partners. While the company is newly established, our team brings
              years of industry experience and operational expertise.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              className="text-gray-700 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              Our services cover scheduled, charter, cargo, air ambulance, and VIP flights, and we
              operate 24/7 to ensure continuous, reliable support. At Sky Wings Aviation, safety,
              efficiency, and exceptional service are our priorities.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            >
              <button className="bg-[#d87731] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                ABOUT US
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;