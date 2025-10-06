// src/components/Mouse.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/mouse.css"; // Make sure the path is correct

export default function Mouse() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    // Initial positions
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    const speed = 0.2; // movement smoothing factor

    // Mouse move listener
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    // GSAP ticker for smooth movement
    const update = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      gsap.set(ball, { x: pos.x, y: pos.y });
    };
    gsap.ticker.add(update);

    // Hover effect on links/buttons
    const hoverIn = () => gsap.to(ball, { scale: 2, duration: 0.2 });
    const hoverOut = () => gsap.to(ball, { scale: 1, duration: 0.2 });
    const elements = document.querySelectorAll("a, button, .hoverable");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(update);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return <div id="magic-cursor" className="cursor-ball" ref={ballRef}></div>;
}
