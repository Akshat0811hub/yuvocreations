import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../css/beizer.css';

gsap.registerPlugin(ScrollToPlugin);

const PremiumBezierCurve = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const glowRef = useRef(null);
  const lastInteractionPoint = useRef({ x: 0, y: 0 });
  const scrollTween = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  // --- CONFIGURATION ---
  const centerY = 160;
  const viewboxWidth = 1200;
  const viewboxHeight = 320;
  const startX = 50;
  const endX = viewboxWidth - 50;
  
  const initialPath = `M ${startX} ${centerY} Q ${viewboxWidth / 2} ${centerY} ${endX} ${centerY}`;

  // --- ANIMATIONS & SCROLLING ---

  useEffect(() => {
    // Initial animations... (no changes here)
  }, []);

  // --- CORRECTED and SIMPLIFIED Scroll Function ---
  const smoothScrollTo = useCallback((targetPosition, duration = 1000) => {
    if (scrollTween.current) {
      scrollTween.current.kill();
    }

    scrollTween.current = gsap.to(window, {
      scrollTo: {
        y: targetPosition,
        autoKill: true
      },
      duration: duration / 1000,
      ease: "power2.out",
    });
  }, []);
  
  const calculateScrollProps = useCallback((stretchY) => {
    const maxStretch = 250;
    const scrollThreshold = 20;
    const stretchDistance = stretchY - centerY;

    if (Math.abs(stretchDistance) < scrollThreshold) {
      return { target: null, duration: 0 };
    }
    
    const intensity = Math.min(Math.abs(stretchDistance) / maxStretch, 1);
    
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;
    
    let scrollAmount;
    if (stretchDistance > 0) { // Pulling down, scroll up
      scrollAmount = -(currentScroll * intensity * 1.5);
    } else { // Pulling up, scroll down
      scrollAmount = (maxScroll - currentScroll) * intensity * 1.5;
    }

    const targetScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollAmount));
    const scrollDuration = 1800 - (1000 * intensity);

    return { target: targetScroll, duration: scrollDuration };
  }, [centerY]);

  // --- EVENT HANDLERS ---

  const getSVGCoordinates = useCallback((e) => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return { x: 0, y: 0 };

    const point = svg.createSVGPoint();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    point.x = clientX;
    point.y = clientY;

    const transformedPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    return { x: transformedPoint.x, y: transformedPoint.y };
  }, []);

  const handleInteractionStart = useCallback((e) => {
    setIsDragging(true);
    const { y } = getSVGCoordinates(e);
    lastInteractionPoint.current.y = y;
    gsap.to(glowRef.current, { opacity: 1, duration: 0.1 });
  }, [getSVGCoordinates]);

  const handleInteractionMove = useCallback((e) => {
    if (!isDragging) return;
    
    e.preventDefault(); 
    
    const { x, y } = getSVGCoordinates(e);
    lastInteractionPoint.current = { x, y };
    
    const newPath = `M ${startX} ${centerY} Q ${x} ${y} ${endX} ${centerY}`;
    
    gsap.to(glowRef.current, {
        x: x - (viewboxWidth / 2),
        y: y - centerY,
        duration: 0.2,
        ease: "power2.out"
    });

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out"
    });
  }, [isDragging, getSVGCoordinates, centerY, startX, endX]);
  
  const handleInteractionEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const { target, duration } = calculateScrollProps(lastInteractionPoint.current.y);

    gsap.to(pathRef.current, {
      attr: { d: initialPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)"
    });
    
     gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });

    if (target !== null) {
      setTimeout(() => {
        smoothScrollTo(target, duration);
      }, 150);
    }
  }, [isDragging, calculateScrollProps, initialPath, smoothScrollTo]);

  const handleMouseEnter = useCallback((e) => {
      if (isDragging) return;
      const { x, y } = getSVGCoordinates(e);
      gsap.to(glowRef.current, {
        x: x - (viewboxWidth / 2),
        y: y - centerY,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
  }, [isDragging, getSVGCoordinates, centerY]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
        gsap.to(glowRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener('mouseup', handleInteractionEnd);
    window.addEventListener('touchend', handleInteractionEnd);
    window.addEventListener('mousemove', handleInteractionMove);
    window.addEventListener('touchmove', handleInteractionMove, { passive: false });

    return () => {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('touchmove', handleInteractionMove);
    };
  }, [handleInteractionEnd, handleInteractionMove]);

  return (
    <div className="bezier-container">
      <p className="instructions">{isDragging ? 'Release to scroll!' : 'Pull the rope to navigate'}</p>
      <div className="bg-glow" />
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle orange-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }} />
        ))}
      </div>
      
      <div className="main-content">
        <div
          ref={containerRef}
          className="curve-container"
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
        >
          <div className="shimmer" />
          
          <div ref={glowRef} className="cursor-glow orange-glow" />
          
        <svg
    viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
    className="curve-svg"
    style={{
        width: '140%', 
        height: 'auto', 
        overflow: 'visible',
        position: 'absolute',       // ✅ Add: Position it relative to the container
        left: '50%',                // ✅ Add: Move its left edge to the center
        transform: 'translateX(-50%)' // ✅ Add: Pull it back by half its own width
    }}
    preserveAspectRatio="none"
>
            <defs>
              <linearGradient id="premium-gradient" gradientUnits="userSpaceOnUse" x1={startX} y1={centerY} x2={endX} y2={centerY}>
                 <stop offset="0%" stopColor="#fbbf24"><animate attributeName="stopColor" values="#fbbf24;#f97316;#f59e0b;#fbbf24" dur="4s" repeatCount="indefinite" /></stop>
                 <stop offset="50%" stopColor="#f97316"><animate attributeName="stopColor" values="#f97316;#f59e0b;#fbbf24;#f97316" dur="4s" repeatCount="indefinite" /></stop>
                 <stop offset="100%" stopColor="#f59e0b"><animate attributeName="stopColor" values="#f59e0b;#fbbf24;#f97316;#f59e0b" dur="4s" repeatCount="indefinite" /></stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <path
              ref={pathRef}
              d={initialPath}
              stroke="url(#premium-gradient)"
              strokeWidth="6"
              fill="transparent"
              filter="url(#glow)"
              strokeLinecap="round"
            />
            
            <circle cx={startX} cy={centerY} r="6" className="control-point" />
            <circle cx={endX} cy={centerY} r="6" className="control-point" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PremiumBezierCurve;