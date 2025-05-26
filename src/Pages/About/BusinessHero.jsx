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
    <div className="bg-dark-blue bg-gray-800 text-black px-8 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Div */}
      <div className="md:w-1/2 space-y-6 ">
        <h1 className="text-yellow-400 text-4xl font-bold leading-snug">
          We Are Increasing <br /> Business Success With Technology
        </h1>
        <p className="text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Div */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center ">
        <div className="mt-20" style={{
  animation: 'spin 8s linear infinite'
}}>
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
