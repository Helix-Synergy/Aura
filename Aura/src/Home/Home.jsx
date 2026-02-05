import React from "react";
import AboutSection from "../Pages/AboutSection";
import ChooseUs from "../Pages/ChooseUs";
import IndustriesSection from "../Pages/IndustriesSection";
import ConsultingServices from "../Pages/ConsultingServices";
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate=useNavigate()
  const HandleService=()=>{
navigate("/services")
  }
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/Images/Banner.jpg"
          alt="AURA Consulting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl animate-fadeIn">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide animate-slideUp">
            AURA Business Consulting
          </h1>

          <p className="text-gray-200 mt-4 text-lg md:text-2xl animate-slideUp delay-200">
            Strategic Insight Operational Excellence Sustainable Growth.
          </p>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto animate-slideUp delay-300">
            A global business advisory firm delivering strategic, operational,
            financial, and people-focused consulting solutions for sustainable
            growth and competitive advantage.
          </p>

          <button onClick={HandleService} className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 animate-slideUp delay-500 cursor-pointer">
            Explore Our Services
          </button>
        </div>
      </section>
      <AboutSection />
      <IndustriesSection />
      <ChooseUs />
      <ConsultingServices/>
    </div>
  );
};

export default Home;
