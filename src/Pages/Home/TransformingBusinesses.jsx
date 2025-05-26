import React from "react";
import {
  FaLightbulb,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import gsap from "gsap";

const services = [
  {
    title: "IT Strategy & Consulting",
    description: "Align your technology with business goals.",
    icon: <FaLightbulb className="text-yellow-500 text-3xl mb-3" />,
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable, and cost-effective cloud infrastructure.",
    icon: <FaCloud className="text-blue-500 text-3xl mb-3" />,
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Protect your data with advanced security solutions.",
    icon: <FaShieldAlt className="text-red-500 text-3xl mb-3" />,
  },
  {
    title: "Software Development & Integration",
    description: "Custom-built applications for efficiency.",
    icon: <FaCode className="text-green-500 text-3xl mb-3" />,
  },
  {
    title: "AI & Data Analytics",
    description: "Make data-driven decisions with powerful insights.",
    icon: <FaRobot className="text-purple-500 text-3xl mb-3" />,
  },
];

const SmartITSolutions = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 gap-8 bg-white min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span
            style={{ fontFamily: "French Script MT" }}
            className="sm:text-3xl block"
          >
            Transforming Businesses
          </span>
          <span className="text-yellow-400 text-4xl block">
            with Smart IT Solutions
          </span>
        </h1>
        <p className=" text-black">
          In the digital era, staying ahead requires strategic IT planning and
          cutting-edge technology. At Vyanwebs Pvt. Ltd., we help businesses
          harness the power of IT to optimize operations, enhance security, and
          drive growth.
        </p>
        <button className="bg-blue-950 hover:bg-blue-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-lg hover:scale-105">
          Get Started Today
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-black rounded shadow-md hover:shadow-yellow-300 transition-all duration-400 flex flex-col items-center text-center"
          >
            {service.icon}
            <h2 className="font-bold text-lg text-white">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartITSolutions;
