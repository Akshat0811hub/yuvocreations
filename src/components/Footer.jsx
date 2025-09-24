import React, { useState } from 'react';
import '../css/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
        <div className="footer-particles">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="footer-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
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
              <div className="logo-icon">
                <div className="logo-symbol">⚡</div>
              </div>
              <div className="logo-text">
                <h3>TechSolutions</h3>
                <span>Pro</span>
              </div>
            </div>
            <p className="company-description">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge IT services that drive growth and efficiency.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span className="social-icon">🐱</span>
              </a>
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

          {/* Support Section */}
          <div className="footer-section">
            <h4 className="section-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Technical Support</a></li>
              <li><a href="#status">System Status</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h4 className="section-title">Stay Updated</h4>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest updates on technology trends and our services.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button 
                  type="submit" 
                  className={`newsletter-button ${isSubscribed ? 'subscribed' : ''}`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>
            
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Tech Street, Digital City, TC 12345</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@techsolutions.pro</span>
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
              © {currentYear} TechSolutions Pro. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          
          <div className="footer-bottom-right">
            <div className="tech-stack">
              <span className="tech-label">Built with:</span>
              <div className="tech-icons">
                <span className="tech-icon" title="React">⚛️</span>
                <span className="tech-icon" title="Node.js">🟢</span>
                <span className="tech-icon" title="AWS">☁️</span>
                <span className="tech-icon" title="Docker">🐳</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span className="back-to-top-icon">↑</span>
      </button>

    </footer>
  );
};

export default Footer;