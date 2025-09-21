import React, { useState, useEffect, useRef } from 'react';
import photo1 from '../assets/laptopphoto.jpg';  
import photo2 from '../assets/move1.jpg';  
import photo3 from '../assets/move2.jpg';  
import photo4 from '../assets/move3.jpg'; 
import '../css/MouseEffect.css'  

const ParallaxMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        
        const relativeX = (e.clientX - rect.left - centerX) / centerX;
        const relativeY = (e.clientY - rect.top - centerY) / centerY;
        
        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  
  const getTransform = (depth, rotation = 0) => {
    const moveX = -mousePosition.x * depth;
    const moveY = -mousePosition.y * depth;
    return `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`;
  };

  return (
    <div ref={containerRef} className="parallax-container">
      {/* Background floating elements */}
      <div className="background-elements">
        <div 
          className="floating-element bg-blue"
          style={{ 
            top: '2.5rem', 
            left: '2.5rem', 
            width: '5rem', 
            height: '5rem',
            transform: getTransform(5) 
          }}
        />
        <div 
          className="floating-element bg-purple"
          style={{ 
            top: '8rem', 
            right: '5rem', 
            width: '4rem', 
            height: '4rem',
            transform: getTransform(8) 
          }}
        />
        <div 
          className="floating-element bg-indigo"
          style={{ 
            bottom: '5rem', 
            left: '8rem', 
            width: '6rem', 
            height: '6rem',
            transform: getTransform(6) 
          }}
        />
      </div>

      
      <div className="main-content">

        <div 
          className="floating-card left-card"
          style={{ transform: getTransform(20, -8) }}
        >
          <img src={photo2} alt="IT Solution" />
        </div>

        {/* Left bottom card */}
        <div 
          className="floating-card left-bottom-card"
          style={{ transform: getTransform(18, 6) }}
        >
          <img src={photo4} alt="Technology Service" />
        </div>

        {/* Center card - Main monitor (stable) */}
        <div className="center-monitor">
          <div className="monitor-screen">
            <img src={photo1} alt="Main Display" />
            <div className="monitor-dots">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="monitor-dot"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right top card */}
        <div 
          className="floating-card right-top-card"
          style={{ transform: getTransform(25, 5) }}
        >
          <img src={photo3} alt="Business Solution" />
        </div>

        {/* Right bottom card */}
        <div 
          className="floating-card right-bottom-card"
          style={{ transform: getTransform(30, -3) }}
        >
          <img src={photo2} alt="Digital Services" />
        </div>
      </div>

      {/* Main title */}
      <div className="main-title">
        <h1 className="title-text">
          YuvoCreations & Services
        </h1>
      </div>

      {/* Decorative elements */}
      <div 
        className="decorative-elements decorative-circle dec-blue"
        style={{ 
          top: '25%', 
          right: '2.5rem', 
          width: '2rem', 
          height: '2rem',
          transform: getTransform(15)}}/>
      <div 
        className="decorative-elements decorative-circle dec-purple"
        style={{ 
          top: '75%', 
          left: '2.5rem', 
          width: '1.5rem', 
          height: '1.5rem',
          transform: getTransform(12) 
        }}
      />
      <div 
        className="decorative-elements decorative-square dec-indigo"
        style={{ 
          top: '50%', 
          right: '25%', 
          width: '2.5rem', 
          height: '2.5rem',
          transform: getTransform(10) 
        }}
      />
    </div>
  );
};

export default ParallaxMouseEffect;