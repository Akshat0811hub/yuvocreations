import React from 'react';
import { Link } from "react-router-dom";
import '../css/Header.css';
import logoImage from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <Link to="/">
              <img src={logoImage} alt="Logo" />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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
