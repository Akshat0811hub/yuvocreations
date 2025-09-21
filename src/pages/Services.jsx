import React from "react";
import '../pagescss/Services.css';

const Services = () => {
  return (
    <div className="service-hero">
      <h1>Our Services</h1>
      <div className="service-main-box">
        <div className="service-box">
          <i className="fa-solid fa-code" style={{ color: "#e69500" }}></i>
          <h2>Web Development & Support</h2>
        </div>
        <div className="service-box">
          <i className="fa-solid fa-mobile-screen-button" style={{ color: "#0077cc" }}></i>
          <h2>App Development</h2>
        </div>
        <div className="service-box">
          <i className="fa-solid fa-magnifying-glass" style={{ color: "#28a745" }}></i>
          <h2>SEO Optimization</h2>
        </div>
        <div className="service-box">
          <i className="fa-solid fa-bullhorn" style={{ color: "#ff5722" }}></i>
          <h2>Digital Marketing</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
