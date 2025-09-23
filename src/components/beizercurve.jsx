import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../css/beizer.css';

const PremiumBezierCurve = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const initialPath = "M 50 150 Q 600 150 1150 150";
  const finalPath = "M 50 150 Q 600 150 1150 150";

  useEffect(() => {
    // Initial animations
    gsap.fromTo('.header-content', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.fromTo('.curve-container', {
      opacity: 0,
      scale: 0.95
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    gsap.fromTo('.instructions', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!stringRef.current || !pathRef.current) return;
    
    const rect = stringRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newPath = `M 50 150 Q ${x} ${y} 1150 150`;
    
    // Update glow position
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x,
        y: y,
        duration: 0.2,
        ease: "power2.out"
      });
    }
    
    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out"
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)"
    });
  };

  return (
    <div className="bezier-container">
      <p>Do not Hover</p>
      {/* Background glow effect */}
      <div className="bg-glow" />
      
      {/* Animated background particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="main-content">
        {/* Header */}
        

        {/* Main curve container */}
        <div 
          ref={stringRef}
          className="curve-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Shimmer effect */}
          <div className="shimmer" />
          
          {/* Glow effect that follows cursor */}
          <div 
            ref={glowRef}
            className="cursor-glow"
          />
          
          {/* SVG Container */}
          <svg 
            width="1200" 
            height="320" 
            className="curve-svg"
          >
            <defs>
              <linearGradient id="premium-gradient" gradientUnits="userSpaceOnUse" x1="50" y1="150" x2="1150" y2="150">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#14b8a6;#ef4444;#06b6d4;#eab308;#14b8a6" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="#ef4444" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#ef4444;#06b6d4;#eab308;#14b8a6;#ef4444" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#06b6d4;#eab308;#14b8a6;#ef4444;#06b6d4" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="#eab308" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#eab308;#14b8a6;#ef4444;#06b6d4;#eab308" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#14b8a6;#ef4444;#06b6d4;#eab308;#14b8a6" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main curve */}
            <path 
              ref={pathRef}
              d={initialPath}
              stroke="url(#premium-gradient)" 
              strokeWidth="6" 
              fill="transparent"
              filter="url(#glow)"
              strokeLinecap="round"
            />
            
            {/* Control points */}
            <circle cx="50" cy="150" r="6" className="control-point" />
            <circle cx="1150" cy="150" r="6" className="control-point" />
          </svg>
        </div>

        {/* Instructions */}
        
      </div>
    </div>
  );
};

export default PremiumBezierCurve;