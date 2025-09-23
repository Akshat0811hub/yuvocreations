import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PremiumBezierCurve = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);   // FIXED
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
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 flex flex-col justify-center items-center overflow-hidden relative font-sans">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* Header */}
        <div className="header-content text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
            Interactive Bezier Curve
          </h1>
          <p className="text-white/60 text-lg font-light tracking-wide">
            Move your cursor to bend the curve and watch the magic happen
          </p>
        </div>

        {/* Main curve container */}
        <div 
          ref={stringRef}
          className="curve-container relative h-80 w-full cursor-crosshair rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" 
               style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
          
          {/* Glow effect that follows cursor */}
          <div 
            ref={glowRef}
            className="absolute w-48 h-48 rounded-full bg-gradient-radial from-teal-400/20 to-transparent pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          />
          
          {/* SVG Container */}
          <svg 
            width="1200" 
            height="320" 
            className="w-full h-full filter drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 20px rgba(64, 224, 208, 0.3))' }}
          >
            <defs>
              <linearGradient id="premium-gradient" gradientUnits="userSpaceOnUse" x1="50" y1="150" x2="1150" y2="150">
                <stop offset="0%" stopColor="#40e0d0" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#40e0d0;#ff6b6b;#4ecdc4;#ffe66d;#40e0d0" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="25%" stopColor="#ff6b6b" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#ff6b6b;#4ecdc4;#ffe66d;#40e0d0;#ff6b6b" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#4ecdc4" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#4ecdc4;#ffe66d;#40e0d0;#ff6b6b;#4ecdc4" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="75%" stopColor="#ffe66d" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#ffe66d;#40e0d0;#ff6b6b;#4ecdc4;#ffe66d" 
                           dur="6s" 
                           repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#40e0d0" stopOpacity="0.9">
                  <animate attributeName="stopColor" 
                           values="#40e0d0;#ff6b6b;#4ecdc4;#ffe66d;#40e0d0" 
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
            <circle cx="50" cy="150" r="6" fill="rgba(64, 224, 208, 0.8)" className="animate-pulse" />
            <circle cx="1150" cy="150" r="6" fill="rgba(64, 224, 208, 0.8)" className="animate-pulse" />
          </svg>
        </div>

        {/* Instructions */}
        <div className="instructions text-center mt-12">
          <p className="text-white/50 text-sm font-light tracking-wider">
            Hover over the curve and move your mouse to create beautiful interactions
          </p>
          <div className="flex justify-center items-center gap-8 mt-6 text-white/40 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-400/60 animate-pulse" />
              <span>Interactive Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400/60 animate-pulse" />
              <span>Elastic Animation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-400/60 animate-pulse" />
              <span>Premium Effects</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default PremiumBezierCurve;