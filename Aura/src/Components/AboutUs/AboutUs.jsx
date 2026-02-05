import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const HandlePremium = () => {
    navigate("/aboutpremiumversion");
  };
  return (
    <div className="pt-24 bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-black text-gray-900">
          AURA Business Consulting
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mt-6">
          Who We Are
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed text-lg">
          AURA Business Consulting is a results-driven consulting firm dedicated
          to helping organizations navigate complexity, unlock growth, and
          achieve operational excellence. We partner with businesses across
          industries to deliver strategic insight, practical solutions, and
          measurable impact.
          <br />
          <br />
          At AURA, we believe consulting is not just about advice—it’s about
          creating lasting value.
        </p>
      </motion.div>

      {/* ================= MISSION / VISION / VALUES ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission + Vision Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            To empower organizations with innovative strategies, operational
            excellence, and people-centric solutions that drive sustainable
            success.
          </p>

          <h3 className="text-xl font-bold mb-2 text-gray-900">Our Vision</h3>
          <p className="text-gray-700">
            To be a trusted global consulting partner recognized for integrity,
            insight, and transformational impact.
          </p>
        </motion.div>

        {/* Values Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900">Our Values</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Integrity – Honest advice and transparent partnerships</li>
            <li>✔ Excellence – High standards in everything we deliver</li>
            <li>✔ Collaboration – Working as an extension of your team</li>
            <li>✔ Innovation – Forward-thinking, data-driven solutions</li>
            <li>✔ Impact – Focused on real, measurable results</li>
          </ul>
        </motion.div>
      </div>

      {/* ================= WHAT SETS US APART ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mt-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Sets Us Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Client-centric, customized solutions",
            "Deep industry and functional expertise",
            "Strategy combined with execution support",
            "Data-driven insights and proven frameworks",
            "Commitment to long-term partnerships",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-lg shadow-md font-medium text-gray-800"
            >
              ✔ {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= APPROACH ================= */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
        <p className="text-lg font-semibold text-blue-600">
          Understand → Analyze → Design → Execute → Sustain
        </p>
        <p className="text-gray-700 mt-4">
          We immerse ourselves in your business to design solutions that are
          practical, scalable, and aligned with your goals.
        </p>
      </motion.div>

      {/* ================= TEAM ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mt-20 mb-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-gray-700">
          Our consultants bring together expertise in strategy, operations,
          finance, HR, and marketing, with experience across diverse industries
          and global markets.
        </p>

        <p className="mt-6 font-semibold text-gray-900">
          Partner with AURA Business Consulting—and transform ambition into
          achievement.
        </p>
      </motion.div>

      {/* <div className="flex flex-col items-center gap-6 mt-10">
  
  {/* Caption */}
      {/* <h4 className="text-gray-800 text-center font-semibold text-lg italic">
    “Where Strategy Meets Execution.”
  </h4> */}

      {/* Premium Button */}
      {/* <motion.button
    onClick={HandlePremium}
    whileHover={{
      scale: 1.06,
      boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
    }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 250 }}
    className="px-8 py-3 rounded-full bg-gradient-to-r from-gray-900 to-black
               text-white font-semibold tracking-wide
               border border-gray-700"
  >
    ABOUT US · PREMIUM
  </motion.button> */}

      {/* </div> */}
    </div>
  );
};

export default AboutUs;
