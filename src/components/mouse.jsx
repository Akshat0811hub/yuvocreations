import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/hero.css';

export default function TactusHeader() {
  const cursorRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
        opacity: 1
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.25, duration: 0.25, ease: 'power3.out' });
    };
    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0.3, duration: 0.25, ease: 'power3.out' });
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, #nav-btn').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const icon = iconRef.current;
    const paths = icon.querySelectorAll('path');

    // Initial state for GSAP timeline
    gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    paths.forEach((path, i) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power4.inOut'
      }, i * 0.15);
    });
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>

      <div className="swoosh"></div>

      <nav className="sticky-nav">
        <div className="logo"></div>
        <div id="nav-btn" ref={iconRef}>
          <svg className="icon" viewBox="0 0 100 100">
            <path d="M 20,30 H 80" />
            <path d="M 20,50 H 80" />
            <path d="M 20,70 H 80" />
          </svg>
        </div>
      </nav>

    </>
  );
}