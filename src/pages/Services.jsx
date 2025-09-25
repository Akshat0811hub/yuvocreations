import React from "react";
import '../pagescss/Services.css';

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      color: "#e69500",
      title: "Web Development & Support",
      description: "Custom websites built with modern technologies, ongoing maintenance, and 24/7 support to keep your business running smoothly.",
      features: ["Responsive Design", "Modern Frameworks", "24/7 Support", "Performance Optimization"]
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      color: "#0077cc",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      color: "#28a745",
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies that drive organic traffic and improve rankings.",
      features: ["Keyword Research", "On-page SEO", "Link Building", "Analytics Reporting"]
    },
    {
      icon: "fa-solid fa-bullhorn",
      color: "#ff5722",
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including social media, PPC campaigns, and content marketing strategies.",
      features: ["Social Media Marketing", "PPC Campaigns", "Content Strategy", "Brand Management"]
    },
    {
      icon: "fa-solid fa-palette",
      color: "#9c27b0",
      title: "UI/UX Design",
      description: "Create stunning user interfaces and seamless user experiences that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "fa-solid fa-cloud",
      color: "#607d8b",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to help your business grow without limits.",
      features: ["Cloud Migration", "AWS/Azure", "DevOps", "Monitoring & Security"]
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-hero">
        {/* <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
          <div className="hero-decorative"></div>
        </div> */}
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="services-container-inner">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>From concept to completion, we provide end-to-end digital solutions</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-icon-wrapper">
                  <i className={service.icon} style={{ color: service.color }}></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-check" style={{ color: service.color }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="service-btn" style={{ backgroundColor: service.color }}>
                    Learn More
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and bring your vision to life</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <i className="fa-solid fa-phone"></i>
              Contact Us
            </button>
            <button className="cta-btn secondary">
              <i className="fa-solid fa-calendar"></i>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;