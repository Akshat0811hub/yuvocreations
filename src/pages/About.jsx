import React, { useEffect, useRef } from 'react';
import '../pagescss/about.css';

const About = () => {
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '200+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '⭐' },
    { number: '50+', label: 'Team Members', icon: '👥' }
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with latest technologies'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs that convert visitors to customers'
    },
    {
      icon: '🔍',
      title: 'SEO & Marketing',
      description: 'Digital marketing strategies to boost your online presence'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets'
    }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We stay ahead of technology trends and implement cutting-edge solutions'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'We deliver high-quality products that exceed client expectations'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with clients to understand their unique requirements'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'We deliver projects on time without compromising on quality'
    }
  ];

  // const teamMembers = [
  //   {
  //     name: 'John Smith',
  //     role: 'CEO & Founder',
  //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  //     description: 'Visionary leader with 10+ years in tech industry'
  //   },
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'CTO',
  //     image: 'https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=300&h=300&fit=crop&crop=face',
  //     description: 'Tech expert specializing in scalable solutions'
  //   },
  //   {
  //     name: 'Mike Davis',
  //     role: 'Lead Developer',
  //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  //     description: 'Full-stack developer with expertise in modern frameworks'
  //   },
  //   {
  //     name: 'Emily Chen',
  //     role: 'Design Director',
  //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  //     description: 'Creative designer focused on user experience'
  //   }
  // ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1 className="hero-title">
              Transforming Ideas into 
              <span className="highlight"> Digital Reality</span>
            </h1>
            <p className="hero-description">
              We are a passionate team of IT professionals dedicated to delivering 
              innovative technology solutions that drive business growth and success. 
              With years of expertise and a commitment to excellence, we turn your 
              vision into powerful digital experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Our Services</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
          <div className="hero-image animate-on-scroll">
            <div className="floating-card">
              <div className="card-icon">💻</div>
              <h3>IT Excellence</h3>
              <p>Delivering world-class technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-on-scroll">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Expertise</h2>
            <p>We offer comprehensive IT services to help your business thrive in the digital age</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-on-scroll">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="values-section" ref={valuesRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card animate-on-scroll">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section" ref={teamRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Meet Our Team</h2>
            <p>The talented individuals behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card animate-on-scroll">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">📧</a>
                      <a href="#" className="social-link">💼</a>
                      <a href="#" className="social-link">🐦</a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content animate-on-scroll">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success. We believe in the power of technology to transform 
                ideas into reality and are committed to being your trusted partner in digital transformation.
              </p>
              <div className="mission-features">
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚀</span>
                  <span>Cutting-Edge Technology</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💯</span>
                  <span>100% Commitment</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-element">
                <div className="pulse-circle"></div>
                <div className="center-icon">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;