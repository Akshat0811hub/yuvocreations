import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Uiux from "./services/Uiux";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Website from "./services/Website";
import DigitalMarketingPage from "./services/Digital";
import Footer from "./components/Footer";
import Mouse from "./components/mouse";
import ScrollToTop from "./components/ScrollToTop";   // <-- ADD THIS

function App() {
  return (
    <Router>
      <ScrollToTop />     {/* <-- FIX: Auto scroll to top on every route change */}
      <Header />
      <Mouse />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/website" element={<Website />} />
        <Route path="/services/digital" element={<DigitalMarketingPage />} />
        <Route path="/services/uiux" element={<Uiux />} />
        <Route path="/services/ui-ux" element={<Uiux />} />
        <Route path="/About" element={<About />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
