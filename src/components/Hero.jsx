"use client"
import React from 'react'

const Hero = () => {
  return (
    <div className="relative px-10 flex flex-col md:flex-row justify-center md:justify-around items-center h-[calc(100vh-204px)] bg-[url('/image.png')] bg-cover bg-center overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 via-transparent to-transparent pointer-events-none" />

      {/* Text Block */}
      <div className="text-blue-900 w-full md:w-150 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl text-[#D4AF37] md:text-6xl font-bold mb-4">
          Sky Wings Aviation
        </h1>
        <p className="text-lg md:text-xl">
          Aircraft ground handling services that operate 24/7 to ensure continuous, reliable support.
        </p>
      </div>

      {/* Plane Image */}
      <div className="flex justify-center items-center">
        <img
          src="pngegg (2).png"
          alt="Fly Bird Logo"
          className="w-96 md:w-[48rem] lg:w-[60rem] max-w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

    </div>
  )
}

export default Hero