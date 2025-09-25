import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CSS Styles */}
      <style jsx>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0f0a 20%, #2d1b10 40%, #1a0f0a 70%, #0a0a0a 100%);
          color: #ffffff;
          overflow: hidden;
          margin-top: 6rem;
        }

        .footer-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .footer-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(254, 215, 170, 0.08) 0%, transparent 70%);
        }

        .footer-particles {
          position: absolute;
          inset: 0;
        }

        .footer-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border-radius: 50%;
          animation: particle-float linear infinite;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
        }

        @keyframes particle-float {
          0% {
            bottom: -20px;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            bottom: 100vh;
            opacity: 0;
            transform: translateX(20px) rotate(360deg);
          }
        }

        .footer-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 2rem 2rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .logo-main {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fed7aa 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 0 3px rgba(249, 115, 22, 0.2),
            0 8px 32px rgba(249, 115, 22, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: logo-rotate 4s linear infinite;
        }

        .logo-icon::after {
          content: 'TS';
          position: relative;
          z-index: 2;
          font-size: 24px;
          font-weight: 900;
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        @keyframes logo-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .logo-text h3 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fed7aa 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
        }

        .logo-text span {
          font-size: 1rem;
          color: #fb923c;
          font-weight: 300;
          margin-left: 8px;
        }

        .logo-tagline {
          color: #fed7aa;
          font-size: 0.9rem;
          font-style: italic;
          opacity: 0.9;
        }

        .company-description {
          color: #d1d5db;
          line-height: 1.7;
          font-size: 1rem;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, transparent 100%);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid #f97316;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          padding: 12px 20px;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(249, 115, 22, 0.3);
          border-radius: 12px;
          color: #fed7aa;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f97316, #fb923c);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .social-link span {
          position: relative;
          z-index: 2;
        }

        .social-link:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.4);
          border-color: #f97316;
          color: white;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .section-title {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          position: relative;
          padding-bottom: 12px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #f97316, #fb923c, #fed7aa);
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 0;
          border-radius: 6px;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1px;
        }

        .footer-links a:hover {
          color: #fed7aa;
          padding-left: 20px;
          background: rgba(249, 115, 22, 0.05);
        }

        .footer-links a:hover::before {
          width: 15px;
        }

        .newsletter-section {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: 20px;
          padding: 2rem;
          gap: 1.5rem;
        }

        .newsletter-description {
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .newsletter-form {
          width: 100%;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .newsletter-input {
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(249, 115, 22, 0.3);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: #9ca3af;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
          background: rgba(0, 0, 0, 0.4);
        }

        .newsletter-button {
          padding: 16px 24px;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
        }

        .newsletter-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .newsletter-button:hover::before {
          opacity: 1;
        }

        .newsletter-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.5);
        }

        .newsletter-button.subscribed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          cursor: default;
        }

        .newsletter-button.subscribed:hover {
          transform: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(249, 115, 22, 0.05);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(249, 115, 22, 0.1);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .contact-label {
          font-weight: 600;
          color: #fed7aa;
          min-width: 60px;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f97316, #fb923c, #f97316, transparent);
          margin: 3rem 0;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(249, 115, 22, 0.1);
        }

        .footer-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.95rem;
          margin: 0;
          font-weight: 500;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .legal-links a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 4px 0;
        }

        .legal-links a:hover {
          color: #fed7aa;
        }

        .separator {
          color: #6b7280;
          font-size: 1rem;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
        }

        .tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(249, 115, 22, 0.05);
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(249, 115, 22, 0.2);
        }

        .tech-label {
          color: #fed7aa;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .tech-items {
          display: flex;
          gap: 1rem;
        }

        .tech-item {
          color: #d1d5db;
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0.8;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tech-item:hover {
          opacity: 1;
          color: #fed7aa;
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(249, 115, 22, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          font-size: 24px;
          font-weight: 900;
        }

        .back-to-top:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 12px 48px rgba(249, 115, 22, 0.6);
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          
          .footer-section:first-child {
            grid-column: 1 / -1;
          }
          
          .newsletter-section {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 4rem 1.5rem 2rem;
          }
          
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .legal-links {
            justify-content: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
          
          .tech-stack {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          
          .newsletter-section {
            padding: 1.5rem;
          }
          
          .input-group {
            gap: 1rem;
          }
        }
      `}</style>

      {/* JSX Structure */}
      <footer className="footer">
        <div className="footer-background">
          <div className="footer-gradient"></div>
          <div className="footer-particles">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="footer-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="footer-container">
          
          {/* Main Footer Content */}
          <div className="footer-main">
            
            {/* Company Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-main">
                  <div className="logo-icon"></div>
                  <div className="logo-text">
                    <h3>Yuvocreations Private Limited</h3>
                  </div>
                </div>
                <div className="logo-tagline">Innovating Tomorrow's Technology Today</div>
              </div>
              <div className="company-description">
                Transforming businesses through innovative technology solutions. 
                We deliver cutting-edge IT services that drive growth, efficiency, and digital transformation for companies worldwide.
              </div>
              <div className="social-links">
                <a href="#" className="social-link"><span>Facebook</span></a>
                <a href="#" className="social-link"><span>Twitter</span></a>
                <a href="#" className="social-link"><span>LinkedIn</span></a>
                <a href="#" className="social-link"><span>Instagram</span></a>
                <a href="#" className="social-link"><span>GitHub</span></a>
              </div>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h4 className="section-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#mobile-apps">Mobile Applications</a></li>
                <li><a href="#cloud-solutions">Cloud Solutions</a></li>
                <li><a href="#ai-ml">AI & Machine Learning</a></li>
                <li><a href="#cybersecurity">Cybersecurity</a></li>
                <li><a href="#data-analytics">Data Analytics</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="footer-section">
              <h4 className="section-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section newsletter-section">
              <h4 className="section-title">Stay Connected</h4>
              <p className="newsletter-description">
                Subscribe to our newsletter for the latest updates on technology trends, industry insights, and our premium services.
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button 
                    onClick={handleSubscribe}
                    className={`newsletter-button ${isSubscribed ? 'subscribed' : ''}`}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? 'Successfully Subscribed!' : 'Subscribe Now'}
                  </button>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Address:</span>
                  <span></span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span>+91 7889487784</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span>Yuvocreations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="copyright">
                © {currentYear} TechSolutions Pro. All rights reserved. Built with passion and innovation.
              </p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="#terms">Terms of Service</a>
                <span className="separator">•</span>
                <a href="#cookies">Cookie Policy</a>
                <span className="separator">•</span>
                <a href="#security">Security</a>
              </div>
            </div>
            
            <div className="footer-bottom-right">
              <div className="tech-stack">
                <span className="tech-label">Powered by:</span>
                <div className="tech-items">
                  <span className="tech-item">React</span>
                  <span className="tech-item">Node.js</span>
                  <span className="tech-item">AWS</span>
                  <span className="tech-item">Docker</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </button>

      </footer>
    </>
  );
};

export default Footer;