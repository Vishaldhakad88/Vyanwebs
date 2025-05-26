// WhyChooseUs.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { PiGraph } from "react-icons/pi";

const features = [
  {
    icon: <FaCheckCircle className="text-green-400" />,
    text: "Industry Experts with Proven Experience",
  },
  {
    icon: <FaCheckCircle className="text-green-400" />,
    text: "Tailored Solutions for Every Business Size",
  },
  {
    icon: <FaCheckCircle className="text-green-400" />,
    text: "Cutting-Edge Technologies & Best Practices",
  },
  {
    icon: <FaCheckCircle className="text-green-400" />,
    text: "Reliable Support & Continuous Innovation",
  },
  {
    icon: <FaPhoneAlt className="text-pink-400" />,
    text: "24/7 Customer Support for BPO Services",
  },
  {
    icon: <MdInsights className="text-violet-400" />,
    text: "Cost-Effective and Scalable BPO Solutions",
  },
  {
    icon: <FaCheckCircle className="text-blue-400" />,
    text: "Data-Driven Business Consultancy Strategies",
  },
  {
    icon: <PiGraph className="text-indigo-400" />,
    text: "Market Research & Competitive Analysis for Growth",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll(".feature-box"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-[#0e1626] py-12 px-4 md:px-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
        Why Choose Us?
      </h2>
      <div
        ref={containerRef}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="feature-box flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1e2a3a] border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <span className="text-xl">{feature.icon}</span>
            <p className="text-sm md:text-base text-left">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
