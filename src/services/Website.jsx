import React, { useState, useEffect } from 'react';
import '../pagescss/website.css';
import logo from '../assets/logobg.png';
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import car6 from "../assets/car6.png";



const WebsiteDesignPage = () => {
  // --- 1. State Definitions ---
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  // MISSING STATE FIXED: Added 'time' state
  const [time, setTime] = useState(new Date());

  // --- 2. Side Effects (Timers) ---
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- 3. Helper Functions ---
  
  // Format Time: 08:24:09 PM
const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  const hh = hours < 10 ? `0${hours}` : hours;
  const mm = minutes < 10 ? `0${minutes}` : minutes;
  const ss = seconds < 10 ? `0${seconds}` : seconds;

  return `${hh}:${mm}:${ss} ${ampm}`;
};


  // Format Date: 23-01.26 (Day-Month.Year)
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}.${year}`;
  };

  // --- 4. Data Arrays ---
 const portfolioItems = [
  {
    title: "Exponent Institute",
    category: "Education Website",
    image: car1,
    description: "A structured educational platform designed to build trust, clarity, and student engagement.",
    link: "https://exponentinstitute.com/"
  },
  {
    title: "Shreeram Neuro Centre",
    category: "Healthcare Website",
    image: car2,
    description: "A professional medical website focused on credibility, accessibility, and patient confidence.",
    link: "https://shreeramneurocentre.com/"
  },
  {
    title: "Manohar Hospital",
    category: "Hospital Website",
    image: car3,
    description: "A clean, information-driven hospital website built for clarity, speed, and usability.",
    link: "https://manoharhospital.com/"
  },
  {
    title: "Meliorist",
    category: "Corporate Website",
    image: car4,
    description: "A modern corporate presence designed to communicate expertise and digital capability.",
    link: "https://www.meliorist.in/"
  },
  {
    title: "Green Fungi",
    category: "E-Commerce Website",
    image: car5,
    description: "A minimal e-commerce experience focused on product clarity and seamless navigation.",
    link: "https://greenfungi.org/"
  },
  {
    title: "Sakra World Hospital",
    category: "Healthcare Reference",
    image: car6,
    description: "A large-scale healthcare website showcasing specialist profiles with structured navigation.",
    link: "https://www.sakraworldhospital.com/"
  }
];


const testimonials = [
  {
    content:
      "We wanted a website that reflected the natural experience of our agritourism project without feeling over-designed. The team focused on simplicity, clarity, and smooth navigation. The final site represents our brand well and helps visitors understand what we offer before they even contact us.",
    name: "Rahul Bagga",
    role: "Founder, Green Fungi Agritourism",
    avatar: "/images/testimonials/rahul-bagga.jpg"
  },
  {
    content:
      "Our requirement was a professional healthcare website that patients could easily understand and navigate. The team paid close attention to structure and content flow, which made the website both informative and accessible. The experience was smooth from start to finish.",
    name: "Dr. Anil Sharma",
    role: "Director, Shreeram Neuro Centre",
    avatar: "/images/testimonials/doctor-anil.jpg"
  },
  // {
  //   content:
  //     "The goal was to modernize our website and make information clearer for patients and their families. The new design feels clean, responsive, and easy to use. We’ve noticed fewer basic queries since the launch, which shows the website is doing its job.",
  //   name: "Administration Team",
  //   role: "Manohar Hospital",
  //   avatar: "/images/testimonials/manohar-admin.jpg"
  // },
  {
    content:
      "We needed a structured and easy-to-manage website for our institute. The team redesigned everything with clarity in mind, making it simpler for students to understand our courses and get in touch. Enquiry quality has improved since the update.",
    name: "Rohit Verma",
    role: "Founder, Exponent Institute",
    avatar: "/images/testimonials/rohit-verma.jpg"
  },
  // {
  //   content:
  //     "Our focus was on usability and performance rather than heavy design. The website now loads faster, works well across devices, and presents our services clearly. Communication throughout the project was consistent and transparent.",
  //   name: "Amit Gupta",
  //   role: "Co-Founder, Meliorist",
  //   avatar: "/images/testimonials/amit-gupta.jpg"
  // }
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
    <div className="brut-banner-outer">
      {/* Banner Section with Working Clock */}
      <section className="brut-banner-container">
        <div className="brut-grid-bg"></div>

        <div className="brut-logo">
        <img src={logo} alt="Yuvocreations Logo" className="brut-logo-img" />
        <span>YUVOCREATIONS</span>
        </div>



        <div className="brut-pixel-text brut-year">2026</div>

        <div className="brut-cluster-left">
          <div className="pixel-bg-main"></div>
          <div className="pixel-addon p-1"></div>
          <div className="pixel-addon p-2"></div>
          <h1 className="brut-headline">Tomorrow's <br />tech, today</h1>
        </div>

        <div className="brut-cluster-right">
          <div className="pixel-bg-small"></div>
          <div className="pixel-addon p-3"></div>
          <p className="brut-subtext">
            Professional Website Design That Converts
            {/* Experience <br /> cutting-edge <br /> innovation from <br /> your screen. */}
          </p>
        </div>

        <div className="brut-pixel-text brut-arrows">&gt;&gt;</div>

        <div className="brut-pixel-text brut-clock">
          {formatTime(time)} <br />
          {formatDate(time)}
        </div>

        <div className="brut-cta-wrapper">
  <a
    href="https://calendly.com/socialmedia-yuvocreations/30min"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="brut-cta-btn">Build With Us</button>
    <div className="brut-cta-shadow"></div>
  </a>
</div>

      </section>









      {/* Services Section */}
      
      <section className="webdesign-services-zone">
        <div className="webdesign-container">
          <div className="webdesign-section-header">
            <h2 className="webdesign-section-title">
  Our <span>Website Design</span>  Services
</h2>

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
      <h2 className="webdesign-section-title">
        Our <span className="highlight-orange">Recent Work</span>
      </h2>

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
                <span className="webdesign-portfolio-category">
                  {item.category}
                </span>

                <h3 className="webdesign-portfolio-title">
                  {item.title}
                </h3>

                <p className="webdesign-portfolio-desc">
                  {item.description}
                </p>

                {/* Show CTA only if link exists */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="webdesign-portfolio-btn"
                  >
                    View Live Website
                  </a>
                )}
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
  {/* Ambient dust element */}
  <div className="dust-orb"></div>

  <div className="webdesign-container">
    <div className="webdesign-section-header">
      <h2 className="webdesign-section-title">
        Our <span className="highlight-orange-dust">Design Process</span>
      </h2>

      <p className="webdesign-section-subtitle">
        A clear, structured approach focused on quality, performance, and results
      </p>
    </div>

    <div className="webdesign-process-timeline">
      <div className="webdesign-process-step">
        <div className="webdesign-step-number">1</div>
        <div className="webdesign-step-content">
          <h3 className="webdesign-step-title">Discovery & Strategy</h3>
          <p className="webdesign-step-text">
            We understand your business objectives, audience, and competitive landscape to define a clear strategic direction.
          </p>
        </div>
      </div>

      <div className="webdesign-process-step">
        <div className="webdesign-step-number">2</div>
        <div className="webdesign-step-content">
          <h3 className="webdesign-step-title">Design & Wireframing</h3>
          <p className="webdesign-step-text">
            We design intuitive wireframes and visual layouts that prioritize user experience and brand consistency.
          </p>
        </div>
      </div>

      <div className="webdesign-process-step">
        <div className="webdesign-step-number">3</div>
        <div className="webdesign-step-content">
          <h3 className="webdesign-step-title">Development & Testing</h3>
          <p className="webdesign-step-text">
            We transform designs into high-performance websites with clean code, followed by thorough cross-device testing.
          </p>
        </div>
      </div>

      <div className="webdesign-process-step">
        <div className="webdesign-step-number">4</div>
        <div className="webdesign-step-content">
          <h3 className="webdesign-step-title">Launch & Ongoing Support</h3>
          <p className="webdesign-step-text">
            We deploy your website smoothly and provide continuous support to ensure long-term stability and growth.
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
      <h2 className="webdesign-section-title">
        What Our <span className="highlight-orange">Clients Say</span>
      </h2>

      <p className="webdesign-section-subtitle">
        Real feedback from businesses we've worked with
      </p>
    </div>

    <div className="webdesign-testimonials-slider">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`webdesign-testimonial-card ${
            index === activeTestimonial ? "webdesign-active" : ""
          }`}
        >
          <div className="webdesign-testimonial-content">
            <p className="webdesign-testimonial-text">
              “{testimonial.content}”
            </p>

            <div className="webdesign-testimonial-author">
              <div className="webdesign-author-info">
                <h4 className="webdesign-author-name">
                  {testimonial.name}
                </h4>
                <p className="webdesign-author-role">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="webdesign-testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`webdesign-dot ${
              index === activeTestimonial ? "webdesign-active" : ""
            }`}
            onClick={() => setActiveTestimonial(index)}
            aria-label={`View testimonial ${index + 1}`}
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
      <h2 className="webdesign-section-title">
        Frequently Asked <span className="highlight-orange">Questions</span>
      </h2>
      <p className="webdesign-section-subtitle">
        Clear answers to help you understand our process, pricing, and support
      </p>
    </div>

    <div className="webdesign-faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className="webdesign-faq-item">
          <button
            className={`webdesign-faq-question ${
              activeFaq === index ? "webdesign-active" : ""
            }`}
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.question}</span>
            <span className="webdesign-faq-icon">+</span>
          </button>

          <div
            className={`webdesign-faq-answer ${
              activeFaq === index ? "webdesign-open" : ""
            }`}
          >
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
      <h2 className="webdesign-cta-title">
        Ready to <span className="highlight-orange">Transform</span> Your
        <br /> Online <span className="highlight-orange">Presence</span>?
      </h2>

      <p className="webdesign-cta-text">
        Let’s build a website that doesn’t just look good 
        <br />
        but <span className="highlight-orange">drives real business growth</span>.
      </p>

    <div className="webdesign-cta-buttons">
  <a
    href="mailto:contactus@yuvocreations.com"
    className="webdesign-cta-primary"
  >
    Get Free Quote
  </a>

  <a
    href="https://calendly.com/socialmedia-yuvocreations/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="webdesign-cta-secondary"
  >
    Book a Call
  </a>
</div>

    </div>
  </div>
</section>

    </div>
  );
};

export default WebsiteDesignPage;