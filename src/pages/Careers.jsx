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
      <section className="careers__highlights container">
        <div className="highlight">
          <span className="kpi">200M+</span>
          <p>monthly impressions managed</p>
        </div>
        <div className="highlight">
          <span className="kpi">120%</span>
          <p>avg. YoY client growth on paid</p>
        </div>
        <div className="highlight">
          <span className="kpi">35+</span>
          <p>marketers, analysts & creatives</p>
        </div>
        <div className="highlight">
          <span className="kpi">#1</span>
          <p>place to learn fast (our bias)</p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="careers__why container">
        <div className="why__copy">
          <h2>Why join our crew</h2>
          <p>
            We ship bold ideas, measure everything, and celebrate outcomes. You'll get ownership,
            thoughtful feedback, and space to experiment.
          </p>
          <ul className="bullets">
            <li>Real impact — own channels and see results weekly</li>
            <li>Strong craft culture — crits, playbooks, and demos</li>
            <li>Learning stipend, conferences, and mentorship</li>
            <li>Remote-friendly with flexible hours</li>
          </ul>
        </div>
        <div className="why__panel">
          <div className="panel__card">Growth paths with clear ladders</div>
          <div className="panel__card">Cross-functional pods</div>
          <div className="panel__card">No drama, just momentum</div>
          <div className="panel__card">Outcome &gt; outputs</div>
        </div>
      </section>

      {/* GALLERY (abstract placeholders) */}
      <section className="careers__gallery container">
        <div className="gallery__cell" data-caption="Campaign War Room"></div>
        <div className="gallery__cell" data-caption="Weekly Show &amp; Tell"></div>
        <div className="gallery__cell" data-caption="Creative Jam"></div>
        <div className="gallery__cell" data-caption="Dashboards that sing"></div>
      </section>

      {/* PERKS */}
      <section className="careers__perks container" id="perks">
        <h2>Perks &amp; benefits</h2>
        <div className="perks__grid">
          <div className="perk">
            <h3>Hybrid &amp; Remote</h3>
            <p>Work where you're most effective.</p>
          </div>
          <div className="perk">
            <h3>Learning Budget</h3>
            <p>₹50k/year for books &amp; courses.</p>
          </div>
          <div className="perk">
            <h3>Health Cover</h3>
            <p>Comprehensive plan for you &amp; fam.</p>
          </div>
          <div className="perk">
            <h3>No Meeting Fridays</h3>
            <p>Deep work &gt; calendar chaos.</p>
          </div>
          <div className="perk">
            <h3>Latest Tools</h3>
            <p>From GA4 to the good keyboards.</p>
          </div>
          <div className="perk">
            <h3>Flexible Leave</h3>
            <p>Take time when you need it.</p>
          </div>
        </div>
      </section>

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
