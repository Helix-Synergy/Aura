import React from "react";
import {
  FaIndustry,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaHospital,
  FaShoppingCart,
  FaTruck,
  FaBolt,
  FaRocket,
} from "react-icons/fa";

const industriesData = [
  { name: "Manufacturing", icon: <FaIndustry size={40} /> },
  { name: "IT & Technology", icon: <FaLaptopCode size={40} /> },
  { name: "Financial Services", icon: <FaMoneyCheckAlt size={40} /> },
  { name: "Healthcare", icon: <FaHospital size={40} /> },
  { name: "Retail", icon: <FaShoppingCart size={40} /> },
  { name: "Logistics", icon: <FaTruck size={40} /> },
  { name: "Energy", icon: <FaBolt size={40} /> },
  { name: "Startups & SMEs", icon: <FaRocket size={40} /> },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slideUp">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-8 flex flex-col items-center justify-center text-center font-semibold shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-black hover:text-white hover:shadow-2xl animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 text-blue-600 hover:text-white transition-colors duration-500">
                {industry.icon}
              </div>
              <span className="text-lg md:text-xl">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
