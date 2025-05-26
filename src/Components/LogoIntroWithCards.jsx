import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LogoIntroWithCards = () => {
  const logoRef = useRef(null);
  const cardsRef = useRef(null);
  const headlineRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const images = [
    { url: "https://vyanwebs.com/assets/img1-CCArKBi5.png" },
    { url: "https://vyanwebs.com/assets/img2-DHtE3dZZ.png" },
    { url: "https://vyanwebs.com/assets/img3-DZZvBT7w.png" },
    { url: "https://vyanwebs.com/assets/img4-lw9k5-S3.png" },
    { url: "https://vyanwebs.com/assets/img5-CgmLg0JQ.png" },
  ];

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    const timeout = setTimeout(() => {
      setShowCards(true);

      gsap.to(logoRef.current, {
        y: -100,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
      );
    }, 450);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroll-animation {
            animation: scrollLeft 30s linear infinite;
          }

          .scroll-animation:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="min-h-screen bg-[url(./Media/bg.jpg)] text-white flex flex-col items-center bg-cover bg-fixed overflow-hidden">
        <div
          ref={logoRef}
          className="w-[100%] sm:w-full bg-white flex items-center justify-center rounded-b-[40%] text-4xl font-bold shadow-lg mt-10 h-25"
        >
          <div className="mt-10 text-blue-600">LOGO</div>
        </div>

        {showCards && (
          <>
            <div
              ref={headlineRef}
              className="mt-16 text-center text-white text-3xl sm:text-4xl font-light leading-tight px-4"
            >
              <div
                className="font-bold text-amber-400 text-5xl sm:text-6xl mb-2 tracking-wide"
                style={{ fontFamily: "French Script MT" }}
              >
                Better
              </div>
              <div
                className="text-red-00 sm:text-5xl sm:text:white"
                style={{ fontFamily: "Elephant" }}
              >
                Solution for Your Business
              </div>
            </div>

            <div
              ref={cardsRef}
              className="relative overflow-hidden mt-12 w-full max-w-6xl"
            >
              <div className="scroll-animation flex gap-6 w-max whitespace-nowrap">
                {images.concat(images).map((img, index) => (
                  <div
                    key={index}
                    className="w-80 h-52 sm:w-64 sm:h-40 bg-white text-blue-900 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      src={img.url}
                      alt={`Card ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LogoIntroWithCards;
