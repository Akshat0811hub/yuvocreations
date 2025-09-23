import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Header.css';
import logoImage from '../assets/logo.png'; 

const Header = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const servicesItems = [
    { name: 'Web Designing', path: '/services/web-designing' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { name: 'Content Writing', path: '/services/content-writing' },
    { name: 'Graphic Designing', path: '/services/graphic-designing' },
    { name: 'Mobile App Development', path: '/services/app-development' },
    { name: 'E-commerce Solutions', path: '/services/ecommerce' }
  ];

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
            
            {/* Services with Dropdown */}
            <li 
              className="dropdown-item"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link to="/services" className="dropdown-trigger">
                Services
                <span className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}>
                  ▼
                </span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`dropdown-menu ${isServicesDropdownOpen ? 'active' : ''}`}>
                {servicesItems.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path} 
                    className="dropdown-link"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </li>
            
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