'use client';

import React, { useState } from 'react';
import '../pagescss/Digital.css';

export default function DigitalMarketingPage() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const portfolioProjects = [
    {
      category: 'Brand Design',
      name: 'Luxe Cosmetics',
      description:
        'Complete brand transformation with digital strategy and social media domination.',
      growth: '340%',
      engagement: '2.5M',
    },
    {
      category: 'Product Launch',
      name: 'TechFlow App',
      description:
        'Strategic launch campaign resulting in market leadership within 6 months.',
      growth: '580%',
      engagement: '1.8M',
    },
    {
      category: 'B2B Marketing',
      name: 'Enterprise Solutions',
      description:
        'Lead generation campaign that revolutionized their sales pipeline.',
      growth: '420%',
      engagement: '950K',
    },
  ];

  const testimonials = [
    {
      initial: 'S',
      name: 'Sarah Johnson',
      position: 'CEO, Digital Ventures',
      text:
        "The team's innovative approach transformed our digital presence completely. Our ROI increased by 400% within the first quarter. Absolutely phenomenal results!",
    },
    {
      initial: 'M',
      name: 'Michael Chen',
      position: 'CMO, Tech Innovations',
      text:
        'Working with this agency was a game-changer. Their data-driven strategies and creative execution exceeded all our expectations. Highly recommended!',
    },
    {
      initial: 'E',
      name: 'Emily Roberts',
      position: 'Founder, Style & Co',
      text:
        'From concept to execution, everything was flawless. They understood our vision and delivered beyond what we imagined. Our brand has never looked better!',
    },
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive digital marketing services including brand strategy, social media marketing, content creation, SEO, PPC campaigns, email marketing, and analytics. Our approach is tailored to each client\'s unique needs and goals.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'While some improvements can be seen within the first month, significant results typically manifest within 3-6 months. Digital marketing is a long-term investment, and we focus on sustainable growth rather than quick fixes.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work across various industries including e-commerce, technology, healthcare, fashion, finance, and B2B services. Our team has diverse experience and adapts strategies to suit any industry vertical.',
    },
    {
      question: 'Do you offer customized packages?',
      answer:
        'Absolutely! Every business is unique, and we create customized strategies and packages based on your specific goals, budget, and market conditions. We believe in flexible solutions that grow with your business.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We use data-driven KPIs including ROI, conversion rates, engagement metrics, traffic growth, and lead generation. You\'ll receive detailed monthly reports with actionable insights and transparent performance tracking.',
    },
  ];

  return (
    <div className="marketing-wrapper">
      {/* Hero */}
      <section className="hero-showcase">
        <div className="hero-showcase-content">
          
          <h1 className="hero-main-title">
            Transform Your Brand
            <br />
            Into A <span className="hero-highlight">Digital Powerhouse</span>
          </h1>
          <p className="hero-description">
            We craft data-driven strategies that don't just grow businesses—they
            revolutionize entire industries. Ready to dominate your market?
          </p>
          <div className="hero-cta-group">
            <button
              className="cta-primary-btn"
              onClick={() => console.log('Start Your Journey clicked')}
            >
              Start Your Journey
            </button>
            <button
              className="cta-secondary-btn"
              onClick={() => console.log('Explore Our Work clicked')}
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-timeline-section">
        <div className="process-container">
          <div className="process-header">
            <div className="process-subtitle">Our Process</div>
            <h2 className="process-title">How We Drive Success</h2>
            <p className="process-intro">
              A proven methodology that combines strategic thinking with
              creative excellence to deliver exceptional results.
            </p>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line" />
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-content-left">
                  <div className="timeline-step-number">01</div>
                  <h3 className="timeline-step-title">Discovery & Research</h3>
                  <p className="timeline-step-description">
                    Deep dive into your business, audience, and competitors to
                    uncover unique opportunities.
                  </p>
                </div>
                <div className="timeline-node">1</div>
                <div className="timeline-content-right" />
              </div>

              <div className="timeline-item">
                <div className="timeline-content-left" />
                <div className="timeline-node">2</div>
                <div className="timeline-content-right">
                  <div className="timeline-step-number">02</div>
                  <h3 className="timeline-step-title">Strategy Development</h3>
                  <p className="timeline-step-description">
                    Crafting a comprehensive roadmap tailored to your goals and
                    market dynamics.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content-left">
                  <div className="timeline-step-number">03</div>
                  <h3 className="timeline-step-title">Creative Execution</h3>
                  <p className="timeline-step-description">
                    Bringing strategies to life with compelling campaigns that
                    capture attention.
                  </p>
                </div>
                <div className="timeline-node">3</div>
                <div className="timeline-content-right" />
              </div>

              <div className="timeline-item">
                <div className="timeline-content-left" />
                <div className="timeline-node">4</div>
                <div className="timeline-content-right">
                  <div className="timeline-step-number">04</div>
                  <h3 className="timeline-step-title">Optimize & Scale</h3>
                  <p className="timeline-step-description">
                    Continuous refinement and scaling based on real-time data
                    and performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio-showcase-section">
        <div className="portfolio-wrapper">
          <div className="portfolio-heading">
            <span className="portfolio-tag">Featured Work</span>
            <h2 className="portfolio-heading-title">Success Stories</h2>
            <p className="portfolio-heading-text">
              Real results from real partnerships. See how we've helped brands
              achieve extraordinary growth.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioProjects.map((project, idx) => (
              <div
                key={idx}
                className="portfolio-card"
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                style={
                  activeCard === idx
                    ? { outline: '2px solid rgba(255,169,63,.6)' }
                    : undefined
                }
              >
                <div className="portfolio-image-area">
                  {/* Numbering instead of icons */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 999,
                      background: 'var(--accent-orange)',
                      color: 'var(--deep-black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '2rem',
                      boxShadow: '0 10px 30px rgba(255,169,63,.35)',
                    }}
                  >
                    {idx + 1}
                  </div>
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-category">{project.category}</div>
                  <h3 className="portfolio-name">{project.name}</h3>
                  <p className="portfolio-info">{project.description}</p>
                  <div className="portfolio-metrics">
                    <div className="metric-item">
                      <div className="metric-value">{project.growth}</div>
                      <div className="metric-label">Growth</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">{project.engagement}</div>
                      <div className="metric-label">Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-carousel-section">
        <div className="testimonials-container">
          <div className="testimonials-header-area">
            <div className="testimonials-label">Client Success</div>
            <h2 className="testimonials-main-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-box">
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden>
                    {t.initial}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{t.name}</div>
                    <div className="author-position">{t.position}</div>
                    <div className="rating-stars" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <div className="faq-label">FAQ</div>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Got questions? We've got answers. Find everything you need to know
              about our services and process.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="contact-cta-text">
              Let's create something extraordinary together. Get in touch and
              discover how we can help your brand reach new heights.
            </p>
            <div className="contact-cta-buttons">
              <button
                className="cta-primary-btn"
                onClick={() => console.log('Get Started clicked')}
              >
                Get Started Today
              </button>
              <button
                className="cta-secondary-btn"
                onClick={() => console.log('Schedule Call clicked')}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}