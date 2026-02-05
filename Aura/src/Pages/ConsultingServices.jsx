import React from "react";
import {
  Briefcase,
  Settings,
  DollarSign,
  Users,
  TrendingUp,
  Layers,
  ArrowRight,
  Search,
  BarChart,
  Target,
  Rocket,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const ConsultingServices = () => {
  const navigate=useNavigate();
  const HandleExplore=()=>{
    navigate("/services")
  }
  const HandleButton=()=>{
    navigate("/contact")
  }
  const services = [
    {
      title: "Management & Strategy Consulting",
      desc: "Define your vision, sharpen strategy, and lead with confidence.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Operations Consulting",
      desc: "Optimize processes, reduce costs, and improve efficiency.",
      icon: <Settings size={28} />,
    },
    {
      title: "Financial Advisory Consulting",
      desc: "Strengthen financial performance and strategic decision-making.",
      icon: <DollarSign size={28} />,
    },
    {
      title: "Human Resources (HR) Consulting",
      desc: "Build agile, engaged, and high-performing teams.",
      icon: <Users size={28} />,
    },
    {
      title: "Marketing & Sales Consulting",
      desc: "Accelerate growth through smarter marketing and sales strategies.",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Specialized Consulting",
      desc: "Tailored solutions for complex and industry-specific challenges.",
      icon: <Layers size={28} />,
    },
  ];

  return (
    <section className="py-28 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
            Our Consulting Services
          </h2>
          <p className="text-gray-600 max-w-3xl animate-slideUp">
            We help organizations solve complex challenges and drive sustainable
            growth through focused, execution-driven consulting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative
                p-8 bg-white rounded-2xl
                border border-gray-200
                hover:border-blue-600
                transition-all duration-500
                hover:-translate-y-2
                animate-slideUp
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div
                className="
                  mb-6 w-14 h-14 flex items-center justify-center
                  rounded-xl bg-blue-50 text-blue-600
                  group-hover:bg-blue-600 group-hover:text-white
                  transition-all duration-500
                "
              >
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.desc}
              </p>

              {/* Link */}
              <div  onClick={HandleExplore} className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                Explore more <ArrowRight size={18}   />
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Approach */}
       <div className="mt-32">
  <h3 className="text-2xl md:text-3xl font-bold mb-16 text-center animate-fadeIn">
    Our Consulting Approach
  </h3>

  <div className="relative max-w-6xl mx-auto">

    {/* Connecting Line */}
    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 overflow-hidden">
      <div className="h-full bg-blue-600 animate-lineGrowFull"></div>
    </div>

    {/* Steps */}
    <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-0">
      {[
        { label: "Discover", icon: <Search size={24} /> },
        { label: "Analyze", icon: <BarChart size={24} /> },
        { label: "Strategize", icon: <Target size={24} /> },
        { label: "Execute", icon: <Rocket size={24} /> },
        { label: "Optimize", icon: <Zap size={24} /> },
      ].map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center group animate-stepReveal"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Circle */}
          <div
            className="
              w-14 h-14 rounded-full bg-white border-2 border-blue-600
              flex items-center justify-center text-blue-600
              transition-all duration-500
              group-hover:bg-blue-600 group-hover:text-white
              group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]
            "
          >
            {step.icon}
          </div>

          {/* Label */}
          <span
            className="
              mt-4 text-lg font-medium text-gray-700
              transition-colors duration-300
              group-hover:text-blue-600
            "
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* CTA */}
   <div className="
  mt-32 relative overflow-hidden
  bg-gray-900 text-white rounded-3xl p-16 text-center
  animate-ctaReveal
">

  {/* Animated Background Accent */}
  <div className="
    absolute inset-0
    bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20
    animate-ctaGlow
  "></div>

  {/* Content */}
  <div className="relative z-10">

    {/* Heading */}
    <h3 className="
      text-2xl md:text-3xl font-bold mb-4
      animate-fadeUpSoft
    ">
      Ready to Transform Your Business?
    </h3>

    {/* Description */}
    <p className="
      text-gray-300 max-w-2xl mx-auto mb-10
      animate-fadeUpSoft
    " style={{ animationDelay: "200ms" }}>
      Partner with AURA Business Consulting to unlock your organization’s
      full potential.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-6">

      {/* Primary CTA */}
      <button onClick={HandleButton} className="
        px-10 py-4 rounded-full bg-blue-600
        font-semibold tracking-wide
        transition-all duration-500
        hover:bg-blue-700 hover:scale-105
        hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]
        animate-buttonRise
        cursor-pointer
      " style={{ animationDelay: "400ms" }}>
        📞 Contact Us Today
      </button>

      {/* Secondary CTA */}
      <button onClick={HandleButton} className="
        px-10 py-4 rounded-full border border-white
        font-semibold tracking-wide
        transition-all duration-500
        hover:bg-white hover:text-gray-900
        hover:scale-105
        animate-buttonRise
          cursor-pointer
      " style={{ animationDelay: "550ms" }}>
        📧 Request a Consultation
      </button>

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default ConsultingServices;
