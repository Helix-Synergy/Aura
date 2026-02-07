 const servicesData = [
 {
    title: "Management & Strategy Consulting",
    subtitle: "Driving Strategic Clarity and Sustainable Growth",
    description:
      "AURA’s Management & Strategy Consulting services help organizations develop clear strategic direction, strengthen leadership alignment, and respond effectively to market changes.",
    services: [
      "Corporate & Business Strategy Development",
      "Vision, Mission & Strategic Roadmaps",
      "Growth & Expansion Strategy",
      "Market Entry & Competitive Analysis",
      "Business Model Innovation",
      "Mergers & Acquisitions (M&A) Strategy",
      "Digital Transformation Strategy",
      "Strategic Performance Management",
    ],
    benefits: [
      "Clear decision-making framework",
      "Improved organizational alignment",
      "Long-term competitive advantage",
    ],
    keywords:
      "business strategy consulting, management consulting services, corporate strategy advisors",
  },
  {
    title: "Operations Consulting",
    subtitle: "Optimizing Performance Across the Value Chain",
    description:
      "We help organizations enhance operational efficiency, improve quality, and reduce costs through process optimization and operational excellence frameworks.",
    services: [
      "Business Process Reengineering (BPR)",
      "Supply Chain & Logistics Optimization",
      "Lean & Six Sigma Implementation",
      "Cost Reduction & Productivity Improvement",
      "Operations Strategy & Capacity Planning",
      "Quality Management Systems (QMS)",
      "KPI & Performance Measurement Design",
    ],
    benefits: [
      "Streamlined processes",
      "Reduced operational costs",
      "Improved customer satisfaction",
    ],
    keywords: "operations consulting, process improvement consulting, supply chain consulting",
  },
  {
    title: "Financial Advisory Consulting",
    subtitle: "Strengthening Financial Health and Strategic Decisions",
    description:
      "Our Financial Advisory Consulting services provide deep financial insight to support growth, investment, and risk management decisions.",
    services: [
      "Financial Planning & Analysis (FP&A)",
      "Budgeting, Forecasting & Cash Flow Management",
      "Business Valuation & Financial Modeling",
      "Risk Management & Internal Controls",
      "M&A Advisory & Due Diligence",
      "Capital Structuring & Fundraising Support",
      "Turnaround & Restructuring Advisory",
    ],
    benefits: [
      "Better financial visibility",
      "Informed investment decisions",
      "Improved profitability & compliance",
    ],
    keywords:
      "financial advisory consulting, corporate finance consulting, business valuation services",
  },
  {
    title: "Human Resources (HR) Consulting",
    subtitle: "Building High-Performance Organizations",
    description:
      "AURA supports organizations in creating people strategies that drive engagement, productivity, and leadership excellence.",
    services: [
      "HR Strategy & Transformation",
      "Organizational Design & Workforce Planning",
      "Talent Acquisition & Retention Strategy",
      "Performance Management Systems",
      "Compensation & Benefits Structuring",
      "Learning & Leadership Development",
      "Employee Engagement & Culture Building",
      "HR Policies, Compliance & Governance",
    ],
    benefits: [
      "Strong leadership pipeline",
      "Engaged and motivated workforce",
      "Scalable HR systems",
    ],
    keywords:
      "HR consulting services, human capital consulting, organizational development",
  },
  {
    title: "Marketing & Sales Consulting",
    subtitle: "Accelerating Revenue and Market Growth",
    description:
      "We help businesses grow faster through customer-focused marketing and sales strategies backed by analytics and market insights.",
    services: [
      "Go-to-Market (GTM) Strategy",
      "Brand Strategy & Positioning",
      "Market Research & Customer Insights",
      "Sales Strategy & Channel Optimization",
      "Digital Marketing Strategy & Performance Analytics",
      "Pricing & Revenue Optimization",
      "CRM & Sales Process Improvement",
    ],
    benefits: [
      "Stronger brand visibility",
      "Higher customer acquisition",
      "Scalable revenue growth",
    ],
    keywords:
      "marketing consulting services, sales strategy consulting, go-to-market consulting",
  },
  {
    title: "Specialized Consulting Services",
    subtitle: "Tailored Solutions for Complex Business Challenges",
    description:
      "Our Specialized Consulting services address unique, high-impact business needs across industries and growth stages.",
    services: [
      "Startup & Entrepreneur Advisory",
      "Business Transformation Programs",
      "ESG & Sustainability Consulting",
      "Risk, Compliance & Governance Advisory",
      "Technology & IT Strategy Consulting",
      "Crisis Management & Business Continuity Planning",
      "Industry-Specific Consulting Solutions",
    ],
    benefits: [
      "Customized, flexible solutions",
      "Risk mitigation and resilience",
      "Long-term value creation",
    ],
    keywords:
      "specialized consulting services, business transformation consulting, ESG advisory",
  },
];

const Services = () => {
  return (
    <div className="pt-0 px-6 max-w-7xl mx-auto">
     
      <h1 className="text-5xl font-extrabold text-center text-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-12">
        Our Consulting Services
      </h1>

      {servicesData.map((service, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center mb-16`}
        >
          {/* Card */}
          <div className="md:w-1/2 p-8 bg-gradient-to-r from-white via-blue-50 to-white rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{service.title}</h2>
            <h3 className="text-lg font-medium text-gray-600 mb-4">{service.subtitle}</h3>
            <p className="text-gray-700 mb-6">{service.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Our Services Include:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {service.services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
              <div className="flex flex-wrap gap-2">
                {service.benefits.map((b, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          {/* <div className="mt-6">
  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
    Keywords
  </h4>

  <p className="text-sm text-gray-500 italic leading-relaxed">
    {service.keywords}
  </p>
</div> */}

          </div>

          {/* Image or Icon placeholder */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl flex items-center justify-center text-white text-xl font-bold animate-pulse">
              {service.title.split(" ")[0]}
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="mt-16  mb-8 p-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-4xl font-bold text-white mb-4">
          Let’s Build a Stronger Business Together
        </h2>
        <p className="text-white mb-6">
          Contact AURA Business Consulting today to discuss how we can support your growth journey.
        </p>
        <a
          href="tel:7075782798"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          📞 Call Us
        </a>
      </div>
    </div>
  );
};

export default Services;
