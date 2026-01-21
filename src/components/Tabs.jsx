import React, { useState } from "react";
import "../css/Tabs.css";
import webDevImg from "../assets/web-dev.png";
import brandingImg from "../assets/branding.png";
import marketingImg from "../assets/marketing.png";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="services-section">
      {/* Section Heading */}
      <h1 className="services-heading">
        <span className="services-our">Our</span>
        <span className="services-text">Services</span>
      </h1>

      <div className="tabs-wrap">
        {/* Tabs Buttons */}
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

        {/* Tabs Content */}
        <div className="tab-contents">
          {/* TAB 1 */}
          <div className={`tab-content ${activeTab === "tab1" ? "show" : ""}`}>
            <div className="tab-grid">
              <div className="tab-text">
                <h3>Website Development</h3>
                <p>
                  ● Website Development<br />
                  ● E-Commerce Development<br />
                  ● UI/UX Design<br />
                  ● Website Maintenance & Support<br />
                  ● Hosting & Domain Services
                </p>
              </div>

              <div className="tab-image">
                <img
                  src={webDevImg}
                  alt="Web Development Services"
                />
              </div>
            </div>
          </div>

          {/* TAB 2 */}
          <div className={`tab-content ${activeTab === "tab2" ? "show" : ""}`}>
            <div className="tab-grid">
              <div className="tab-text">
                <h3>Branding & Design</h3>
                <p>
                  ● Logo & Brand Identity<br />
                  ● Graphic Design<br />
                  ● Video Editing
                </p>
              </div>

              <div className="tab-image">
                <img
                  src={brandingImg} 
                  alt="Branding and Design Services"
                />
              </div>
            </div>
          </div>

          {/* TAB 3 */}
          <div className={`tab-content ${activeTab === "tab3" ? "show" : ""}`}>
            <div className="tab-grid">
              <div className="tab-text">
                <h3>Digital Marketing & Growth</h3>
                <p>
                  ● Digital Marketing<br />
                  ● Social Media Marketing<br />
                  ● SEO (Search Engine Optimization)<br />
                  ● Content Writing<br />
                  ● PPC Advertising (Google & Meta Ads)<br />
                  ● Email Marketing<br />
                  ● Influencer Marketing<br />
                  ● Online Reputation Management
                </p>
              </div>

              <div className="tab-image">
                <img
                  src={marketingImg}
                  alt="Digital Marketing Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
