import React, { useState } from "react";
import "../css/imgcarousel.css";

const ImgCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Sample images - replace with your actual images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      alt: "Exponent Institute",
      link: "https://exponentinstitute.com/",
      title: "Exponent Institute"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      alt: "Shreeram Neuro Centre", 
      link: "https://shreeramneurocentre.com/",
      title: "Shreeram Neuro Centre"
    },
    {
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop",
      alt: "Manohar Hospital",
      link: "https://manoharhospital.com/",
      title: "Manohar Hospital"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      alt: "Meliorist",
      link: "https://www.meliorist.in/",
      title: "Meliorist"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      alt: "Project 5",
      link: "#",
      title: "Project Five"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      alt: "Project 6",
      link: "#", 
      title: "Project Six"
    }
  ];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">Our Featured Projects</h2>
        <p className="carousel-subtitle">Discover our amazing work portfolio</p>
      </div>
      
      <div className="carousel-container">
        <div 
          className={`carousel-3d ${isPaused ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, index) => {
            const rotateY = (360 / images.length) * index;
            const translateZ = 280; // Distance from center
            
            return (
              <div
                key={index}
                className="carousel-face"
                style={{
                  transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`
                }}
              >
                <a 
                  href={image.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="carousel-link"
                >
                  <div className="image-container">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="carousel-image"
                    />
                    <div className="image-overlay">
                      <h3 className="image-title">{image.title}</h3>
                      <p className="image-cta">View Project →</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Center decoration */}
        <div className="carousel-center">
          <div className="center-dot"></div>
        </div>
      </div>
      
      <div className="carousel-controls">
        <p className="control-text">Hover to pause • Click to visit</p>
      </div>
    </div>
  );
};

export default ImgCarousel;