import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  "Software Development",
  "UI / UX Design",
  "Mobile App Development",
  "Digital Marketing",
  "Cloud Computing",
  "Cybersecurity",
];

export default function OurServices() {
  const boxesRef = useRef([]);

  useEffect(() => {
    // Animate all boxes coming from bottom with stagger
    gsap.from(boxesRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6 bg-gray-800">
      <div
        ref={(el) => (boxesRef.current[0] = el)}
        className="bg-yellow-400 text-black font-bold md:w-[40%] text-3xl md:text-4xl p-5 rounded-md flex items-center justify-center mb-8 shadow-lg mx-auto"
      >
        Our Services
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service}
            ref={(el) => (boxesRef.current[index + 1] = el)}
            className="bg-gray-600 shadow-md text-white rounded-md p-6 flex items-center justify-center text-lg md:text-xl font-semibold hover:shadow-xl transition-shadow cursor-pointer"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
