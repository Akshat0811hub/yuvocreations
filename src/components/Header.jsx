import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logobg.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // close menu if clicked outside (only for desktop)
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!navRef.current) return;
      if (window.innerWidth > 768 && !navRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  // lock body scroll when menu open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [menuOpen]);

  // close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = () => window.innerWidth <= 768;

  const services = [
    { name: 'Web Development', path: '/services/website' },
    { name: 'UI/UX Design', path: '/ui-ux' },
    { name: 'IT Consulting', path: '/it-consulting' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
  ];

  const toggleMenu = () => setMenuOpen((v) => !v);

  const toggleServices = () => {
    if (isMobile()) {
      setDropdownOpen((v) => !v);
    }
  };

  return (
    <div ref={navRef} className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="Home">
          <div className="logo-icon">
            <img src={logo} alt="Company Logo" />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Nav Links */}
        <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          {/* Services */}
          <li
            className="dropdown"
            onMouseEnter={() => !isMobile() && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile() && setDropdownOpen(false)}
          >
            <span
              className="dropdown-toggle"
              onClick={toggleServices}
              role="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services
              <svg
                className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`}
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>

            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {services.map((s, i) => (
                <li key={i}>
                  <Link to={s.path} onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>

          {/* Mobile Consultation Button */}
          <li className="mobile-btn">
            <button className="btn btn-signup" onClick={() => setMenuOpen(false)}>
              Consultation
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="nav-buttons desktop-only">
          <button className="btn btn-signup">Consultation</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;