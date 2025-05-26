import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bgServices from "../../Media/bgServices.png"; // Replace with your actual image path

const expertiseData = [
  {
    title: "🚀 Custom Software Development",
    description:
      "Tailored solutions ensuring seamless functionality and scalability.",
  },
  {
    title: "🌍 Web & Mobile App Development",
    description: "User-centric digital experiences optimized for engagement.",
  },
  {
    title: "🔒 Cybersecurity & IT Infrastructure",
    description: "Advanced security protocols to protect your data.",
  },
  {
    title: "🧠 AI & Automation Solutions",
    description: "AI-driven automation and data analytics for efficiency.",
  },
  {
    title: "☁️ Cloud Computing & DevOps",
    description: "Secure and scalable cloud solutions with seamless DevOps.",
  },
  {
    title: "📊 Enterprise IT Consulting",
    description: "Expert IT strategy and digital transformation guidance.",
  },
];

const ITConsultingIntro = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center px-4 text-center"
        style={{
          backgroundImage: `url(${bgServices})`,
        }}
      >
        <div
          ref={contentRef}
          className=" bg-opacity-200 p-8 rounded-lg max-w-3xl text-white"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Our IT Consulting Services</span>
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed">
            We provide end-to-end IT consulting solutions to help businesses
            harness the power of technology for growth, efficiency, and
            security.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 px-4 sm:px-8 text-white">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12">
          Our Expertise
        </h2>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-yellow-400 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ITConsultingIntro;
