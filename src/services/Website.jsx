import React, { useState, useEffect } from 'react';
import '../pagescss/website.css';

const WebsiteDesignPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Modern online store with advanced features"
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Professional business website design"
    },
    {
      title: "Restaurant Website",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      description: "Elegant restaurant website with online ordering"
    },
    {
      title: "Portfolio Website",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      description: "Creative portfolio for digital artists"
    },
    {
      title: "Healthcare Platform",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      description: "Medical practice management system"
    },
    {
      title: "Educational Portal",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
      description: "Online learning platform design"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Outstanding work! Our website conversion rate increased by 150% after the redesign.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b950?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Professional, creative, and delivered exactly what we needed. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      content: "The team exceeded our expectations. The website is beautiful and performs amazingly.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to design a website?",
      answer: "Typically, a standard website takes 2-4 weeks, while complex projects may take 6-8 weeks. Timeline depends on project scope and revisions needed."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer ongoing maintenance packages including updates, security monitoring, backups, and technical support."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes, we build websites with user-friendly content management systems that allow you to easily update content without technical knowledge."
    },
    {
      question: "What's included in the website design package?",
      answer: "Our packages include custom design, responsive development, SEO optimization, contact forms, social media integration, and 3 months of support."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="webdesign-page-container">
      {/* Hero Section */}
      <section className="webdesign-hero-zone">
        <div className="webdesign-hero-content">
          <div className="webdesign-hero-text-area">
            <h1 className="webdesign-main-headline">
              Professional Website Design
              <span className="webdesign-highlight-text"> That Converts</span>
            </h1>
            <p className="webdesign-hero-description">
              Transform your online presence with stunning, responsive websites that engage visitors 
              and drive business growth. Our expert team creates custom solutions tailored to your brand.
            </p>
            <div className="webdesign-hero-buttons">
              <button className="webdesign-primary-btn">
                <span>Start Your Project</span>
                <div className="webdesign-btn-ripple"></div>
              </button>
              <button className="webdesign-secondary-btn">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
          <div className="webdesign-hero-visual">
            <div className="webdesign-floating-card webdesign-card-1">
              <div className="webdesign-mini-browser">
                <div className="webdesign-browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="webdesign-browser-content"></div>
              </div>
            </div>
            <div className="webdesign-floating-card webdesign-card-2">
              <div className="webdesign-mobile-mockup">
                <div className="webdesign-mobile-screen"></div>
              </div>
            </div>
            <div className="webdesign-floating-card webdesign-card-3">
              <div className="webdesign-design-elements">
                <div className="webdesign-color-palette">
                  <span className="webdesign-color-1"></span>
                  <span className="webdesign-color-2"></span>
                  <span className="webdesign-color-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="webdesign-services-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">Our Website Design Services</h2>
            <p className="webdesign-section-subtitle">
              Comprehensive web solutions to elevate your digital presence
            </p>
          </div>
          
          <div className="webdesign-services-grid">
            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-responsive">
                <div className="webdesign-responsive-demo">
                  <div className="webdesign-screen-desktop"></div>
                  <div className="webdesign-screen-mobile"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">Responsive Design</h3>
              <p className="webdesign-service-text">
                Websites that look perfect on all devices, from smartphones to desktops.
              </p>
            </div>

            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-custom">
                <div className="webdesign-custom-demo">
                  <div className="webdesign-palette-circle"></div>
                  <div className="webdesign-brush-stroke"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">Custom Design</h3>
              <p className="webdesign-service-text">
                Unique, brand-focused designs that set you apart from the competition.
              </p>
            </div>

            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-ecommerce">
                <div className="webdesign-ecommerce-demo">
                  <div className="webdesign-shopping-cart"></div>
                  <div className="webdesign-product-grid"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">E-commerce Solutions</h3>
              <p className="webdesign-service-text">
                Complete online stores with payment integration and inventory management.
              </p>
            </div>

            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-speed">
                <div className="webdesign-speed-demo">
                  <div className="webdesign-speedometer"></div>
                  <div className="webdesign-speed-lines"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">Speed Optimization</h3>
              <p className="webdesign-service-text">
                Lightning-fast loading times for better user experience and SEO.
              </p>
            </div>

            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-seo">
                <div className="webdesign-seo-demo">
                  <div className="webdesign-search-graph"></div>
                  <div className="webdesign-ranking-bars"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">SEO Friendly</h3>
              <p className="webdesign-service-text">
                Built-in SEO optimization to help your website rank higher in search results.
              </p>
            </div>

            <div className="webdesign-service-card">
              <div className="webdesign-service-icon webdesign-icon-cms">
                <div className="webdesign-cms-demo">
                  <div className="webdesign-content-blocks"></div>
                  <div className="webdesign-edit-cursor"></div>
                </div>
              </div>
              <h3 className="webdesign-service-title">CMS Integration</h3>
              <p className="webdesign-service-text">
                Easy-to-use content management systems for effortless website updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="webdesign-portfolio-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">Our Recent Work</h2>
            <p className="webdesign-section-subtitle">
              Explore our portfolio of successful website projects
            </p>
          </div>

          <div className="webdesign-portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="webdesign-portfolio-item">
                <div className="webdesign-portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="webdesign-portfolio-overlay">
                    <div className="webdesign-portfolio-content">
                      <span className="webdesign-portfolio-category">{item.category}</span>
                      <h3 className="webdesign-portfolio-title">{item.title}</h3>
                      <p className="webdesign-portfolio-desc">{item.description}</p>
                      <button className="webdesign-portfolio-btn">View Project</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="webdesign-process-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">Our Design Process</h2>
            <p className="webdesign-section-subtitle">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="webdesign-process-timeline">
            <div className="webdesign-process-step">
              <div className="webdesign-step-number">1</div>
              <div className="webdesign-step-content">
                <h3 className="webdesign-step-title">Discovery & Planning</h3>
                <p className="webdesign-step-text">
                  We analyze your business goals, target audience, and competitors to create a strategic foundation.
                </p>
              </div>
            </div>

            <div className="webdesign-process-step">
              <div className="webdesign-step-number">2</div>
              <div className="webdesign-step-content">
                <h3 className="webdesign-step-title">Design & Wireframing</h3>
                <p className="webdesign-step-text">
                  We create detailed wireframes and mockups to visualize the user experience and interface design.
                </p>
              </div>
            </div>

            <div className="webdesign-process-step">
              <div className="webdesign-step-number">3</div>
              <div className="webdesign-step-content">
                <h3 className="webdesign-step-title">Development & Testing</h3>
                <p className="webdesign-step-text">
                  Our developers bring the designs to life with clean code, followed by thorough testing across devices.
                </p>
              </div>
            </div>

            <div className="webdesign-process-step">
              <div className="webdesign-step-number">4</div>
              <div className="webdesign-step-content">
                <h3 className="webdesign-step-title">Launch & Support</h3>
                <p className="webdesign-step-text">
                  We launch your website and provide ongoing support to ensure optimal performance and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="webdesign-testimonials-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">What Our Clients Say</h2>
            <p className="webdesign-section-subtitle">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="webdesign-testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`webdesign-testimonial-card ${index === activeTestimonial ? 'webdesign-active' : ''}`}
              >
                <div className="webdesign-testimonial-content">
                  <p className="webdesign-testimonial-text">"{testimonial.content}"</p>
                  <div className="webdesign-testimonial-author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="webdesign-author-avatar"
                    />
                    <div className="webdesign-author-info">
                      <h4 className="webdesign-author-name">{testimonial.name}</h4>
                      <p className="webdesign-author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="webdesign-testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`webdesign-dot ${index === activeTestimonial ? 'webdesign-active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="webdesign-faq-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">Frequently Asked Questions</h2>
            <p className="webdesign-section-subtitle">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="webdesign-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="webdesign-faq-item">
                <button 
                  className={`webdesign-faq-question ${activeFaq === index ? 'webdesign-active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="webdesign-faq-icon">+</span>
                </button>
                <div className={`webdesign-faq-answer ${activeFaq === index ? 'webdesign-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="webdesign-cta-zone">
        <div className="webdesign-container">
          <div className="webdesign-cta-content">
            <h2 className="webdesign-cta-title">Ready to Transform Your Online Presence?</h2>
            <p className="webdesign-cta-text">
              Let's create a website that not only looks amazing but drives real business results. 
              Get started with a free consultation today.
            </p>
            <div className="webdesign-cta-buttons">
              <button className="webdesign-cta-primary">Get Free Quote</button>
              <button className="webdesign-cta-secondary">Call Us Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignPage;