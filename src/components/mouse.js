import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/mouse.css";

const NUM_TRAILS = 10; 
const SPEED = 0.3;

const Mouse = () => {
  const ballRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef([]);

  if (trailPos.current.length === 0) {
    for (let i = 0; i < NUM_TRAILS; i++) {
      trailPos.current.push({ x: 0, y: 0 });
    }
  }

  useEffect(() => {
    const ball = ballRef.current;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const updatePosition = () => {
      // main cursor
      pos.current.x += (mouse.current.x - pos.current.x) * SPEED;
      pos.current.y += (mouse.current.y - pos.current.y) * SPEED;
      gsap.set(ball, { x: pos.current.x, y: pos.current.y });

      // trails
      let prevX = pos.current.x;
      let prevY = pos.current.y;

      trailRefs.current.forEach((trail, i) => {
        trailPos.current[i].x += (prevX - trailPos.current[i].x) * SPEED;
        trailPos.current[i].y += (prevY - trailPos.current[i].y) * SPEED;

        gsap.set(trail, {
          x: trailPos.current[i].x,
          y: trailPos.current[i].y,
          opacity: 1 - i / NUM_TRAILS, // smooth fade
          scale: 1 - i * 0.05,         // optional: slightly smaller trails
        });

        prevX = trailPos.current[i].x;
        prevY = trailPos.current[i].y;
      });
    };

    gsap.ticker.add(updatePosition);
    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      gsap.ticker.remove(updatePosition);
    };
  }, []);

  return (
    <>
      <div ref={ballRef} id="magic-cursor"></div>
      {Array.from({ length: NUM_TRAILS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
        ></div>
      ))}
    </>
  );
};

export default Mouse;
