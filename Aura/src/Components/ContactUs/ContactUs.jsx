import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Our team will contact you within 24–48 hours.");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-32">
            📞 Contact Us
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Get in Touch with AURA Business Consulting
          </h3>
          <p className="text-gray-600 mb-6">
            Whether you’re looking to solve a specific challenge or plan
            long-term growth, our experts are here to help.
          </p>

          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">AURA Business Consulting</p>
  <div className="flex items-start gap-3">
    <span className="text-lg ">📍</span>
    <p>Mahaveer Radiance, metro station, near Madhapur, CBI Colony,
      Madhapur, Hyderabad, Telangana 500081
    </p>
  </div>
            <p>📞 Phone: +91-7075782798</p>
            <p>📧 Email:aurabusinessc@gmail.com</p>
            <p>🌐 Website: www.aurabusinessconsulting.com</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Request a Consultation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="industry"
              placeholder="Industry"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Service of Interest</option>
              <option>Management & Strategy Consulting</option>
              <option>Operations Consulting</option>
              <option>Financial Advisory Consulting</option>
              <option>HR Consulting</option>
              <option>Marketing & Sales Consulting</option>
              <option>Specialized Consulting</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Message / Business Challenge"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
