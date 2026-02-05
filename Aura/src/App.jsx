import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services.jsx";
import Industries from "./Components/Industries/Industries.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import AboutUsPremiumVersion from "./Components/AboutUs/AboutUsPremiumVersion.jsx";
import Footer from "./Components/Footer/Footer.jsx";
const App = () => {
  return (
    <div>
      {/* Defining the Navbar */}
      {/* <div className="h-[200vh] bg-gray-100"> */}
        <Navbar />
      {/* </div> */}
    <ScrollToTop/>
      {/* Routes */}
            {/* <div className="pt-1"> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/services"element={<Services />}></Route>
        <Route path="/industries" element={<Industries />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/aboutpremiumversion" element={<AboutUsPremiumVersion/>}></Route>
        {/* routes for the services */}
         <Route path="/management-consulting" element={<Services />}></Route>
        <Route path="/operations-consulting" element={<Services />}></Route>
        <Route path="/financial-advisory"element={<Services />}></Route>
        <Route path="/hr-consulting" element={<Services />}></Route>
        <Route path="/marketing-consulting" element={<Services />}></Route>
        <Route path="/contact" element={<Services />}></Route>
        <Route path="/specialized-consulting" element={<Services />}></Route>
      </Routes>
      {/* </div> */}
      <Footer/>
    </div>
  );
};

export default App;
