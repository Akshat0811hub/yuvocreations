import React from 'react';
import '../css/Header.css';
import logoImage from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Consultation Button */}
        <div className="button-section">
          <button className="consultation-btn">Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Header;