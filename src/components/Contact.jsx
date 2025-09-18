import React, { useState } from 'react';
import { Shield, Eye, Headphones, ChevronDown } from 'lucide-react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const services = [
    { 
      icon: Shield, 
      title: "High Security", 
      desc: "We provide IT design for companies and businesses worldwide which don't look even slightly believable." 
    },
    { 
      icon: Eye, 
      title: "Quality Control", 
      desc: "We provide IT design for companies and businesses worldwide which don't look even slightly believable." 
    },
    { 
      icon: Headphones, 
      title: "24/7 Support", 
      desc: "We provide IT design for companies and businesses worldwide which don't look even slightly believable." 
    }
  ];

  return (
    <div className="contact-section">
      <div className="contact-container">
        
        {/* Left Side - Services */}
        <div className="services-section">
          <div className="services-header">
            
            
          </div>

          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-item">
                  <div className="service-icon">
                    <IconComponent className="icon" />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="form-section">
          <div className="form-header">
            <p className="form-subtitle"></p>
            <h2 className="form-title">
              You Have Questions?<br />
              Contact With Us
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name and Email Row */}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            {/* Phone and Service Row */}
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
              <div className="select-wrapper">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="seo">SEO Services</option>
                  <option value="consulting">Consulting</option>
                </select>
                <ChevronDown className="select-arrow" />
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="form-textarea"
            />

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Floating Icon */}
      <div className="floating-icon">
        <div className="icon-grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;