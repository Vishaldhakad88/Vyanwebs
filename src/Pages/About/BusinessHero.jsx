import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import earth1 from "../../Media/earth1.png";

const BusinessHero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-gray-800 text-black px-8 py-16 flex flex-col md:flex-row items-center justify-between">
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spin-animation {
            animation: spin 8s linear infinite;
          }
        `}
      </style>

      {/* Left Div */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          <span className="text-blue-900">We Are Increasing</span> <br />
          <span className="text-white">Business Success With Technology</span>
        </h1>
        <p className="text-white text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-950 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Div */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="mt-20 spin-animation">
          <img
            ref={imageRef}
            src={earth1}
            alt="Animated Tech Image"
            className="w-full max-w-sm rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
