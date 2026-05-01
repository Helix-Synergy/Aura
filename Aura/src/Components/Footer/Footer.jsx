import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaRedditAlien } from "react-icons/fa6";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const handleVisitorCount = async () => {
      if (!API_BASE_URL) {
        console.error("VITE_API_BASE_URL is not defined in .env");
        setVisitorCount(0);
        return;
      }

      try {
        console.log("Fetching visitor count from:", API_BASE_URL);
        
        // Parallelize or sequence correctly to ensure /add is called
        // Often /add is a POST, sometimes it's a GET.
        try {
          // Try adding a visitor first
          await axios.post(`${API_BASE_URL}/add`, {}, { timeout: 5000 }).catch(async () => {
             // Fallback to GET if POST fails
             return await axios.get("https://aura-backend-2-f24a.onrender.com/visitor/add", { timeout: 5000 }).catch(() => null);
          });
        } catch (addError) {
          console.warn("Visitor registration (/add) failed, attempting to fetch count anyway.");
        }

        // Fetch current total count
        const response = await axios.get("https://aura-backend-2-f24a.onrender.com/visitor/count", { timeout: 10000 });
        const data = response.data;
        console.log("Visitor API Response:", data);

        // Robust parsing of the response data
        let countValue = 0;
        if (typeof data === "number") {
          countValue = data;
        } else if (typeof data === "string" && !isNaN(data)) {
          countValue = parseInt(data, 10);
        } else if (data && typeof data === "object") {
          countValue =
            data.count ??
            data.totalVisitors ??
            data.totalCount ??
            data.total ??
            data.visitors ??
            data.data?.count ??
            data.data?.totalVisitors ??
            data.data?.totalCount ??
            0;
        }

        setVisitorCount(Number(countValue));
      } catch (error) {
        console.error("Error handling visitor API:", error);
        // Fallback to 0 to stop the loading state if the API is down
        setVisitorCount(0);
      }
    };

    handleVisitorCount();
  }, []);

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
            <img src="/Images/aura-logo1.png" alt="Aura Logo" className="w-40" />

            <p className="text-base leading-relaxed text-slate-400 max-w-sm mt-[-60px]">
              Elevating strategy Transforming performance Creating lasting value
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2 text-lg">
              <a
                href="https://www.facebook.com/profile.php?id=61582864538936"
                className="hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/AuraBusiness"
                className="hover:text-white transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/aura_businessconsulting/"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/aura-business-consulting-94706b397/"
                className="hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@AurabusinessConsulting"
                className="hover:text-white transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.reddit.com/user/AuraBusinessc/"
                className="hover:text-white transition"
              >
                <FaRedditAlien />
              </a>
            </div>

            {/* Total Visitors Section */}
            <div className="pt-4">
              <div className="inline-flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <FaUsers className="text-blue-400" />
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Total Visitors
                  </span>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg leading-none">
                    {visitorCount !== null ? (
                      <span className="text-2xl font-bold text-white tracking-widest tabular-nums">
                        {visitorCount.toLocaleString()}
                      </span>
                    ) : (
                      <div className="h-6 w-16 bg-slate-800 animate-pulse rounded"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">Services</h4>
            <ul className="space-y-5 text-base">
              {consultingLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-8">Company</h4>
            <ul className="space-y-5 text-base">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-7">
            <h4 className="text-white text-lg font-semibold">Contact</h4>

            <div className="flex items-start gap-4 text-base leading-relaxed">
              <FaMapMarkerAlt className="mt-1 text-slate-400 text-4xl" />
              <p>
                Mahaveer Radiance Near Madhapur metro station, CBI Colony,
                Hyderabad, Telangana 500081
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
                +91 7075-782-798
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-10 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-slate-400 mb-[-95px]">
          <span>© 2026 Aura. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
