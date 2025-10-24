import React, { useState } from "react";
import styles from "../css/imgcarousel.module.css";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import Workflow from "../components/WorkFlow";

const ImgCarousel = () => {
  const [isPaused] = useState(false);

  const images = [
    {
      src: car1,
      link: "https://exponentinstitute.com/",
      title: "Exponent Institute",
      description: "Educational Excellence",
    },
    {
      src: car2,
      link: "https://shreeramneurocentre.com/",
      title: "Shreeram Neuro Centre",
      description: "Healthcare Innovation",
    },
    {
      src: car3,
      link: "https://manoharhospital.com/",
      title: "Manohar Hospital",
      description: "Medical Care Excellence",
    },
    {
      src: car4,
      link: "https://www.meliorist.in/",
      title: "Meliorist",
      description: "Digital Solutions",
    },
    {
      src: car5,
      link: "https://greenfungi.org/",
      title: "Green Fungi",
      description: "Minimal E-Commerce",
    },
  ];

  const angleIncrement = 360 / images.length;

  return (
    <>
      {/* === Carousel Section === */}
      <div className={styles.carouselSection}>
        {/* Header */}
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>Our Featured Projects</h2>
          <p className={styles.carouselSubtitle}>
            Discover our amazing work portfolio
          </p>
        </div>

        {/* Carousel Container */}
        <div className={styles.carouselContainer}>
          <div
            className={styles.carousel3d}
            style={{
              animation: isPaused
                ? "none"
                : "rotate360 55s infinite linear",
            }}
          >
            {images.map((image, index) => {
              const rotateY = angleIncrement * index; // ✅ define rotation for each card

              return (
                <div
                  key={index}
                  className={styles.carouselFace}
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(var(--circle-radius))`,
                  }}
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.carouselLink}
                  >
                    <div className={styles.imageContainer}>
                      <img
                        src={image.src}
                        alt={image.title}
                        className={styles.carouselImage}
                      />
                      <div className={styles.imageOverlay}>
                        <h3 className={styles.imageTitle}>{image.title}</h3>
                        <p className={styles.imageDesc}>
                          {image.description}
                        </p>
                        <p className={styles.imageCta}>View Project →</p>
                      </div>
                    </div>

                    {/* Subtle highlight reflection layer */}
                    <div className={styles.lightReflection}></div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Keyframes definition */}
          <style>{`
            @keyframes rotate360 {
              from { transform: rotateY(0deg); }
              to { transform: rotateY(-360deg); }
            }
          `}</style>
        </div>

        {/* Optional Footer/Controls */}
        <div className={styles.carouselControls}>
          <p className={styles.carouselFooterText}>
            {/* You can add pagination or pause info here later */}
          </p>
        </div>
      </div>

      {/* WorkFlow Section Below Carousel */}
      <Workflow />
    </>
  );
};

export default ImgCarousel;
