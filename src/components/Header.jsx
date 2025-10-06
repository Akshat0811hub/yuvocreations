import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.png';




const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrolled(currentScroll > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', path: '/services/website' },
    // { name: 'Mobile App Development', path: '/mobile-apps' },
    // { name: 'Cloud Solutions', path: '/cloud-services' },
    // { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'UI/UX Design', path: '/ui-ux' },
    { name: 'IT Consulting', path: '/it-consulting' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
    // { name: 'AI & Machine Learning', path: '/ai-ml' },
    // { name: 'Data Analytics', path: '/data-analytics' },
    // { name: 'DevOps Solutions', path: '/devops' },
  ];

  return (
    <>
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={logo} alt="Company Logo" />
            </div>
          </Link>
          
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>

            {/* Dropdown for Services */}
            <li 
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="dropdown-toggle">
                Services 
                <svg 
                  className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/career">Career</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
          
          <div className="nav-buttons">
            <button className="btn btn-signup">Consultation</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
