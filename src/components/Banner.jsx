import React, { useEffect } from "react";
import { gsap } from "gsap";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.css";
import "../css/animated.css";

const Banner = () => {
  useEffect(() => {
    gsap.ticker.fps(60);

    const banner = document.getElementById("banner"),
      slide1 = document.getElementById("slide1"),
      createEl = document.querySelector("h1"),
      stunningEl = document.querySelector("h2"),
      animationsEl = document.querySelector("h3"),
      forEl = document.querySelector("h4"),
      deviceHead = document.getElementById("deviceHead"),
      tablet = document.getElementById("tablet"),
      desktop = document.getElementById("desktop"),
      laptop = document.getElementById("laptop"),
      mobile = document.getElementById("mobile"),
      iphone = document.getElementById("iphone"),
      logoman = document.getElementById("logoman"),
      learnMore = document.getElementById("learnMore"),
      replay = document.getElementById("replay");

    let timeline;

    function initCSS() {
      gsap.set(animationsEl, { rotation: 90 });
      gsap.set(forEl, { autoAlpha: 0 });
      gsap.set(deviceHead, { transformPerspective: 600 });
      gsap.set(tablet, { scale: 0.34, y: 18, x: -38 });
      gsap.set("#slider", { autoAlpha: 0 });
    }

    function getIntroTextTimeline() {
      const tl = gsap.timeline();
      tl.from(createEl, { duration: 0.4, scale: 0.2, autoAlpha: 0, ease: "back.out(1.7)" })
        .from(stunningEl, { duration: 0.2, top: -60 }, "+=0.1")
        .from(animationsEl, { duration: 0.4, top: 400, ease: "power2.in" })
        .to(slide1, { duration: 0.3, rotation: -90, left: -125, top: 26 }, "rotateOut")
        .to(stunningEl, { duration: 0.2, left: -300 }, "rotateOut")
        .to(animationsEl, { duration: 0.2, left: 30 }, "+=0.2")
        .to(animationsEl, { duration: 0.2, left: 122 }, "for")
        .to(forEl, { duration: 0.2, autoAlpha: 1 }, "for")
        .add("introOut", "+=0.7")
        .to(forEl, { duration: 0.2, autoAlpha: 0, left: 300 }, "introOut")
        .to(animationsEl, { duration: 0.2, autoAlpha: 0, y: -300 }, "introOut");
      return tl;
    }

    function getDevicesTimeline() {
      const tl = gsap.timeline();
      tl.from(deviceHead, { duration: 0.5, autoAlpha: 0 })
        .from(desktop, { duration: 0.5, rotation: -50, transformOrigin: "50% 500px" })
        .add("desktopOut", "+=0.5")
        .to(deviceHead, { duration: 0.25, rotationX: -90, transformOrigin: "50% 100%" }, "desktopOut")
        .to(desktop, { duration: 0.5, rotation: 50, transformOrigin: "50% 500px" }, "desktopOut")
        .add(() => { deviceHead.textContent = "Laptop"; }, "desktopOut+=0.25")
        .from(laptop, { duration: 0.5, rotation: -50, transformOrigin: "50% 500px" }, "desktopOut")
        .fromTo(deviceHead, { rotationX: 90 }, { duration: 0.25, rotationX: 0, transformOrigin: "50% 100%", immediateRender: false }, "desktopOut+=0.25")
        .add("laptopOut", "+=0.5")
        .to(deviceHead, { duration: 0.25, rotationX: -90, transformOrigin: "50% 100%" }, "laptopOut")
        .to(laptop, { duration: 0.5, rotation: 50, transformOrigin: "50% 500px" }, "laptopOut")
        .add(() => { deviceHead.textContent = "and Mobile"; }, "laptopOut+=0.25")
        .from(mobile, { duration: 0.5, rotation: -50, transformOrigin: "50% 500px" }, "laptopOut")
        .fromTo(deviceHead, { rotationX: 90 }, { duration: 0.25, rotationX: 0, transformOrigin: "50% 100%", immediateRender: false }, "laptopOut+=0.25");
      return tl;
    }

    function getTabletAnimation() {
      const tl = gsap.timeline();
      tl.fromTo("#tablet_end_screen",
        { clip: "rect(125px 300px 125px 0px)" },
        { duration: 0.6, clip: "rect(0px 300px 250px 0px)" }, "revealTablet")
        .to(tablet, { duration: 0.4, backgroundColor: "black" }, "revealTablet")
        .add("tabletGrow", "-=0.200")
        .to(tablet, { duration: 0.5, scale: 1, x: 0, y: -10, ease: "back.out(1.7)" }, "tabletGrow")
        .to(iphone, { duration: 0.4, scale: 0.2 }, "tabletGrow")
        .add("logoman", "-=0.2")
        .set(logoman, { autoAlpha: 1 }, "logoman")
        .from(logoman, { duration: 0.3, left: 20, scale: 2, ease: "back.out(1.7)" }, "logoman")
        .from(learnMore, { duration: 0.2, autoAlpha: 0, scale: 0.1, ease: "back.out(1.7)" })
        .add(gsap.to(learnMore, { duration: 0.5, boxShadow: "0px 0px 20px 2px #91f600", repeat: 3, yoyo: true }), "+=0.8")
        .from(replay, { duration: 0.4, autoAlpha: 0, rotation: -360 }, "-=1");
      return tl;
    }

    function createMasterTimeline() {
      timeline = gsap.timeline({ onUpdate: updateSlider, onComplete: showSlider });
      timeline.set(banner, { autoAlpha: 1 })
        .add(getIntroTextTimeline(), 0.3)
        .add("devices", "-=0.1")
        .add(getDevicesTimeline(), "devices")
        .add("tabletAnimation", "+=0.4")
        .add(getTabletAnimation(), "tabletAnimation");
      timeline.timeScale(1);
    }

    $("#learnMore").mouseenter(function () {
      gsap.fromTo("#learnMore",
        { boxShadow: "0px 0px 0px 0px green" },
        { duration: 0.6, boxShadow: "0px 0px 20px 2px #91f600", repeat: -1, yoyo: true });
    });

    $("#learnMore").mouseleave(function () {
      gsap.to("#learnMore", { duration: 0.2, boxShadow: "0px 0px 0px 0px yellow" });
    });

    $("#replay").mouseenter(function () {
      gsap.to("#replay", { duration: 0.5, rotation: "+=360", autoAlpha: 1 });
    });

    $("#replay").mouseleave(function () {
      gsap.to("#replay", { duration: 0.5, autoAlpha: 0.6 });
    });

    $("#replay").click(function () {
      if (timeline) timeline.restart();
    });

    $("#slider").slider({
      range: false,
      min: 0,
      max: 100,
      step: 0.1,
      slide: function (event, ui) {
        if (timeline) {
          timeline.pause();
          timeline.progress(ui.value / 100);
        }
      }
    });

    function updateSlider() {
      if (timeline) $("#slider").slider("value", timeline.progress() * 100);
    }

    function showSlider() {
      gsap.to("#slider", { duration: 0.5, autoAlpha: 1 });
    }

    initCSS();
    createMasterTimeline();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Asap:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <div id="wrapper">
        <div id="banner">
          <div className="slide" id="slide2">
            <h4>FOR</h4>
          </div>
          <div className="slide" id="slide1">
            <h1>CREATE</h1>
            <div id="stunningWrap">
              <h2 id="stunning">STUNNING</h2>
            </div>
            <h3>ANIMATIONS</h3>
          </div>
          <div className="slide" id="slide3">
            <div id="deviceHead">Desktop</div>
            <img
              src="https://www.greensock.com/_img/codepen/allDevicesBanner/desktop.png"
              id="desktop"
              alt="desktop"
            />
            <img
              src="https://www.greensock.com/_img/codepen/allDevicesBanner/laptop.png"
              id="laptop"
              alt="laptop"
            />
            <div id="mobile">
              <div id="tablet">
                <div id="nestedAnimation">
                  <div id="tablet_end_screen"></div>
                  <img
                    src="https://www.greensock.com/_img/codepen/allDevicesBanner/logoman.png"
                    id="logoman"
                    alt="logoman"
                  />
                  <a
                    href="https://www.greensock.com/gsap-js/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div id="learnMore" className="gradient">
                      learn more
                    </div>
                  </a>
                  <div id="replay">
                    <img
                      src="https://www.greensock.com/_img/codepen/allDevicesBanner/replay.png"
                      alt="replay"
                    />
                  </div>
                </div>
              </div>
              <div id="iphone">
                <img
                  src="https://www.greensock.com/_img/codepen/allDevicesBanner/iphone.png"
                  alt="iphone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="slider"></div>
    </>
  );
};

export default Banner;
