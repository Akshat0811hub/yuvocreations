import React from 'react';
import { Award, MessageCircle } from 'lucide-react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        
        {/* Left Side - Images */}
        <div className="images-grid">
          {/* Main Image */}
          <div className="main-image">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Woman working on design" 
              className="image"
            />
          </div>
          
          {/* Top Right Image */}
          <div className="top-image">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Team collaboration" 
              className="image"
            />
          </div>
          
          {/* Bottom Left - Stats Card */}
          <div className="stats-card">
            <div className="award-icon">
              <Award className="icon" />
            </div>
            <div className="stats-content">
              <h3 className="stats-number">2k+</h3>
              <p className="stats-text">Project Completed</p>
            </div>
          </div>
          
          {/* Bottom Right Image */}
          <div className="bottom-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Business meeting" 
              className="image"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="content-section">
          <div className="content-header">
            <p className="section-subtitle">ABOUT US</p>
            <h1 className="main-heading">
              Innovate Integrate an Elevate Tech
            </h1>
          </div>

          <div className="content-body">
            <p className="main-description">
              Technology is constantly evolving, shaping the way we live and work. It 
              encompasses innovation, automation, and connectivity, driving progress
            </p>

            <div className="feature-points">
              <p className="feature-point">
                Tech Forward. Future Ready Your Tomorrow, Enhanced Today
              </p>
              <p className="feature-point">
                Revolutionizing Reality Through Technology Tech it to the Next Level
              </p>
              <p className="feature-point">
                Tech-savvy Lives, Brighter Tomorrows Connect Create Transform
              </p>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-icon">
                <MessageCircle className="icon" />
              </div>
              <div className="contact-details">
                <p className="contact-label">Need help?</p>
                <p className="contact-number">+91 9599535114</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;