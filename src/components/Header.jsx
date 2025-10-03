import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <a href="#" className="logo">
            <div className="logo-icon">
              <img src={logo} alt="" />
            </div>
          </a>
          
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          
          <div className="nav-buttons">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;