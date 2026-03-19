"use client"
import React from 'react'

const Hero = () => {
  return (
    <div className="relative px-10 flex flex-col md:flex-row justify-center md:justify-around items-center min-h-[calc(100vh-204px)] overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 via-transparent to-transparent pointer-events-none" />

      {/* Text Block */}
      <div className="w-full md:w-150 text-center mb-8 md:mb-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-[#D4AF37] md:text-7xl font-bold mb-4 whitespace-nowrap">
          Sky Wings Aviation
        </h1>
        <p className="text-[16px] dark:text-white text-gray-300 text-center md:text-xl">
          Aircraft ground handling services that operate 24/7 to ensure continuous, reliable support.
        </p>
      </div>

    </div>
  )
}

export default Hero
