
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
      {/* <div
        className=" 
       md:flex-row justify-center md:justify-around items-center h-[calc(100vh)] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/test.png')" }}>

    <Header/>
      <Hero/>
      </div> */}
      <Header/>
      <Hero/>
    <AboutUs/>
    <div className=" bg-black h-full w-full">
    <OurServices/>
    </div>
    <ContactUs/>
    <Footer/>
    <div>
      
    </div>

    </div>
  );
}
