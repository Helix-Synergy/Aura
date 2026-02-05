import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Target,
  ShieldCheck,
  BarChart3,
  Layers,
  TrendingUp,
} from "lucide-react";

/* =========================
   PREMIUM ANIMATION SYSTEM
========================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const premiumFade = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AboutUsPremiumVersion = () => {
  return (
    <div className="pt-28 pb-24 bg-white relative overflow-hidden">

      {/* ===== LUXURY BACKGROUND MOTION (ADDED) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[120px] opacity-30 animate-pulse" />
      </motion.div>

      {/* ================= HEADER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto px-6"
      >
        <motion.h1
          variants={premiumFade}
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          About AURA
        </motion.h1>
      </motion.div>

      {/* ================= WHO WE ARE ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto mt-24 px-6"
      >
        <motion.h2
          variants={premiumFade}
          className="text-3xl font-bold text-gray-900 text-center"
        >
          Who We Are
        </motion.h2>

        <motion.p variants={premiumFade} className="text-gray-700 leading-relaxed text-lg mb-4">
          AURA Business Consulting is a strategy-led management consulting firm delivering high-impact advisory services to organizations navigating transformation, growth, and complexity.
        </motion.p>

        <motion.p variants={premiumFade} className="text-gray-700 leading-relaxed text-lg mb-4">
          Our consultants bring together strategic rigor, operational expertise, and financial discipline to support decision-making at the highest levels of the organization.
        </motion.p>

        <motion.p variants={premiumFade} className="text-gray-700 leading-relaxed text-lg">
          We serve multinational corporations, high-growth enterprises, family-owned businesses, and emerging leaders, acting as a trusted partner throughout their transformation journey.
        </motion.p>
      </motion.div>

      {/* ================= PURPOSE / VALUES / PHILOSOPHY ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto px-6 mt-28 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {[ 
          { Icon: Target, title: "Our Purpose" },
          { Icon: ShieldCheck, title: "Our Values" },
          { Icon: Briefcase, title: "Our Consulting Philosophy" },
        ].map((_, i) => null)}

        {/* PURPOSE */}
        <motion.div
          variants={premiumFade}
          whileHover={{
            y: -14,
            scale: 1.04,
            boxShadow: "0px 30px 60px rgba(0,0,0,0.18)",
          }}
          className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl" />
          <Target size={42} className="mb-6 text-gray-900 relative z-10" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Our Purpose</h3>
          <p className="text-gray-600 leading-relaxed relative z-10">
            To help organizations make better decisions, build stronger capabilities, and achieve sustainable performance in an increasingly dynamic global environment.
          </p>
        </motion.div>

        {/* VALUES */}
        <motion.div
          variants={premiumFade}
          whileHover={{
            y: -14,
            scale: 1.04,
            boxShadow: "0px 30px 60px rgba(0,0,0,0.18)",
          }}
          className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl" />
          <ShieldCheck size={42} className="mb-6 text-gray-900 relative z-10" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Our Values</h3>
          <ul className="space-y-2 text-gray-600 relative z-10">
            <li>Integrity – Independent thinking and ethical advisory</li>
            <li>Excellence – Global standards, uncompromising quality</li>
            <li>Partnership – Collaboration built on trust</li>
            <li>Insight – Data-driven, forward-looking perspectives</li>
            <li>Impact – Measurable outcomes that endure</li>
          </ul>
        </motion.div>

        {/* PHILOSOPHY */}
        <motion.div
          variants={premiumFade}
          whileHover={{
            y: -14,
            scale: 1.04,
            boxShadow: "0px 30px 60px rgba(0,0,0,0.18)",
          }}
          className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl" />
          <Briefcase size={42} className="mb-6 text-gray-900 relative z-10" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Our Consulting Philosophy</h3>

          <p className="text-gray-600 mb-4 relative z-10">
            We believe the most effective consulting is:
          </p>

          <ul className="space-y-2 text-gray-600 mb-4 relative z-10">
            <li>Insight-led, not opinion-based</li>
            <li>Execution-focused, not theoretical</li>
            <li>Tailored, never generic</li>
          </ul>

          <p className="text-gray-600 relative z-10">
            Our work is grounded in rigorous analysis and delivered through practical, implementable solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= GLOBAL APPROACH ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        className="max-w-7xl mx-auto px-6 mt-32"
      >
        <motion.h2
          variants={premiumFade}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          OUR GLOBAL CONSULTING APPROACH
        </motion.h2>

        <motion.p
          variants={premiumFade}
          className="text-center text-gray-600 text-lg mb-20"
        >
          Insight → Strategy → Transformation → Performance
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { icon: BarChart3, title: "Insight & Diagnosis", desc: "Deep analysis, benchmarking, and stakeholder engagement" },
            { icon: Layers, title: "Strategic Design", desc: "Clear priorities, roadmaps, and value creation levers" },
            { icon: TrendingUp, title: "Transformation & Execution", desc: "Hands-on support to embed change and capabilities" },
            { icon: ShieldCheck, title: "Performance & Sustainability", desc: "Measurement, governance, and continuous improvement" },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={premiumFade}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg"
            >
              <step.icon size={38} className="mx-auto text-indigo-600 mb-5" />
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPremiumVersion;
