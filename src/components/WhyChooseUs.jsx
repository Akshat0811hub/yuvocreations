import React from 'react';
import '../css/choose.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Data-Driven Strategies",
      description: "We leverage advanced analytics and market insights to create campaigns that deliver measurable results and maximize your ROI."
    },
    {
      title: "Proven Track Record",
      description: "With years of experience and hundreds of successful campaigns, we've helped businesses of all sizes achieve their digital marketing goals."
    },
    {
      title: "Transparent Reporting",
      description: "Get complete visibility into your campaigns with detailed reports and real-time dashboards that show exactly where your investment is going."
    },
    {
      title: "Dedicated Support Team",
      description: "Your success is our priority. Our expert team is always available to answer questions, provide guidance, and optimize your campaigns."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We stay ahead of the curve with the latest digital marketing tools and platforms to give your brand a competitive advantage."
    },
    {
      title: "Customized Solutions",
      description: "No cookie-cutter approaches here. We tailor every strategy to your unique business needs, industry, and target audience."
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Partner with a digital marketing agency that's committed to driving your success through innovation, expertise, and results.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;