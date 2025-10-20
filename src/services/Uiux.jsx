import React from 'react';
import '../pagescss/uiux.css';
import { ArrowRight, Zap } from 'lucide-react';

export default function Uiux() {
  return (
    <div className="dmkt-uiux-wrapper">
      {/* Hero Section */}
      <section className="dmkt-hero-segment">
        <div className="dmkt-hero-content">
          <div className="dmkt-hero-text-block">
            <h1 className="dmkt-hero-heading">
              Design That Converts
            </h1>
            <p className="dmkt-hero-subtext">
              Crafted experiences that connect with your audience. We blend aesthetics with functionality to create digital solutions that drive results.
            </p>
            <button className="dmkt-hero-button">
              Explore Our Work
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="dmkt-hero-visual">
            <div className="dmkt-gradient-box dmkt-gradient-primary"></div>
            <div className="dmkt-gradient-box dmkt-gradient-secondary"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="dmkt-services-segment">
        <div className="dmkt-section-header">
          <h2 className="dmkt-section-title">Our Design Services</h2>
          <div className="dmkt-title-underline"></div>
        </div>

        <div className="dmkt-services-grid">
          <div className="dmkt-service-card">
            <div className="dmkt-card-icon-container dmkt-icon-style-1">
              <Zap size={32} />
            </div>
            <h3 className="dmkt-card-title">Web Design</h3>
            <p className="dmkt-card-description">
              Modern websites that capture attention and drive engagement through intuitive navigation and stunning visuals.
            </p>
          </div>

          <div className="dmkt-service-card">
            <div className="dmkt-card-icon-container dmkt-icon-style-2">
              <Zap size={32} />
            </div>
            <h3 className="dmkt-card-title">App Design</h3>
            <p className="dmkt-card-description">
              User-centric mobile and web applications built with precision and purpose for optimal user experiences.
            </p>
          </div>

          <div className="dmkt-service-card">
            <div className="dmkt-card-icon-container dmkt-icon-style-3">
              <Zap size={32} />
            </div>
            <h3 className="dmkt-card-title">Branding</h3>
            <p className="dmkt-card-description">
              Cohesive brand identities that tell your story and establish lasting connections with your target audience.
            </p>
          </div>

          <div className="dmkt-service-card">
            <div className="dmkt-card-icon-container dmkt-icon-style-1">
              <Zap size={32} />
            </div>
            <h3 className="dmkt-card-title">UX Strategy</h3>
            <p className="dmkt-card-description">
              Strategic planning and research that forms the foundation of exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="dmkt-process-segment">
        <div className="dmkt-section-header">
          <h2 className="dmkt-section-title">Our Design Process</h2>
          <div className="dmkt-title-underline"></div>
        </div>

        <div className="dmkt-process-timeline">
          <div className="dmkt-process-step">
            <div className="dmkt-step-number">01</div>
            <h3 className="dmkt-step-title">Discovery</h3>
            <p className="dmkt-step-text">We dive deep into understanding your goals, audience, and market landscape.</p>
          </div>

          <div className="dmkt-timeline-connector"></div>

          <div className="dmkt-process-step">
            <div className="dmkt-step-number">02</div>
            <h3 className="dmkt-step-title">Design</h3>
            <p className="dmkt-step-text">Creating wireframes and visual designs that align with your brand vision.</p>
          </div>

          <div className="dmkt-timeline-connector"></div>

          <div className="dmkt-process-step">
            <div className="dmkt-step-number">03</div>
            <h3 className="dmkt-step-title">Testing</h3>
            <p className="dmkt-step-text">Rigorous user testing to ensure optimal performance and user satisfaction.</p>
          </div>

          <div className="dmkt-timeline-connector"></div>

          <div className="dmkt-process-step">
            <div className="dmkt-step-number">04</div>
            <h3 className="dmkt-step-title">Launch</h3>
            <p className="dmkt-step-text">Seamless deployment and continuous support for your digital product.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dmkt-cta-segment">
        <div className="dmkt-cta-inner">
          <h2 className="dmkt-cta-heading">Ready to Transform Your Digital Presence?</h2>
          <p className="dmkt-cta-text">Let's create something extraordinary together.</p>
          <button className="dmkt-cta-button">Start Your Project</button>
        </div>
      </section>
    </div>
  );
}