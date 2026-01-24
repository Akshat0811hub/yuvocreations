import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';
import logoImage from '../assets/logobg.png';
import '../css/banner.css';

const Banner = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Parallax effect logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only apply parallax on larger screens for better performance
      if (window.innerWidth > 1024) {
        setOffset({
          x: (e.clientX / window.innerWidth - 0.5) * 25,
          y: (e.clientY / window.innerHeight - 0.5) * 25,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="banner-main">
      {/* 1. TOP VIGNETTE FADES */}
      <div className="fade-overlay fade-top" />
      <div className="fade-overlay fade-bottom" />

      {/* 2. TOP NAVIGATION BRAND PILL */}
      <div className="brand-pill top-nav">
        <img src={logoImage} alt="YuvoCreations Logo" className="brand-logo" />
        <span className="brand-text">Yuvocreations</span>
      </div>

      {/* 3. ANIMATED & PARALLAX DUST LAYER */}
      <div className="dust-wrap">
        <div 
          className="dust dust-1" 
          style={{ transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)` }} 
        />
        <div 
          className="dust dust-2" 
          style={{ transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)` }} 
        />
        <div 
          className="dust dust-3" 
          style={{ transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)` }} 
        />
      </div>

      {/* 4. CLICKABLE SOCIAL TILES */}
      <div className="icons-container">
        <a href="https://www.facebook.com/profile.php?id=61565786861921" target="_blank" rel="noopener noreferrer" className="icon-tile fb-pos">
          <Facebook size={18} fill="#1877F2" color="#1877F2" />
        </a>
        <a href="https://www.instagram.com/yuvocreations" target="_blank" rel="noopener noreferrer" className="icon-tile ig-pos">
          <Instagram size={18} color="#E4405F" />
        </a>
        <a href="https://www.linkedin.com/company/yuvocreations" target="_blank" rel="noopener noreferrer" className="icon-tile li-pos">
          <Linkedin size={18} fill="#0077B5" color="#0077B5" />
        </a>
        <a href="https://x.com/yuvocreations" target="_blank" rel="noopener noreferrer" className="icon-tile x-pos">
          <X size={16} color="#000" />
        </a>
        <a href="https://www.youtube.com/@yuvocreations" target="_blank" rel="noopener noreferrer" className="icon-tile yt-pos">
          <Youtube size={18} fill="#FF0000" color="#ffffff" />
        </a>
      </div>

      {/* 5. CENTERED CONTENT BOX */}
      <div className="content-box">
        <div className="title-group">
          <h2 className="top-title">We Support</h2>
          
          <h1 className="main-title">
            G r
            <span className="growth-wrap">
              <div 
                className={`logo-toggle ${isToggled ? 'active' : ''}`} 
                onClick={() => setIsToggled(!isToggled)}
              >
                <div className="knob" />
              </div>
            </span>
            w t h
          </h1>

          <h2 className="bottom-title">of your Business</h2>
        </div>

        <p className="description">
          From SEO to social storytelling, we help your brand build a strong and
          consistent digital presence where customers search, scroll, engage,
          and ultimately convert.
        </p>

        {/* 6. FUNCTIONAL CALENDLY BUTTON */}
        <a 
          href="https://calendly.com/socialmedia-yuvocreations/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
};

export default Banner;