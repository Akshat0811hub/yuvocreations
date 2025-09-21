import React, { useState, useEffect } from 'react';
import '../css/Work.css';

export default function ModernWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  
  const workflowSteps = [
    {
      id: 1,
      title: "Plan & Strategy",
      description: "Define goals, target audience, and create comprehensive content calendar",
      icon: "🎯",
      color: "purple-pink",
      details: ["Market Research", "Content Calendar", "Goal Setting"]
    },
    {
      id: 2,
      title: "Create Content",
      description: "Design engaging posts, reels, stories and advertisements",
      icon: "✨",
      color: "blue-cyan",
      details: ["Visual Design", "Copywriting", "Video Creation"]
    },
    {
      id: 3,
      title: "Promote & Amplify",
      description: "Launch paid campaigns and collaborate with influencers",
      icon: "🚀",
      color: "green-teal",
      details: ["Paid Advertising", "Influencer Outreach", "Cross-platform Promotion"]
    },
    {
      id: 4,
      title: "Measure & Optimize",
      description: "Track performance metrics and optimize for better results",
      icon: "📊",
      color: "orange-red",
      details: ["Analytics Review", "Performance Tracking", "Strategy Refinement"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="workflow-container">
      {/* Header */}
      <div className="workflow-header">
        <div className="title-container">
          <span className="title-work">WORK</span>
          <span className="title-flow">FLOW</span>
        </div>
        <div className="title-underline"></div>
        <p className="workflow-subtitle">
          Digital Marketing Process That Delivers Results
        </p>
      </div>

      {/* Main Workflow Container */}
      <div className="workflow-main">
        {/* Desktop View */}
        <div className="workflow-desktop">
          <div className="workflow-steps-container">
            {/* Connection Lines */}
            <div className="workflow-connections">
              {workflowSteps.slice(0, -1).map((_, index) => (
                <div
                  key={index}
                  className={`connection-line connection-${index + 1} ${
                    activeStep > index ? 'active' : ''
                  }`}
                />
              ))}
            </div>

            {/* Workflow Steps */}
            <div className="workflow-grid">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`workflow-step ${activeStep === index ? 'active' : ''} step-${step.color}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="workflow-card">
                    {/* Number Badge */}
                    <div className={`step-badge badge-${step.color}`}>
                      {step.id}
                    </div>
                    
                    {/* Icon */}
                    <div className="step-icon">{step.icon}</div>
                    
                    {/* Content */}
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                      
                      {/* Details */}
                      <div className="step-details">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className={`detail-tag tag-${step.color}`}
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="step-progress">
                      <div 
                        className={`progress-bar progress-${step.color} ${
                          activeStep >= index ? 'filled' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="workflow-mobile">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className={`mobile-step ${activeStep === index ? 'active' : ''} step-${step.color}`}
            >
              <div className="mobile-card">
                <div className="mobile-header">
                  <div className={`mobile-badge badge-${step.color}`}>
                    {step.id}
                  </div>
                  <div className="mobile-icon">{step.icon}</div>
                </div>
                
                <div className="mobile-content">
                  <h3 className="mobile-title">{step.title}</h3>
                  <p className="mobile-description">{step.description}</p>
                  
                  <div className="mobile-details">
                    {step.details.map((detail, idx) => (
                      <span key={idx} className={`mobile-tag tag-${step.color}`}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {index < workflowSteps.length - 1 && (
                <div className={`mobile-connector ${activeStep > index ? 'active' : ''}`}>
                  <div className="connector-line" />
                  <div className="connector-arrow">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Indicators */}
        <div className="step-indicators">
          {workflowSteps.map((_, index) => (
            <button
              key={index}
              className={`indicator ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}