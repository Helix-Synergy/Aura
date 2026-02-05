import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slideUp">
          Who We Are
        </h2>

        {/* Section Paragraph */}
        <p className="text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed animate-slideUp delay-200">
          AURA Business Consulting is a global business advisory firm delivering strategic, operational, financial, and people-focused consulting solutions to organizations seeking sustainable growth and competitive advantage. We work closely with business leaders to transform challenges into opportunities through data-driven strategies, execution-focused consulting.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
