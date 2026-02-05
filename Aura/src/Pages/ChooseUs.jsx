import React from "react";

const ChooseUs = () => {
  const points = [
    "Tailored consulting solutions",
    "Experienced industry professionals",
    "End-to-end implementation support",
    "Proven methodologies & frameworks",
    "Results-focused approach",
  ];

  return (
 <section className="py-24 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">

    {/* LEFT – CONTENT */}
    <div className="lg:w-1/2">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16 animate-fadeUpSoft">
        Why Choose AURA
      </h2>

      {/* Timeline Content */}
      <div className="relative border-l-2 border-blue-600 pl-8 space-y-12">
        {points.map((point, index) => (
          <div
            key={index}
            className="group relative animate-slideLeftSoft"
            style={{
              animationDelay: `${index * 220}ms`,
              animationFillMode: "forwards",
            }}
          >
            {/* Bullet */}
            <span
              className="
                absolute -left-[41px] top-2
                w-3.5 h-3.5 rounded-full bg-blue-600
                animate-dotPulse
              "
            ></span>

            {/* Text */}
            <p
              className="
                text-lg md:text-xl font-medium
                transition-all duration-500
                group-hover:translate-x-2
                group-hover:text-blue-400
              "
            >
              {point}
            </p>

            {/* Underline */}
            <div
              className="
                mt-3 h-[2px] w-0 bg-blue-600
                animate-lineGrow
                group-hover:w-24
              "
            ></div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p
        className="mt-20 text-gray-400 max-w-3xl animate-fadeUpSoft"
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        At AURA, we don’t offer generic advice — we deliver practical,
        execution-ready solutions that drive measurable business impact.
      </p>
    </div>

    {/* RIGHT – IMAGE */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/Images/ChooseUs.jpg"
        alt="Why Choose Aura"
        className="
          w-full max-w-md rounded-2xl shadow-2xl
          animate-scaleUp
          hover:scale-105 transition-transform duration-500
        "
      />
    </div>

  </div>
</section>

    
  );
};

export default ChooseUs;
