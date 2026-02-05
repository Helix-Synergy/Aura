import React from 'react';
import { FaIndustry, FaLaptopCode, FaMoneyCheckAlt, FaHeartbeat, FaShoppingCart, FaTruck, FaBolt, FaRocket, FaBriefcase } from "react-icons/fa";

const industries = [
  {
    title: "Manufacturing & Industrial",
    icon: <FaIndustry className="text-4xl text-purple-500 mb-4" />,
    description: "Operations optimization, supply chain & logistics consulting, lean manufacturing & quality advisory",
  },
  {
    title: "Information Technology & Services",
    icon: <FaLaptopCode className="text-4xl text-purple-500 mb-4" />,
    description: "Digital transformation, IT operations, scaling advisory, talent & workforce planning",
  },
  {
    title: "Financial Services & Banking",
    icon: <FaMoneyCheckAlt className="text-4xl text-purple-500 mb-4" />,
    description: "Risk management, financial performance optimization, process automation, transformation advisory",
  },
  {
    title: "Healthcare & Life Sciences",
    icon: <FaHeartbeat className="text-4xl text-purple-500 mb-4" />,
    description: "Operational efficiency, cost optimization, workforce transformation, compliance & governance",
  },
  {
    title: "Retail & Consumer Goods",
    icon: <FaShoppingCart className="text-4xl text-purple-500 mb-4" />,
    description: "Sales & channel optimization, customer experience strategy, supply chain & inventory management, branding",
  },
  {
    title: "Logistics & Supply Chain",
    icon: <FaTruck className="text-4xl text-purple-500 mb-4" />,
    description: "End-to-end supply chain optimization, warehouse & transportation efficiency, cost reduction",
  },
  {
    title: "Energy & Utilities",
    icon: <FaBolt className="text-4xl text-purple-500 mb-4" />,
    description: "Operational excellence programs, regulatory compliance, sustainability & ESG advisory",
  },
  {
    title: "Startups & SMEs",
    icon: <FaRocket className="text-4xl text-purple-500 mb-4" />,
    description: "Business strategy, financial planning, HR setup, go-to-market & growth consulting",
  },
  {
    title: "Professional Services",
    icon: <FaBriefcase className="text-4xl text-purple-500 mb-4" />,
    description: "Business model & pricing strategy, operational efficiency, client acquisition & retention",
  },
];

const Industries = () => {
  return (
    <div className="bg-white py-20 px-5 md:px-20 font-sans mt-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
        Industry-Focused Consulting Solutions
      </h1>
      <p className="text-center text-lg md:text-xl mb-16 max-w-4xl mx-auto text-gray-600">
        AURA Business Consulting delivers industry-specific insights and tailored solutions to help organizations succeed in competitive and evolving markets.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center">{industry.icon}</div>
            <h2 className="text-xl font-semibold mb-4 mt-4 text-gray-900">{industry.title}</h2>

            {/* Description as list */}
            <ul className="list-disc list-inside text-gray-600 text-left mt-2 space-y-1">
              {industry.description.split(',').map((point, idx) => (
                <li key={idx}>{point.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
   <div className="text-center mt-8">
  <h1 className="font-extrabold text-4xl mt-6">Our Industry Advantage</h1>
  <ul className="flex justify-center gap-8 mt-6 list-none">
    <li>✔ Deep industry knowledge</li>
    <li>✔ Practical, hands-on solutions</li>
    <li>✔ Cross-functional consulting expertise</li>
    <li>✔ Scalable approaches for growth</li>
  </ul>
</div>

    </div>
  );
};

export default Industries;
