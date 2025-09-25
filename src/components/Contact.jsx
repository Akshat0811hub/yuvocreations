import React, { useState } from 'react';
import { Shield, Eye, Headphones, ChevronDown } from 'lucide-react';
import '../css/Contact.css'; // Make sure this path is correct

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
    // Handle form submission logic here (e.g., send to an API)
  };

  const services = [
    {
      icon: Shield,
      title: "High Security",
      desc: "We provide robust IT solutions ensuring your data and infrastructure are always protected."
    },
    {
      icon: Eye,
      title: "Quality Control",
      desc: "Our commitment to quality ensures that every project we deliver meets the highest standards."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our dedicated support team is available around the clock to assist you with any issues."
    }
  ];

  return (
    <div className="contact-section">
      <div className="contact-container">

        {/* Left Side - Services / Info */}
        <div className="services-section">
          <div className="services-header">
            <h1 className="main-title">
              Let's Build Something <span className="highlight-text">Great</span> Together.
            </h1>
            <p className="main-description">
              We're here to help you turn your ideas into reality. Reach out to us and see how we can help your business grow.
            </p>
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
        {/* ADD THIS WRAPPER DIV */}
        <div className="form-card-wrapper"> 
          <div className="form-section">
            <div className="form-header">
              <h2 className="form-title">
                Have a Project in Mind?
              </h2>
              <p className="form-subtitle">Fill out the form and we'll get back to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
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
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="seo">SEO Services</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  <ChevronDown className="select-arrow" />
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="form-textarea"
                required
              />

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div> {/* END OF NEW WRAPPER DIV */}
      </div>
    </div>
  );
};

export default Contact;