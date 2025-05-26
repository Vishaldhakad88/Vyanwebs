import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import earthHero from "./Media/earthHero.png";

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
    <div className="bg-dark-blue text-black px-8 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Div */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-yellow-400 text-4xl font-bold leading-snug">
          We Are Increasing <br /> Business Success With Technology
        </h1>
        <p className="text-black">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Div */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center ">
        <div className="animate-bounce mt-20">
          <img
            ref={imageRef}
            src="https://media.istockphoto.com/id/500262483/vector/north-south-and-central-america-global-communication-planet-data.jpg?s=612x612&w=0&k=20&c=nhHhgAgXZ1WMJX_tKJOGJC30OnX1mu2mmcp0tQsh6Ug="
            alt="Animated Tech Image"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
