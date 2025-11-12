import React from "react";
import "../pagescss/Careers.css";

function Careers() {
  return (
    <main className="careers">
      {/* HERO */}
      <section className="careers__hero">
        <div className="container">
          <p className="eyebrow">We're hiring</p>
          <h1>Build brands people actually love.</h1>
          <p className="sub">
            Join a digital marketing team where smart experiments, sharp craft, and real outcomes matter.
          </p>
          {/* ⬇️ jobs section removed, so CTA points to apply */}
          <a href="#apply" className="btn btn--primary">Apply now</a>
        </div>
        <div className="hero__bg" aria-hidden="true"></div>
      </section>

      {/* HIGHLIGHTS */}
      
      {/* GALLERY (abstract placeholders) */}
      <section className="careers__gallery container">
        <div className="gallery__cell" data-caption="Campaign War Room"></div>
        <div className="gallery__cell" data-caption="Weekly Show &amp; Tell"></div>
        <div className="gallery__cell" data-caption="Creative Jam"></div>
        <div className="gallery__cell" data-caption="Dashboards that sing"></div>
      </section>

      {/* PERKS */}
      

      {/* HIRING PROCESS */}
      <section className="careers__process container">
        <h2>How we hire</h2>
        <ol className="steps">
          <li><strong>Intro chat</strong> — 20 min to learn about each other.</li>
          <li><strong>Craft interview</strong> — show us your thinking with real problems.</li>
          <li><strong>Team fit</strong> — meet your pod and future stakeholders.</li>
          <li><strong>Offer</strong> — clear comp, growth path, and start date.</li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="careers__faq container">
        <h2>FAQ</h2>
        <details>
          <summary>Do you support remote work?</summary>
          <p>Yes — remote within India, with optional quarterly meetups in Mumbai or Bengaluru.</p>
        </details>
        <details>
          <summary>What does growth look like?</summary>
          <p>Clear levels, defined competencies, and quarterly reviews with actionable feedback.</p>
        </details>
        <details>
          <summary>Do I need agency experience?</summary>
          <p>Helpful, not mandatory. We value outcomes, curiosity, and craft.</p>
        </details>
      </section>

      {/* CTA */}
      <section className="careers__cta container" id="apply">
        <h2>Didn’t find your role?</h2>
        <p>Tell us how you'll raise the bar. We read every application.</p>
        <a
          className="btn btn--primary"
          href="mailto:careers@youragency.com?subject=General%20Application"
        >
          Send your profile
        </a>
      </section>
    </main>
  );
}

export default Careers;
export { Careers };
