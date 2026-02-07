import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaRedditAlien } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];
const consultingLinks = [
  { name: "Management Consulting", path: "/management-consulting" },
  { name: "Operations Consulting", path: "/operations-consulting" },
  { name: "Financial Advisory", path: "/financial-advisory" },
  { name: "HR Consulting", path: "/hr-consulting" },
  { name: "Marketing Consulting", path: "/marketing-consulting" },
  { name: "Specialized Consulting", path: "/specialized-consulting" },
];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[1.3fr_1fr_0.9fr_1.3fr]
            gap-y-20
            gap-x-20
          "
        >

          {/* Brand */}
          <div className="space-y-8 mt-[-33px]">
            <img
              src="/Images/aura-logo1.png"
              alt="Aura Logo"
              className="w-40"
            />

            <p className="text-base leading-relaxed text-slate-400 max-w-sm mt-[-60px]">
              Elevating strategy. Transforming performance. Creating lasting value.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2 text-lg">
              <a href="https://www.facebook.com/profile.php?id=61582864538936" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://x.com/AuraBusiness" className="hover:text-white transition">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/aura_businessconsulting/" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/aura-business-consulting-94706b397/" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
                    <a href="https://www.youtube.com/@AurabusinessConsulting" className="hover:text-white transition">
                <FaYoutube />
              </a>
                                 <a href="https://www.reddit.com/user/AuraBusinessc/" className="hover:text-white transition">
                <FaRedditAlien />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">
              Services
            </h4>
          <ul className="space-y-5 text-base">
  {consultingLinks.map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="hover:text-white transition"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">
              Company
            </h4>
         <ul className="space-y-5 text-base">
  {navLinks.map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="hover:text-white transition"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

          </div>

          {/* Contact */}
          <div className="space-y-7">
            <h4 className="text-white text-lg font-semibold">
              Contact
            </h4>

            <div className="flex items-start gap-4 text-base leading-relaxed">
              <FaMapMarkerAlt className="mt-1 text-slate-400 text-4xl" />
              <p>
                Mahaveer Radiance, near Madhapur Metro Station,
                CBI Colony, Madhapur, Hyderabad, Telangana 500081
              </p>
            </div>

            <div className="flex items-center gap-4 text-base">
              <FaEnvelope className="text-slate-400 text-lg" />
              <a
                href="mailto:aurabusinessc@gmail.com"
                className="hover:text-white transition"
              >
                aurabusinessc@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 text-base">
              <FaPhoneAlt className="text-slate-400 text-lg" />
              <a
                href="tel:+917075782798"
                className="hover:text-white transition"
              >
                +91 70757 82798
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-10 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-slate-400 mb-[-95px]">
          <span>© 2026 Aura. All Rights Reserved.</span>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Privacy & Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
