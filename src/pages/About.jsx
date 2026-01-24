import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pagescss/about.css';
import { ArrowRight, Zap, Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const statsRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('prm-animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document
      .querySelectorAll('.prm-animate-on-scroll')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ];

  // ❌ Mobile Apps REMOVED
  const expertise = [
    {
      icon: <Zap size={40} />,
      title: 'Web Development',
      description: 'Modern, scalable, and high-performance web solutions',
    },
    {
      icon: <Zap size={40} />,
      title: 'UI/UX Design',
      description: 'User-first design systems that improve engagement',
    },
    {
      icon: <Zap size={40} />,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies that increase reach and visibility',
    },
  ];

  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'We embrace new ideas and emerging technologies',
    },
    {
      icon: <Award size={40} />,
      title: 'Quality',
      description: 'Every project meets high standards of performance',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Transparent communication with every client',
    },
    {
      icon: <Target size={40} />,
      title: 'Efficiency',
      description: 'We respect time, budgets, and business goals',
    },
  ];

  return (
    <div className="prm-about-container">
      {/* HERO */}
      <section className="prm-hero-section-about">
        <div className="prm-hero-background">
          <div className="prm-gradient-blob prm-blob-1" />
          <div className="prm-gradient-blob prm-blob-2" />
        </div>

        <div className="prm-hero-content">
          <div className="prm-hero-text prm-animate-on-scroll">
            <h1 className="prm-hero-title">
              Transforming Ideas into
              <span className="prm-highlight"> Digital Reality</span>
            </h1>

            <p className="prm-hero-description">
              We are a team of IT professionals building impactful digital
              experiences that help brands grow and scale confidently.
            </p>

            <div className="prm-hero-buttons">
              {/* <button
                className="prm-btn-primary"
                onClick={() => navigate('../src/components/Tabs.jsx')}
              >
                Our Services <ArrowRight size={20} />
              </button> */}

              <button
              className="prm-btn-primary"
                // className="prm-btn-secondary"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="prm-hero-image prm-animate-on-scroll">
            <div className="prm-floating-card">
              <h3>IT Excellence</h3>
              <p>Reliable digital solutions for modern businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="prm-stats-section" ref={statsRef}>
        <div className="prm-container">
          <div className="prm-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="prm-stat-card prm-animate-on-scroll">
                <div className="prm-stat-number">{stat.number}</div>
                <div className="prm-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE (NO SERVICES SECTION, NO MOBILE APPS) */}
      <section className="prm-services-overview">
        <div className="prm-container">
          <div className="prm-section-header prm-animate-on-scroll">
           <h2>Our <span>Expertise</span></h2>
            <p>Focused digital capabilities that deliver real results</p>
          </div>

          <div className="prm-services-grid">
            {expertise.map((item, index) => (
              <div key={index} className="prm-service-card prm-animate-on-scroll">
                <div className="prm-service-icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="prm-values-section" ref={valuesRef}>
        <div className="prm-container">
          <div className="prm-section-header prm-animate-on-scroll">
            <h2>Our <span>Values</span></h2>

            <p>The principles that guide how we work</p>
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

      {/* ✅ MISSION — RESTORED */}
      <section className="prm-mission-section">
        <div className="prm-container">
          <div className="prm-mission-content prm-animate-on-scroll">
            <div className="prm-mission-text">
              <h2>Our <span>Mission</span></h2>

              <p>
                Our mission is to empower businesses with reliable, scalable,
                and innovative digital solutions. We aim to build long-term
                partnerships by delivering technology that drives measurable
                growth, efficiency, and brand value.
              </p>

              <div className="prm-mission-features">
                <div className="prm-feature">Customer-Centric Approach</div>
                <div className="prm-feature">Modern Technologies</div>
                <div className="prm-feature">100% Commitment</div>
              </div>
            </div>

            <div className="prm-mission-visual">
              <div className="prm-visual-element">
                <div className="prm-pulse-circle" />
                <div className="prm-center-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
