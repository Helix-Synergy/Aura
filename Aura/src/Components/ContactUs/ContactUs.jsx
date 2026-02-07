import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Base URL from Vite environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ContactUs = () => {
 
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    phone: "",
    industry:"",
    serviceofinterest: "",
    message: "",
  });

  // State to store all fetched forms
  const [submittedForms, setSubmittedForms] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/form/consultation`,
        formData
      );

      console.log("Form submitted:", response.data);
    toast.success("Thank you! Our team will contact you within 24–48 hours.");

      // Reset form
      setFormData({
        name: "",
        companyname: "",
        email: "",
        phone: "",
        industry:"",
        serviceofinterest: "",
        message: "",
      });

      // Optionally fetch updated forms
      fetchForms();
    } catch (error) {
      console.error("Error submitting form:", error);
      const message =
        error.response?.data?.message || "Something went wrong. Please try again later.";

toast.error(message);
    }
  };

  // Fetch all submitted consultation forms
  const fetchForms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/form/consultation`);
      setSubmittedForms(response.data.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  // Fetch forms when component mounts
  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 mt-12">
       <ToastContainer />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-32">📞 Contact Us</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Get in Touch with AURA Business Consulting
          </h3>
          <p className="text-gray-600 mb-6">
            Whether you’re looking to solve a specific challenge or plan long-term growth, our experts are here to help.
          </p>

          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">AURA Business Consulting</p>
            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <p>
                Mahaveer Radiance, metro station, near Madhapur, CBI Colony,
                Madhapur, Hyderabad, Telangana 500081
              </p>
            </div>
            <p>📞 Phone: +91-7075782798</p>
            <p>📧 Email: aurabusinessc@gmail.com</p>
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
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              required
              value={formData.companyname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
  <input
  type="text"
  name="industry"
  placeholder="Industry"
  required
  value={formData.industry}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>

            <select
              name="serviceofinterest"
              required
              value={formData.serviceofinterest}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Service of Interest</option>
              <option>Management & Strategy Consulting</option>
              <option>Operations Consulting</option>
              <option>Financial Advisory Consulting</option>
              <option>Human Resources (HR) Consulting</option>
              <option>Marketing & Sales Consulting</option>
              <option>Specialized Consulting Services</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Message / Business Challenge"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
            >
              Submit Request
            </button>
          </form>

          {/* Display previously submitted forms */}
          {submittedForms.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Submitted Forms</h4>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {submittedForms.map((form, index) => (
                  <div
                    key={form._id}
                    className="border p-3 rounded-lg bg-gray-50 shadow-sm"
                  >
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Company:</strong> {form.companyname}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Phone:</strong> {form.phone}</p>
                    <p><strong>Service:</strong> {form.serviceofinterest}</p>
                    <p><strong>Message:</strong> {form.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
