import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Decide logo based on scroll & route
  const logoSrc =
    scroll || !isHomePage
      ? "/Images/logo.webp"
      : "/Images/image.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scroll || !isHomePage ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div>
        <Link to="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="Aura Business Consulting Logo"
            className="h-32 w-32 object-contain transition-all duration-300 ml-24"
          />
        </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-8 font-medium
          ${scroll || !isHomePage ? "text-gray-800" : "text-white"}
          `}
        >
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/aboutus" className="hover:text-blue-500 transition">About Us</Link>
          <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
          <Link to="/industries" className="hover:text-blue-500 transition">Industries</Link>
          <Link to="/testimonials" className="hover:text-blue-500 transition">Testimonials</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`${scroll || !isHomePage ? "text-gray-900" : "text-white"}`}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-blue-500">Home</Link>
          <Link to="/aboutus" onClick={() => setOpen(false)} className="block hover:text-blue-500">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block hover:text-blue-500">Services</Link>
          <Link to="/industries" onClick={() => setOpen(false)} className="block hover:text-blue-500">Industries</Link>
          <Link to="/casestudies" onClick={() => setOpen(false)} className="block hover:text-blue-500">Case Studies</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
