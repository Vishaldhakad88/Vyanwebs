import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Expertise data
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

// Stats data
const statsData = [
  { number: "100+", label: "Successful Projects" },
  { number: "50+", label: "Satisfied Clients" },
  { number: "10+", label: "Years of Experience" },
  { number: "99.9%", label: "Uptime Guarantee" },
];

// Success stories data
const successStories = [
  {
    title: "📌 E-Commerce Platform Enhancement",
    description:
      "Increased conversions by 40% with a high-performance solution.",
  },
  {
    title: "📌 AI-Powered Chatbot",
    description: "Reduced response time by 60% with an AI-driven chatbot.",
  },
  {
    title: "📌 Cloud Migration",
    description:
      "Cut operational costs by 30% with seamless cloud infrastructure transition.",
  },
];

function ExpertiseSection() {
  const successRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animate success cards on scroll
    successRefs.current.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out",
      });
    });

    // Animate CTA section
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
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

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 text-gray-900 p-6 rounded-lg text-center shadow-lg hover:shadow-yellow-300 transition duration-800"
          >
            <div className="text-3xl text-yellow-500 sm:text-4xl font-bold">
              {item.number}
            </div>
            <div className="text-sm text-white sm:text-base mt-2">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories Section */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12">
          Our Success Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (successRefs.current[index] = el)}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-yellow-400 transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-white">{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        ref={ctaRef}
        className="mt-24 text-center max-w-3xl mx-auto px-4 sm:px-0"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
          Let’s Build Something Great Together!
        </h2>
        <p className="text-lg sm:text-xl text-white mb-8">
          Ready to transform your future with cutting-edge IT solutions? Get in
          touch with us today!
        </p>
        <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md transition duration-300 hover:bg-yellow-300 hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default ExpertiseSection;
