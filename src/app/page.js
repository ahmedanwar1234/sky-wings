
import AboutUs from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>

    <div className="relative min-h-screen ">
      {/* Background Video for Header and Hero Section */}
     <div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover" 
  >
    <source src="/herovideo2.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black opacity-40"></div>
</div>
      
      {/* Content Sections */}
      <div className="relative z-10">
        <Header/>
        <Hero/>
      </div>
    </div>
      
      <AboutUs/>
      <div className=" bg-black h-full w-full">
        <OurServices/>
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
