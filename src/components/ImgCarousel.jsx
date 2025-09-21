import React, { useState } from "react";
import "../css/imgcarousel.module.css";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import Workflow from "../components/WorkFlow";

const ImgCarousel = () => {
  const [isPaused] = useState(false);

  // Sample images - replace with your actual images
  const images = [
    {
      src: car1,
      alt: "Exponent Institute",
      link: "https://exponentinstitute.com/",
      title: "Exponent Institute",
      description: "Educational Excellence",
    },
    {
      src: car2,
      alt: "Shreeram Neuro Centre",
      link: "https://shreeramneurocentre.com/",
      title: "Shreeram Neuro Centre",
      description: "Healthcare Innovation",
    },
    {
      src: car3,
      alt: "Manohar Hospital",
      link: "https://manoharhospital.com/",
      title: "Manohar Hospital",
      description: "Medical Care Excellence",
    },
    {
      src: car4,
      alt: "Meliorist",
      link: "https://www.meliorist.in/",
      title: "Meliorist",
      description: "Digital Solutions",
    },
    {
      src: car5,
      alt: "Iphone",
      link: "https://apple-website-pi-blond.vercel.app/",
      title: "Iphone",
      description: "Moder Design",
    },
  ];

  // const handleMouseEnter = () => setIsPaused(true);
  // const handleMouseLeave = () => setIsPaused(false);

  // Calculate rotation angle based on number of images
  const angleIncrement = 360 / images.length;

  return (
    <>
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
        gap: "5px",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          zIndex: 10,
          position: "relative",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "#ff9f29", // ✅ correct property
            textShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
            marginTop:"2rem"
          }}
        >
          Our Featured Projects
        </h2>
        <p
          style={{
            fontSize: "1.5rem",
            opacity: 0.9,
            margin: 0,
            color: "#cbd5e1",
          }}
        >
          Discover our amazing work portfolio
        </p>
      </div>

      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          perspective: "1800px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            animation: isPaused ? "none" : "rotate360 25s infinite linear",
            transition: "animation-play-state 0.3s ease",
          }}
        >
          {images.map((image, index) => {
            const rotateY = angleIncrement * index;
            const translateZ = 450; // Distance from center - increased for better spacing

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: "420px",
                  height: "280px",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-210px",
                  marginTop: "-140px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease",
                  transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                }}
              >
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.6), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    transition: "all 0.4s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 60px rgba(0, 0, 0, 0.8), 0 12px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)";

                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.1)";

                    const overlay =
                      e.currentTarget.querySelector(".image-overlay");
                    if (overlay) {
                      overlay.style.transform = "translateY(0)";
                      overlay.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(0, 0, 0, 0.6), 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";

                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";

                    const overlay =
                      e.currentTarget.querySelector(".image-overlay");
                    if (overlay) {
                      overlay.style.transform = "translateY(10px)";
                      overlay.style.opacity = "0";
                    }
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                    />
                    <div
                      className="image-overlay"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(transparent, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))",
                        color: "white",
                        padding: "2.5rem 2rem 2rem 2rem",
                        transform: "translateY(10px)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "0 0 0.5rem 0",
                          color: "#ffffff",
                        }}
                      >
                        {image.title}
                      </h3>
                      <p
                        style={{
                          margin: "0 0 0.5rem 0",
                          fontSize: "0.9rem",
                          opacity: 0.8,
                          color: "#cbd5e1",
                        }}
                      >
                        {image.description}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "1rem",
                          opacity: 0.9,
                          color: "#e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        View Project →
                      </p>
                    </div>
                  </div>

                  {/* 3D Effect Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.1) 55%, transparent 70%)",
                      opacity: 0.4,
                      pointerEvents: "none",
                      borderRadius: "20px",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Center decoration */}
        {/* <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)",
              borderRadius: "50%",
              boxShadow:
                "0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.4)",
              animation: "pulse 4s infinite ease-in-out",
              border: "2px solid rgba(255, 255, 255, 0.8)",
            }}
          />
        </div> */}
      </div>

      <div
        style={{
          marginTop: "4rem",
          textAlign: "center",
          width: "100%",
          zIndex: 10,
          position: "relative",
        }}
      >
        <p
          style={{
            opacity: 0.7,
            fontSize: "1rem",
            margin: 0,
            color: "#94a3b8",
            fontWeight: 300,
            letterSpacing: "0.5px",
          }}
        ></p>
      </div>

      <style>{`
        @keyframes rotate360 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(-360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .carousel-face {
            width: 380px !important;
            height: 240px !important;
            margin-left: -190px !important;
            margin-top: -120px !important;
          }
        }

        @media (max-width: 768px) {
          .carousel-face {
            width: 300px !important;
            height: 200px !important;
            margin-left: -150px !important;
            margin-top: -100px !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-face {
            width: 260px !important;
            height: 180px !important;
            margin-left: -130px !important;
            margin-top: -90px !important;
          }
        }
      `}</style>
    </div>
    <Workflow/>
    </>
    
  );
};

export default ImgCarousel;
