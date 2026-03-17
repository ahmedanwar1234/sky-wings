
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
    <AboutUs/>
    <div className=" bg-black h-full w-full">
    <OurServices/>
    </div>
    <div>
      
    </div>

    </div>
  );
}
