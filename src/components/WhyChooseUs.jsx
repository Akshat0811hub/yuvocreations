import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../css/choose.css';

const features = [
  {
    title: "Data-Driven Strategies",
    description:
      "We leverage advanced analytics and market insights to create campaigns that deliver measurable results and maximize your ROI.",
  },
  {
    title: "Proven Track Record",
    description:
      "With years of experience and hundreds of successful campaigns, we've helped businesses of all sizes achieve their digital marketing goals.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Get complete visibility into your campaigns with detailed reports and real-time dashboards that show exactly where your investment is going.",
  },
  {
    title: "Dedicated Support Team",
    description:
      "Your success is our priority. Our expert team is always available to answer questions, provide guidance, and optimize your campaigns.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve with the latest digital marketing tools and platforms to give your brand a competitive advantage.",
  },
  {
    title: "Customized Solutions",
    description:
      "No cookie-cutter approaches here. We tailor every strategy to your unique business needs, industry, and target audience.",
  },
];

const WhyChooseUs = () => {
  // phase: 'closed' | 'preopen' | 'open'
  const [phase, setPhase] = useState('closed');
  const gridRef = useRef(null);
  const btnRef  = useRef(null);
  const cardRefs = useRef([]);

  // collect refs
  cardRefs.current = [];
  const setCardRef = (el) => el && cardRefs.current.push(el);

  // measure deltas (button center -> card center)
  const measureAndSetDeltas = () => {
    const grid = gridRef.current;
    const btn  = btnRef.current;
    if (!grid || !btn) return;

    const gridRect = grid.getBoundingClientRect();
    const btnRect  = btn.getBoundingClientRect();
    const btnCx = btnRect.left + btnRect.width / 2 - gridRect.left;
    const btnCy = btnRect.top  + btnRect.height / 2 - gridRect.top;

    cardRefs.current.forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - gridRect.left;
      const cy = r.top  + r.height / 2 - gridRect.top;
      el.style.setProperty('--dx', `${btnCx - cx}px`);
      el.style.setProperty('--dy', `${btnCy - cy}px`);
    });
  };

  // 2-phase open: preopen → (reflow) → open
  useLayoutEffect(() => {
    if (phase === 'preopen') {
      measureAndSetDeltas();
      const grid = gridRef.current;
      if (grid) void grid.offsetHeight; // force reflow
      requestAnimationFrame(() => setPhase('open'));
    }
  }, [phase]);

  // keep deltas sensible on resize when open
  useEffect(() => {
    const onResize = () => {
      if (phase !== 'open') return;
      measureAndSetDeltas();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [phase]);

  const isOpen = phase === 'open';

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Partner with a digital marketing agency that's committed to driving your success through innovation, expertise, and results.
          </p>

          <div className="trigger-wrap">
            <button
              ref={btnRef}
              className={`cta-button trigger ${isOpen ? 'is-open' : ''}`}
              aria-expanded={isOpen}
              aria-controls="features-grid"
              onClick={() => {
                if (isOpen) setPhase('closed');
                else setPhase('preopen');
              }}
            >
              {isOpen ? 'Hide Features' : 'Show Features'}
            </button>
          </div>
        </div>

        <div
          id="features-grid"
          ref={gridRef}
          className={`features-grid ${phase}`}
        >
          {features.map((feature, index) => (
            <article
              key={feature.title}
              ref={setCardRef}
              className="feature-card burst-item"
              style={{ '--i': index }}
              aria-hidden={!isOpen}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="feature-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
