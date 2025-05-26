import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import burnarImage from "../../Media/burnarOurServise.jpg";

function Burnar() {
  const textRef = useRef();
  const subTextRef = useRef();
  const paraRef = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(subTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(paraRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50 scale-110"
        style={{
          backgroundImage: `url(${burnarImage})`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center px-4 text-center">
        <div>
          <h1
            ref={textRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "Brush Script MT", color: "lightblue" }}
          >
            Transforming
          </h1>
          <h2
            ref={subTextRef}
            className="text-xl sm:text-2xl md:text-3xl text-yellow-500 font-semibold"
            style={{ fontFamily: "Stencil" }}
          >
            Ideas into Digital Excellence
          </h2>
          <p ref={paraRef} className="mt-4 text-sm sm:text-base text-gray-200">
            At
            <span className="text-yellow-300 font-semibold">
              {" "}
              Vyanwebs Pvt. Ltd.
            </span>
            , we craft innovative and scalable digital solutions that drive
            business success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Burnar;
