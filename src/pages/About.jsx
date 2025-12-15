import React, { useEffect, useRef } from 'react';
import '../pagescss/about.css';
import { ArrowRight, Zap, Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('prm-animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.prm-animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: '' },
    { number: '100+', label: 'Happy Clients', icon: '' },
    { number: '5+', label: 'Years Experience', icon: '' },
    { number: '50+', label: 'Team Members', icon: '' }
  ];

  const services = [
    {
      icon: <Zap size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with latest technologies'
    },
    {
      icon: <Zap size={40} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      icon: <Zap size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs that convert visitors to customers'
    },
    {
      icon: <Zap size={40} />,
      title: 'SEO & Marketing',
      description: 'Digital marketing strategies to boost your online presence'
    },
    // {
    //   icon: <Zap size={40} />,
    //   title: 'Cloud Solutions',
    //   description: 'Scalable cloud infrastructure and deployment solutions'
    // },
    // {
    //   icon: <Zap size={40} />,
    //   title: 'Cybersecurity',
    //   description: 'Comprehensive security solutions to protect your digital assets'
    // }
  ];

  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends and implement cutting-edge solutions'
    },
    {
      icon: <Award size={40} />,
      title: 'Quality',
      description: 'We deliver high-quality products that exceed client expectations'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their unique requirements'
    },
    {
      icon: <Target size={40} />,
      title: 'Efficiency',
      description: 'We deliver projects on time without compromising on quality'
    }
  ];

  return (
    <div className="prm-about-container">
      {/* Hero Section */}
      <section className="prm-hero-section-about">
        <div className="prm-hero-background">
          <div className="prm-gradient-blob prm-blob-1"></div>
          <div className="prm-gradient-blob prm-blob-2"></div>
        </div>
        <div className="prm-hero-content">
          <div className="prm-hero-text prm-animate-on-scroll">
            <h1 className="prm-hero-title">
              Transforming Ideas into 
              <span className="prm-highlight"> Digital Reality</span>
            </h1>
            <p className="prm-hero-description">
              We are a passionate team of IT professionals dedicated to delivering 
              innovative technology solutions that drive business growth and success. 
              With years of expertise and a commitment to excellence, we turn your 
              vision into powerful digital experiences.
            </p>
            <div className="prm-hero-buttons">
              <button className="prm-btn-primary">
                Our Services
                <ArrowRight size={20} />
              </button>
              <button className="prm-btn-secondary">Contact Us</button>
            </div>
          </div>
          <div className="prm-hero-image prm-animate-on-scroll">
            <div className="prm-floating-card">
              <div className="prm-card-icon"></div>
              <h3>IT Excellence</h3>
              <p>Delivering world-class technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="prm-stats-section" ref={statsRef}>
        <div className="prm-container">
          <div className="prm-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="prm-stat-card prm-animate-on-scroll">
                <div className="prm-stat-icon">{stat.icon}</div>
                <div className="prm-stat-number">{stat.number}</div>
                <div className="prm-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="prm-services-overview">
        <div className="prm-container">
          <div className="prm-section-header prm-animate-on-scroll">
            <h2>Our Expertise</h2>
            <p>We offer comprehensive IT services to help your business thrive in the digital age</p>
          </div>
          <div className="prm-services-grid">
            {services.map((service, index) => (
              <div key={index} className="prm-service-card prm-animate-on-scroll">
                <div className="prm-service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="prm-service-hover-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="prm-values-section" ref={valuesRef}>
        <div className="prm-container">
          <div className="prm-section-header prm-animate-on-scroll">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="prm-values-grid">
            {values.map((value, index) => (
              <div key={index} className="prm-value-card prm-animate-on-scroll">
                <div className="prm-value-icon-wrapper">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="prm-mission-section">
        <div className="prm-container">
          <div className="prm-mission-content prm-animate-on-scroll">
            <div className="prm-mission-text">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success. We believe in the power of technology to transform 
                ideas into reality and are committed to being your trusted partner in digital transformation.
              </p>
              <div className="prm-mission-features">
                <div className="prm-feature">
                  <span className="prm-feature-icon"></span>
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="prm-feature">
                  <span className="prm-feature-icon"></span>
                  <span>Cutting-Edge Technology</span>
                </div>
                <div className="prm-feature">
                  <span className="prm-feature-icon"></span>
                  <span>100% Commitment</span>
                </div>
              </div>
            </div>
            <div className="prm-mission-visual">
              <div className="prm-visual-element">
                <div className="prm-pulse-circle"></div>
                <div className="prm-center-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="prm-cta-section">
        <div className="prm-cta-background">
          <div className="prm-cta-gradient"></div>
        </div>
        <div className="prm-container">
          <div className="prm-cta-content prm-animate-on-scroll">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
            <div className="prm-cta-buttons">
              <button className="prm-btn-primary">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="prm-btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;