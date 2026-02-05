/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  animation: {
    fadeIn: "fadeIn 1.2s ease-out forwards",
    slideUp: "slideUp 1s ease-out forwards",
    scaleUp: "scaleUp 0.8s ease-out forwards",
    pulseGlow: "pulseGlow 2s ease-in-out infinite",
    bounceIn: "bounceIn 0.8s ease-out forwards",

    fadeUpSoft: "fadeUpSoft 0.9s ease-out forwards",
    slideLeftSoft: "slideLeftSoft 0.9s ease-out forwards",
    slideRightSoft: "slideRightSoft 0.9s ease-out forwards",
    lineGrow: "lineGrow 0.6s ease-out forwards",
    dotPulse: "dotPulse 1.5s ease-in-out infinite",
    textReveal: "textReveal 0.8s ease-out forwards",

    /* NEW */
    ctaReveal: "ctaReveal 1.1s ease-out forwards",
    ctaGlow: "ctaGlow 6s ease-in-out infinite",
    buttonRise: "buttonRise 0.9s ease-out forwards",
    stepReveal: "stepReveal 0.8s ease-out forwards",
    lineGrowFull: "lineGrowFull 1.4s ease-out forwards",
  },

  keyframes: {
    fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
    slideUp: {
      "0%": { opacity: "0", transform: "translateY(40px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    scaleUp: {
      "0%": { transform: "scale(0.8)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" },
    },
    pulseGlow: {
      "0%,100%": { boxShadow: "0 0 0px rgba(59,130,246,0.4)" },
      "50%": { boxShadow: "0 0 18px rgba(59,130,246,0.7)" },
    },
    bounceIn: {
      "0%": { opacity: "0", transform: "scale(0.3)" },
      "50%": { opacity: "1", transform: "scale(1.05)" },
      "70%": { transform: "scale(0.9)" },
      "100%": { transform: "scale(1)" },
    },

    fadeUpSoft: {
      "0%": { opacity: "0", transform: "translateY(20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    slideLeftSoft: {
      "0%": { opacity: "0", transform: "translateX(30px)" },
      "100%": { opacity: "1", transform: "translateX(0)" },
    },
    slideRightSoft: {
      "0%": { opacity: "0", transform: "translateX(-30px)" },
      "100%": { opacity: "1", transform: "translateX(0)" },
    },
    lineGrow: {
      "0%": { width: "0" },
      "100%": { width: "6rem" },
    },
    dotPulse: {
      "0%,100%": { transform: "scale(1)", opacity: "0.8" },
      "50%": { transform: "scale(1.4)", opacity: "1" },
    },
    textReveal: {
      "0%": { opacity: "0", letterSpacing: "0.1em" },
      "100%": { opacity: "1", letterSpacing: "0em" },
    },

    /* NEW */
    ctaReveal: {
      "0%": { opacity: "0", transform: "scale(0.96)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
    ctaGlow: {
      "0%,100%": { opacity: "0.25" },
      "50%": { opacity: "0.6" },
    },
    buttonRise: {
      "0%": { opacity: "0", transform: "translateY(18px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    stepReveal: {
      "0%": { opacity: "0", transform: "translateX(-24px)" },
      "100%": { opacity: "1", transform: "translateX(0)" },
    },
    lineGrowFull: {
      "0%": { width: "0%" },
      "100%": { width: "100%" },
    },
  },
},

  },
  plugins: [],
};
