import React, { useState, useEffect, useRef } from 'react';
import '../css/mouse.css';

const ITParallaxEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate relative position (-1 to 1)
        const relativeX = (e.clientX - rect.left - centerX) / centerX;
        const relativeY = (e.clientY - rect.top - centerY) / centerY;
        
        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      setMousePosition({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Create transform for opposite movement
  const getParallaxTransform = (intensity) => {
    const moveX = -mousePosition.x * intensity;
    const moveY = -mousePosition.y * intensity;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <div ref={containerRef} className="it-parallax-container">
      
      {/* Background Tech Pattern */}
      <div className="tech-background">
        <div className="grid-pattern"></div>
        <div className="circuit-lines"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="tech-icons">
        <div 
          className="tech-icon code-icon"
          style={{ transform: getParallaxTransform(15) }}
        >
          <div className="icon-content">
            <div className="code-brackets">&lt;/&gt;</div>
          </div>
        </div>
        
        <div 
          className="tech-icon cloud-icon"
          style={{ transform: getParallaxTransform(20) }}
        >
          <div className="icon-content">
            <div className="cloud-shape">☁</div>
          </div>
        </div>
        
        <div 
          className="tech-icon database-icon"
          style={{ transform: getParallaxTransform(12) }}
        >
          <div className="icon-content">
            <div className="database-shape">⚡</div>
          </div>
        </div>
        
        <div 
          className="tech-icon mobile-icon"
          style={{ transform: getParallaxTransform(18) }}
        >
          <div className="icon-content">
            <div className="mobile-shape">📱</div>
          </div>
        </div>
        
        <div 
          className="tech-icon security-icon"
          style={{ transform: getParallaxTransform(22) }}
        >
          <div className="icon-content">
            <div className="security-shape">🔒</div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="service-cards">
        
        {/* Web Development Card */}
        <div 
          className="service-card web-dev-card"
          style={{ transform: getParallaxTransform(30) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="web-icon">🌐</div>
            </div>
            <h3>Web Development</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>React & Angular</li>
              <li>Node.js Backend</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* Mobile Apps Card */}
        <div 
          className="service-card mobile-dev-card"
          style={{ transform: getParallaxTransform(25) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="mobile-icon-card">📱</div>
            </div>
            <h3>Mobile Apps</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>iOS & Android</li>
              <li>React Native</li>
              <li>Flutter</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* Cloud Solutions Card */}
        <div 
          className="service-card cloud-card"
          style={{ transform: getParallaxTransform(35) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="cloud-icon-card">☁</div>
            </div>
            <h3>Cloud Solutions</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>AWS & Azure</li>
              <li>DevOps</li>
              <li>Scalable Architecture</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* AI/ML Card */}
        <div 
          className="service-card ai-card"
          style={{ transform: getParallaxTransform(28) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="ai-icon">🤖</div>
            </div>
            <h3>AI & Machine Learning</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>Data Analytics</li>
              <li>ML Models</li>
              <li>Automation</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* Cybersecurity Card */}
        <div 
          className="service-card security-card"
          style={{ transform: getParallaxTransform(32) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="security-icon-card">🛡</div>
            </div>
            <h3>Cybersecurity</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>Threat Assessment</li>
              <li>Security Audits</li>
              <li>Data Protection</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* Data Analytics Card */}
        <div 
          className="service-card data-card"
          style={{ transform: getParallaxTransform(26) }}
        >
          <div className="card-header">
            <div className="service-icon">
              <div className="data-icon">📊</div>
            </div>
            <h3>Data Analytics</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>Business Intelligence</li>
              <li>Data Visualization</li>
              <li>Predictive Analytics</li>
            </ul>
          </div>
          <div className="card-glow"></div>
        </div>
      </div>

      {/* Central Logo/Title */}
      <div className="central-content">
        <div 
          className="company-logo"
          style={{ transform: getParallaxTransform(5) }}
        >
          <div className="logo-icon">
            <div className="logo-shape">
              <div className="logo-inner"></div>
            </div>
          </div>
          <h1 className="company-name">Yuvocreations Private Limited</h1>
          <p className="company-tagline">Innovate, Integrate, Elevate</p>
        </div>
      </div>

      {/* Floating Binary Code */}
      <div className="binary-code">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`binary-string binary-${i + 1}`}
            style={{ transform: getParallaxTransform(8 + i * 2) }}
          >
            {Math.random() > 0.5 ? '1010110' : '0110101'}
          </div>
        ))}
      </div>

      {/* Tech Particles */}
      <div className="tech-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + (i * 4) % 60}%`,
              transform: getParallaxTransform(10 + (i % 5) * 3),
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Network Connections */}
      <div className="network-lines">
        <svg className="connection-svg" style={{ transform: getParallaxTransform(8) }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fd9800ff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#ffb01cff" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path 
            d="M100,100 Q300,200 500,150 T800,300" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="connection-path"
          />
          <path 
            d="M200,400 Q400,300 600,350 T900,200" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="connection-path"
          />
        </svg>
      </div>

    </div>
  );
};

export default ITParallaxEffect;