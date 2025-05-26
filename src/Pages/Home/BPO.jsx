import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const BPO = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const splitLeftRef = useRef(null);
  const splitRightRef = useRef(null);
  const animationRef = useRef(null);
  const [active, setActive] = useState("words"); // Default animation on words

  // Setup SplitText for both divs
  const setupSplitText = () => {
    // Revert previous splits and animations
    if (splitLeftRef.current) splitLeftRef.current.revert();
    if (splitRightRef.current) splitRightRef.current.revert();
    if (animationRef.current) animationRef.current.revert();

    splitLeftRef.current = new SplitText(leftRef.current, { type: "words" });
    splitRightRef.current = new SplitText(rightRef.current, { type: "words" });
  };

  // Animate both left and right words
  const animateWords = () => {
    if (animationRef.current) animationRef.current.revert();

    animationRef.current = gsap
      .timeline()
      // Animate left words from left to right staggered
      .from(splitLeftRef.current.words, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
      })
      // Animate right words from right to left staggered
      .from(
        splitRightRef.current.words,
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
        },
        0
      ); // start at same time as left animation

    setActive("words");
  };

  useEffect(() => {
    setupSplitText();
    animateWords();

    window.addEventListener("resize", () => {
      setupSplitText();
      animateWords();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setupSplitText();
        animateWords();
      });
      if (animationRef.current) animationRef.current.revert();
      if (splitLeftRef.current) splitLeftRef.current.revert();
      if (splitRightRef.current) splitRightRef.current.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 px-6 py-12 flex flex-col justify-center overflow-hidden">
      {/* Background text */}
      <h1
        className="absolute select-none whitespace-nowrap top-10 left-1/2 transform -translate-x-1/2 text-[clamp(3rem,15vw,12rem)] font-extrabold uppercase opacity-10 pointer-events-none"
        style={{ userSelect: "none" }}
      >
        <h3 className="text-gray-400 text-6xl -ml-70 mt-50">
          business process
        </h3>
        <h3 className="text-yellow-400 text-8xl -ml-70">outsourcing</h3>
      </h1>

      {/* Main content */}
      <div className="flex flex-col md:flex-row md:space-x-20 max-w-7xl mx-auto w-full z-10">
        {/* Left div */}
        <div
          ref={leftRef}
          className="text-white text-lg mt-25 md:text-xl lg:text-2xl leading-relaxed whitespace-pre-wrap flex-1"
          style={{ userSelect: "none" }}
        >
          <h2 className="text-yellow-400 text-5xl">
            Streamline Your Business with Expert BPO Solutions
          </h2>
          <br />
          At &nbsp; <span className="text-yellow-400"> Vyanwebs Pvt. Ltd.</span>
          , we provide top-tier Business Process Outsourcing (BPO) services that
          help businesses optimize operations, reduce costs, and focus on core
          competencies.
        </div>

        {/* Right div */}
        <div
          ref={rightRef}
          className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed flex-1 max-w-md"
          style={{ userSelect: "none" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <hr className="border-gray-700 mb-6" />
          {/* Each line with border, rounded, hover effect */}
          <div className="border flex flex-col gap-4">
            {[
              "Customer Support & Call Center Solutions",
              "Back-Office Operations & Data Processing",
              "Finance & Accounting Outsourcing",
              "IT & Technical Support Services",
              "HR & Payroll Management",
            ].map((line, i) => (
              <div
                key={i}
                className=" border-transparent rounded-md px-4 py-2 cursor-pointer transition-colors duration-300  hover:text-yellow-400"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPO;
