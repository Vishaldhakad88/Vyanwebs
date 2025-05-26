import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const FinanceITSolutions = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);
  const finalHeadingRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(headingRef.current, { y: 50, opacity: 0 })
      .from(containerRef.current, { opacity: 0, y: 30 }, "-=0.7")
      .from(
        [leftRef.current, rightRef.current],
        { x: 50, opacity: 0, stagger: 0.3 },
        "-=0.5"
      )
      .from(finalHeadingRef.current, { opacity: 0, y: 30 }, "-=0.4")
      .from(buttonRef.current, { scale: 0.8, opacity: 0 }, "-=0.4");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-black bg-white">
      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6 md:mb-12"
      >
        Empowering Finance with Smart IT Solutions
      </h1>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-14 md:mb-20 leading-relaxed text-lg md:text-xl">
        In today’s fast-evolving financial landscape, technology plays a crucial
        role in driving efficiency, security, and growth. At
        <span className="text-yellow-500"> Vyanwebs Pvt. Ltd.</span>, we
        specialize in IT solutions tailored for the finance industry, helping
        businesses streamline operations, enhance security, and deliver seamless
        digital experiences.
      </p>

      {/* Two columns */}
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-5xl mx-auto"
      >
        {/* Left */}
        <div ref={leftRef} className="md:w-1/2 border p-7 bg-black rounded-4xl">
          <h2 className="text-2xl font-semibold mb-5 border-b-4 text-white border-yellow-400 inline-block pb-2">
            Our Expertise
          </h2>
          <ul className="space-y-4 text-white text-lg">
            <li>
              🔹 Fintech Innovation – Custom software solutions for banking,
              payments, and investment platforms.
            </li>
            <li>
              🔹 Secure & Scalable IT Infrastructure – Cloud-based solutions to
              enhance performance and security.
            </li>
            <li>
              🔹 Data-Driven Decision Making – AI-powered analytics for risk
              management and financial insights.
            </li>
            <li>
              🔹 Regulatory Compliance – Ensure adherence to financial
              regulations with advanced IT frameworks.
            </li>
          </ul>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className="md:w-1/2 border p-7  bg-black rounded-4xl"
        >
          <h2 className="text-2xl text-white font-semibold mb-5 border-b-4 border-yellow-400 inline-block pb-2">
            Our IT Services for Finance
          </h2>
          <ul className="space-y-4 text-white text-lg">
            <li>
              💰 Banking & Payment Solutions – Secure digital transactions and
              payment gateway integration.
            </li>
            <li>
              📊 Financial Analytics & Risk Management – AI-powered insights for
              better financial decision-making.
            </li>
            <li>
              🔐 Cybersecurity & Fraud Prevention – Advanced security measures
              to protect sensitive financial data.
            </li>
            <li>
              ☁️ Cloud Solutions for Finance – Scalable infrastructure for
              high-performance financial applications.
            </li>
            <li>
              💡 Blockchain & Digital Ledger Technologies – Secure and
              transparent financial transactions.
            </li>
          </ul>
        </div>
      </div>

      {/* Final heading */}
      <h2
        ref={finalHeadingRef}
        className="mt-16 md:mt-24 max-w-4xl mx-auto text-center text-xl md:text-2xl font-medium text-gray-700"
      >
        With a deep understanding of the financial sector, we provide IT
        solutions that drive efficiency, security, and growth while ensuring
        compliance with industry standards.
      </h2>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          ref={buttonRef}
          className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-red-400"
        >
          📞 Let’s Transform Finance with Technology!
        </button>
      </div>
    </div>
  );
};

export default FinanceITSolutions;
