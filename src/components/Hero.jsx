"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
 <div className="relative px-10 flex flex-col md:flex-row justify-center md:justify-around items-center h-[calc(100vh-204px)] bg-[url('https://dreamlinerav.com/wp-content/uploads/2025/09/image-1.png')] bg-cover bg-center overflow-hidden">

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Text Block */}
      <motion.div
        className="text-blue-900 w-full md:w-150 text-center md:text-left mb-8 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl text-[#d87731] md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Sky Wings Aviation
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          Aircraft ground handling services that operate 24/7 to ensure continuous, reliable support.
        </motion.p>
      </motion.div>

      {/* Plane Image - entry once, then float forever */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 150, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="pngegg (2).png"
          alt="Fly Bird Logo"
          className="w-96 md:w-[48rem] lg:w-[60rem] max-w-full h-auto object-contain drop-shadow-2xl"
          animate={{ y: [0, -14, 0] }}
          
        />
      </motion.div>

    </div>  )
}

export default Hero