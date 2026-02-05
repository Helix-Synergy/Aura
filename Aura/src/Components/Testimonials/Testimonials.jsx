import React from "react";

const testimonials = [
  {
    quote:
      "AURA Business Consulting provided exceptional strategic clarity and hands-on support. Their ability to align strategy with execution set them apart.",
    author: "CEO",
    company: "Global Manufacturing Group",
  },
  {
    quote:
      "Their consultants demonstrated deep industry knowledge, professionalism, and integrity. AURA became a true partner in our transformation journey.",
    author: "Chief Operating Officer",
    company: "Logistics Enterprise",
  },
  {
    quote:
      "AURA’s financial advisory support was instrumental in preparing us for growth and investment. Practical, insightful, and results-driven.",
    author: "CFO",
    company: "Technology Services Firm",
  },
  {
    quote:
      "From HR transformation to leadership development, AURA delivered measurable impact with global best practices.",
    author: "Head of Human Resources",
    company: "Healthcare Organization",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-600 mb-12">
          What our clients say about partnering with AURA Business Consulting
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-xl shadow-md
                transform transition-all duration-700 ease-out
                hover:-translate-y-2 hover:shadow-xl
                opacity-0 translate-y-6
                animate-fade
              "
              style={{
                animation: `fadeUp 0.8s ease forwards`,
                animationDelay: `${index * 150}ms`,
              }}
            >
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                “{item.quote}”
              </p>
              <div className="flex justify-end">
  <div className="text-right">
    <div className="text-gray-900 font-semibold">
      — {item.author}
    </div>
    <div className="text-gray-500 text-sm">
      {item.company}
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* Inline animation using style tag (no config needed) */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
