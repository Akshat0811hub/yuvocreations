import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../css/beizer.css';

const PremiumBezierCurve = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(150); // Center Y position
  
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

  const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = progress => progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const currentPosition = startPosition + (distance * easeInOutCubic(progress));
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const calculateScrollTarget = (stretchY) => {
    const centerY = 150;
    const maxStretch = 100; // Maximum stretch distance
    const stretchDistance = stretchY - centerY;
    
    // Calculate stretch intensity (0 to 1)
    const intensity = Math.min(Math.abs(stretchDistance) / maxStretch, 1);
    
    // Get page dimensions
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight;
    
    let targetScroll;
    
    if (stretchDistance > 20) {
      // Stretched down -> scroll to top
      targetScroll = 0;
    } else if (stretchDistance < -20) {
      // Stretched up -> scroll to bottom
      targetScroll = maxScroll;
    } else {
      // Small stretch -> no scroll
      return null;
    }
    
    return targetScroll;
  };

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

    // Store the Y position for scroll calculation
    setInitialY(y);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = stringRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setInitialY(y);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Calculate scroll target based on rope stretch
    const scrollTarget = calculateScrollTarget(initialY);
    
    // Animate rope back to center
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)"
    });

    // Perform scroll if stretch was significant
    if (scrollTarget !== null) {
      setTimeout(() => {
        smoothScrollTo(scrollTarget, 1200);
      }, 300); // Delay to let rope animation start
    }
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
    
    // Only animate back if not dragging
    if (!isDragging) {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
      });
    }
  };

  // Add global mouse up listener for better UX
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging, initialY]);

  return (
    <div className="bezier-container">
      <p>{isDragging ? 'Release to scroll!' : 'Stretch the rope to scroll'}</p>
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
        {/* Main curve container */}
        <div 
          ref={stringRef}
          className="curve-container"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
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
      </div>
    </div>
  );
};

export default PremiumBezierCurve;