import React from 'react';
import { Monitor } from 'lucide-react';
import '../css/Carousel.css'; // CSS import

const Carousel = () => {
  const items = [
    "Web Design",
    "Software Development", 
    "UI/UX Design",
    "E-Commerce Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "SEO"
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="relative">
        {/* Horizontal scrolling container */}
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {duplicatedItems.map((item, index) => (
            <React.Fragment key={index}>
              {/* Service Name */}
              <h2 className="service-text">
                {item}
              </h2>

              {/* Icon between services (skip last one in a loop) */}
              {index !== duplicatedItems.length - 1 && (
                <div className="service-icon">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default Carousel;
