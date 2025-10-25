import React, { useState, useEffect } from 'react';
import '../css/footer.css';
import logoImage from '../assets/logobg.png';

// Functional Icons (using SVG inline for no external dependencies)
const ArrowRightIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill={color || "currentColor"}>
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// Social Media Icons (SVGs)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.246 11.852V15.01H7.5v-3.008h2.746V9.61c0-2.73 1.67-4.225 4.102-4.225s3.791.298 3.791.298V7.81h-2.146c-1.066 0-1.402.662-1.402 1.34V12h3.008l-.482 3.008h-2.526v6.842C19.56 22.95 24 18.016 24 12c0-6.627-5.373-12-12-12z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.013 4.85.07c3.252.145 4.772 1.663 4.916 4.915.058 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.145 3.252-1.663 4.772-4.915 4.916-1.266.058-1.646.07-4.85.07s-3.584-.013-4.85-.07c-3.252-.145-4.772-1.663-4.916-4.915-.058-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.145-3.252 1.663-4.772 4.915-4.916 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.262 0-3.679.014-4.945.071C2.695.232.231 2.694.072 4.945c-.058 1.266-.07 1.683-.07 4.945s.014 3.679.071 4.945c.159 2.251 2.621 4.715 4.872 4.872 1.266.057 1.683.07 4.945.07s3.679-.014 4.945-.071c2.251-.159 4.715-2.621 4.872-4.872.057-1.266.07-1.683.07-4.945s-.014-3.679-.071-4.945C21.306 2.694 18.842.232 16.59.072 15.324.014 14.907 0 12 0zm0 5.838c-3.414 0-6.17 2.756-6.17 6.17s2.756 6.17 6.17 6.17 6.17-2.756 6.17-6.17-2.756-6.17-6.17-6.17zm0 10.17c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.471-11.471c-.703 0-1.272.57-1.272 1.271 0 .701.57 1.271 1.272 1.271.702 0 1.271-.57 1.271-1.271s-.569-1.271-1.271-1.271z"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.914 5.253l-3.321 3.321L20.812 13l-1.393 1.393-5.22-5.22-3.321 3.321 1.393 1.393-2.771 2.771-1.393-1.393 5.22-5.22-3.321-3.321-1.393 1.393L3 13.914l1.393 1.393L9.61 9.098l3.321-3.321L14.324 7l-5.22 5.22 3.321 3.321 1.393-1.393 2.771 2.771 1.393 1.393-5.22 5.22-3.321-3.321L9.61 24l-1.393-1.393-5.22 5.22-1.393-1.393L.914 18.914 7.086 12 1.766 6.68z"/></svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M22.234 0H1.766C.79 0 0 .79 0 1.766v20.468C0 23.21.79 24 1.766 24h20.468c.976 0 1.766-.79 1.766-1.766V1.766C24 .79 23.21 0 22.234 0zM7.05 20.435H3.635V9.453h3.415v10.982zM5.342 8.35c-1.12 0-2.028-.908-2.028-2.028 0-1.12.908-2.028 2.028-2.028s2.028.908 2.028 2.028c0 1.12-.908 2.028-2.028 2.028zM20.365 20.435h-3.415v-5.23c0-1.246-.948-2.195-2.195-2.195-1.246 0-2.195.949-2.195 2.195v5.23h-3.415V9.453h3.415v1.73c.473-.895 1.55-2.074 3.12-2.074 2.72 0 4.793 1.77 4.793 5.567v5.759z"/></svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };


useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 250); // appears after 250px scroll
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
        <div className="footer-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="footer-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-main">
                <img src={logoImage} alt="Logo" />
                <div className="logo-text">
                  <h3>Yuvocreations</h3>
                </div>
              </div>
              <div className="logo-tagline">Innovate, Integrate, Elevate</div>
            </div>
            <div className="company-description">
              Yuvocreations delivers innovative, tailored IT solutions that drive growth and efficiency for modern enterprises. We specialize in full-stack development and cloud architecture.
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61565786861921" className="social-link" aria-label="Find us on Facebook"><FacebookIcon /></a>
              <a href="https://www.instagram.com/yuvocreations/" className="social-link" aria-label="Follow us on Instagram"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/yuvocreations/" className="social-link" aria-label="Connect with us on LinkedIn"><LinkedInIcon /></a>
              <a href="https://twitter.com/yuvocreations" className="social-link" aria-label="Follow us on X"><XIcon /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Key Services</h4>
            <ul className="footer-links">
              <li><a href="#web-development"><ArrowRightIcon />Web Development</a></li>
              <li><a href="#mobile-apps"><ArrowRightIcon />UI/UX Design</a></li>
              <li><a href="#cloud-solutions"><ArrowRightIcon />Branding Services</a></li>
              <li><a href="#data-analytics"><ArrowRightIcon />Advance Digital Marketing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">About Us</h4>
            <ul className="footer-links">
              <li><a href="#about"><ArrowRightIcon />Company Mission</a></li>
              <li><a href="#portfolio"><ArrowRightIcon />Client Portfolio</a></li>
              <li><a href="#testimonials"><ArrowRightIcon />Success Stories</a></li>
              <li><a href="#blog"><ArrowRightIcon />Insights Blog</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h4 className="section-title">Get In Touch</h4>
            <p className="newsletter-description">
              Join our newsletter to receive the latest tech trends and exclusive updates from Yuvocreations.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                aria-label="Email address for newsletter subscription"
                required
              />
              <button
                type="submit"
                className={`newsletter-button ${isSubscribed ? 'subscribed' : ''}`}
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckIcon />Subscribed!
                  </>
                ) : 'Subscribe Now'}
              </button>
            </form>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+917889487784" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>+91 7042123166</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:contact@yuvocreations.com" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>contactus@yuvocreations.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">
              &copy; {currentYear} Yuvocreations Private Limited | All Rights Reserved.
            </p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ Smooth Fade-In/Out Back-to-Top Button */}
  {showTop && (
  <button
    className="back-to-top show"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Back to top"
  >
    ↑
  </button>
)}




    </footer>
    
  );
};

export default Footer;