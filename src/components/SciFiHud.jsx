import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SciFiHUD = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        resolution: {
          value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
        },
      },
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;

        float rand(vec2 co){
          return fract(sin(dot(co.xy,vec2(12.9898,78.233))) * 43758.5453);
        }

        void main(){
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          float brightness = pow(rand(floor(uv*vec2(200.0,200.0) + time*10.0)), 20.0);
          vec3 col = vec3(brightness);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      material.uniforms.resolution.value.set(
        canvas.clientWidth,
        canvas.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        background: "black", // safe local background
      }}
    >
      {/* Shader Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* HUD Overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Orbitron', sans-serif",
          color: "#0ff",
          textShadow: "0 0 8px #0ff",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            border: "2px solid #0ff",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            filter: "drop-shadow(0 0 8px cyan)",
          }}
        >
          {/* Left Text */}
          <div style={{ width: "25%" }}>
            <h5 style={{ margin: 0, fontSize: "1.5em" }}>Space Domination</h5>
          </div>

          {/* Center Border */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <svg viewBox="0 0 620 30" style={{ width: "100%" }}>
              <path
                d="M628.587,25.19l-7.963-13.811h-0.008L617.525,6.03A12.244,12.244,0,0,0,607.74.994H409.994V0h198.43c4.149,0,8.2,2.1,9.748,4.781l2.949,5.089h0.028l8.086,14.062A12.237,12.237,0,0,0,639.03,29h80.976v0.006h77.735a12.243,12.243,0,0,0,9.784-5.037l3.091-5.348h0.008l7.963-13.811C820.142,2.113,824.192,0,828.345,0H1029.99V1H829.029a12.237,12.237,0,0,0-9.794,5.068L811.15,20.131h-0.029l-2.948,5.089C806.618,27.9,802.573,30,798.424,30H638.345C634.192,30,630.142,27.887,628.587,25.19Z"
                transform="translate(-410)"
                fill="none"
                stroke="#0ff"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Right Text */}
          <div style={{ width: "25%", textAlign: "right" }}>
            <h5 style={{ margin: 0, fontSize: "1.5em" }}>SciFi Mission</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciFiHUD;
