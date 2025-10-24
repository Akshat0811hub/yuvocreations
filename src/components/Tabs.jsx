import React, { useState } from "react";
import "../css/Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="services-section">
      <h1 className="services-heading">Our Services</h1>

      <div className="tabs-wrap">
        {/* Tab buttons */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            Web Development & Support
          </button>

          <button
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            Branding & Design
          </button>

          <button
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => setActiveTab("tab3")}
          >
            Digital Marketing & Growth
          </button>
        </div>

        {/* Content area */}
        <div className="tab-contents">
          <div className={`tab-content ${activeTab === "tab1" ? "show" : ""}`}>
            <h3>Website Development</h3>
            <p>
              ● Website Development
              <br /> ● E-Commerce Development
              <br /> ● UI/UX Design
              <br /> ● Website Maintenance & Support
              <br /> ● Hosting & Domain Services
            </p>
          </div>

          <div className={`tab-content ${activeTab === "tab2" ? "show" : ""}`}>
            <h3>Branding & Design</h3>
            <p>
              ● Logo & Brand Identity
              <br /> ● Graphic Design
              <br /> ● Video Editing
            </p>
          </div>

          <div className={`tab-content ${activeTab === "tab3" ? "show" : ""}`}>
            <h3>Digital Marketing & Growth</h3>
            <p>
              ● Digital Marketing
              <br /> ● Social Media Marketing
              <br /> ● SEO (Search Engine Optimization)
              <br /> ● Content Writing
              <br /> ● PPC Advertising (Google & Meta Ads)
              <br /> ● Email Marketing
              <br /> ● Influencer Marketing
              <br /> ● Online Reputation Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
