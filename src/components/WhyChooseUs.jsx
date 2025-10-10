import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import '../css/choose.css';
import teamImage from '../assets/team-image.webp'; // Make sure your image path is correct

// --- Google Font Import ---
const fontUrl = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap";
if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

const features = [
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20V16"/></svg>,
        title: "Data-Driven Strategies", 
        description: "We leverage advanced analytics to create campaigns that deliver measurable results and maximize your ROI." 
    },
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>,
        title: "Proven Track Record", 
        description: "With years of experience, we have a history of achieving and exceeding digital marketing goals." 
    },
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"/><path d="m22 12-4.5 4.5L16 15"/></svg>,
        title: "Transparent Reporting", 
        description: "Get complete visibility with detailed, real-time dashboards that show exactly where your investment is going." 
    },
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>,
        title: "Dedicated Support", 
        description: "Your success is our priority. Our expert team is always available to provide guidance and optimize your campaigns." 
    },
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
        title: "Cutting-Edge Technology", 
        description: "We stay ahead of the curve with the latest marketing tools and platforms to give your brand a competitive advantage." 
    },
    { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="m12 22.08V12"/></svg>,
        title: "Customized Solutions", 
        description: "No cookie-cutter approaches here. We tailor every strategy to your unique business needs, industry, and audience." 
    },
];


const WhyChooseUs = () => {
    const [popupState, setPopupState] = useState('closed'); // 'closed', 'opening', 'closing'
    const [phase, setPhase] = useState('closed');
    const gridRef = useRef(null);
    const btnRef = useRef(null);
    const cardRefs = useRef([]);
    cardRefs.current = [];
    const setCardRef = (el) => el && cardRefs.current.push(el);

    const handleClose = () => {
        setPopupState('closing');
    };

    useEffect(() => {
        if (popupState === 'opening') {
            setPhase('preopen');
        } else if (popupState === 'closing') {
            const timer = setTimeout(() => {
                setPopupState('closed');
                setPhase('closed');
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [popupState]);
    
    // FIX: The logic inside this hook was missing. It has been restored.
    useLayoutEffect(() => {
        if (phase === 'preopen') {
            const grid = gridRef.current;
            const btn = btnRef.current;
            if (!grid || !btn) return;
            const gridRect = grid.getBoundingClientRect();
            const btnRect = btn.getBoundingClientRect();
            const btnCx = btnRect.left + btnRect.width / 2 - gridRect.left;
            const btnCy = btnRect.top + btnRect.height / 2 - gridRect.top;
            cardRefs.current.forEach(el => {
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width / 2 - gridRect.left;
                const cy = r.top + r.height / 2 - gridRect.top;
                el.style.setProperty('--dx', `${btnCx - cx}px`);
                el.style.setProperty('--dy', `${cy - btnCy}px`);
            });
            void grid.offsetHeight; // Force browser reflow
            requestAnimationFrame(() => setPhase('open'));
        }
    }, [phase]);

    return (
        <div className="why-choose-us-wrapper">
            <section className="why-choose-us">
                <div className="section-container">
                    <div className="section-graphic">
                        <div className="photo-stack">
                           <img src={teamImage} alt="A modern business team collaborating" />
                        </div>
                    </div>
                    <div className="section-content">
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="section-subtitle">
                            We're not just another agency. We're your dedicated partner in growth, committed to crafting bespoke strategies that deliver tangible, lasting results.
                        </p>
                        <button ref={btnRef} className="cta-button" onClick={() => setPopupState('opening')}>
                            Explore Our Advantages
                        </button>
                    </div>
                </div>
            </section>

            {popupState !== 'closed' && (
                <div className={`popup-overlay ${popupState}`} onClick={handleClose}>
                    <div className={`popup-content ${popupState}`} onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>&times;</button>
                        <h3 className="popup-title">Our Core Advantages</h3>
                        <div id="features-grid" ref={gridRef} className={`features-grid ${popupState === 'opening' ? phase : 'closed'}`}>
                            {features.map((feature, index) => (
                                <article key={feature.title} ref={setCardRef} className="feature-card burst-item" style={{ '--i': index }}>
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h4 className="feature-title">{feature.title}</h4>
                                    <p className="feature-description">{feature.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhyChooseUs;