import React from 'react';
import '../css/banner.css';

export default function HeadlineSection() {
  return (
    <>
      <div className="headline">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <clipPath id="left">
              <rect x="0" y="0" width="600" height="600" />
            </clipPath>
            <clipPath id="right">
              <rect x="600" y="0" width="600" height="600" />
            </clipPath>
          </defs>

          {/* Cyan Text - Clipped to Left Half, Skewed Down/Right */}
          <text
            x="50"
            y="150"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="cyan"
            clipPath="url(#left)"
            transform="skewY(-8) translate(0,85)"
          >
            LOOK AT YOUR
          </text>
          <text
            x="50"
            y="300"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="cyan"
            clipPath="url(#left)"
            transform="skewY(-8) translate(0,85)"
          >
            BUSINESS FROM A
          </text>
          <text
            x="50"
            y="450"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="cyan"
            clipPath="url(#left)"
            transform="skewY(-8) translate(0,85)"
          >
            DIFFERENT ANGLE
          </text>

          {/* Black Text - Clipped to Right Half, Skewed Up/Left */}
          <text
            x="50"
            y="150"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="black"
            clipPath="url(#right)"
            transform="skewY(8) translate(0,-84)"
          >
            LOOK AT YOUR
          </text>
          <text
            x="50"
            y="300"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="black"
            clipPath="url(#right)"
            transform="skewY(8) translate(0,-84)"
          >
            BUSINESS FROM A
          </text>
          <text
            x="50"
            y="450"
            fontSize="120"
            fontWeight="900"
            textLength="1100"
            className="black"
            clipPath="url(#right)"
            transform="skewY(8) translate(0,-84)"
          >
            DIFFERENT ANGLE {/* <--- This line is corrected */}
          </text>
        </svg>
      </div>
      <div className="vertical-left">YUVOCREATIONS</div>
      <div className="vertical-right">Let's Connect</div>
    </>
  );
}