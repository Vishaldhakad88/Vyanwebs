import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bgClip from "../../Media/bgClip.mp4";

const LogoIntroWithCards = () => {
  const logoRef = useRef(null);
  const cardsRef = useRef(null);
  const headlineRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const images = [
    { url: "https://wallpapercave.com/wp/wp2465923.jpg" },
    {
      url: "https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltac81c4aa3529ee37/65fd965e8f4444482dc3a079/la1a2b2h67gwwqnvs-mdb-logos.svg",
    },
    { url: "https://wallpapercave.com/wp/wp6476360.png" },
    { url: "https://wallpapercave.com/wp/wp7545231.png" },
    { url: "https://wallpapercave.com/w200/wp7545227.jpg" },
    {
      url: "https://img.freepik.com/free-vector/cloud-computing-concept_1284-4091.jpg?ga=GA1.1.34299957.1737659383&semt=ais_hybrid&w=740",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9g87d-oQsoAXkT2FCzzKu0MXOzNIBHfg7IbBBGJMeEOMY7czxuY4_pHEPSWj2kksd1Y&usqp=CAU",
    },
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
    }, 1500);

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

          @font-face {
            font-family: 'French Script MT';
            src: local('French Script MT');
          }
          @font-face {
            font-family: 'Algerian';
            src: local('Algerian');
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-hidden relative">
        {/* Optional: add background video or image here */}
        {/* Background Image or Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        >
          <source src={bgClip} type="video/mp4" />
        </video>

        {/* Foreground Content */}
        <div
          ref={logoRef}
          className="relative z-10 w-full sm:w-[100%] bg-gray-800 flex items-center justify-center rounded-b-[40%] text-4xl font-bold shadow-lg mt-10 h-24"
        >
          <div className="text-blue-600">LOGO</div>
        </div>

        {showCards && (
          <>
            {/* Headline */}
            <div
              ref={headlineRef}
              className="mt-16 text-center text-white text-3xl sm:text-4xl font-light leading-tight px-4 relative z-10"
            >
              <div
                className="font-bold text-amber-400 text-5xl sm:text-6xl mb-2 tracking-wide"
                style={{ fontFamily: "French Script MT" }}
              >
                Better
              </div>
              <div
                className="text-cyan-400 sm:text-5xl"
                style={{ fontFamily: "Algerian" }}
              >
                Solution for Your Placements
              </div>
            </div>

            {/* Scrollable Cards */}
            <div
              ref={cardsRef}
              className="relative overflow-hidden mt-12 w-full max-w-6xl px-4 z-10"
            >
              <div className="scroll-animation flex gap-6 w-max whitespace-nowrap">
                {images.concat(images).map((img, index) => (
                  <div
                    key={index}
                    className="w-72 h-44 sm:w-64 sm:h-40 bg-white text-blue-900 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
