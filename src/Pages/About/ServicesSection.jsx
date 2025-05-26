import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Website Development",
    description:
      "From sleek, responsive designs to powerful backend systems, we breathe life into your unique visions. Explore a world the possibilities with our seasoned web development team.",
  },
  {
    title: "Mobile Apps",
    description:
      "Reach your target audience on their preferred platform. Our mobile development team creates intuitive, high-performance apps for iOS, Android and Web.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud service offers secure, scalable, and high-performance solutions for data storage, computing, and networking. With seamless integration, automated backups, and advanced security, businesses can optimize operations, reduce costs, and enhance collaboration. Enjoy 24/7 support and global accessibility with our reliable cloud infrastructure.",
  },
  {
    title: "UI / UX Design",
    description:
      "Our design team focuses on creating user-centric, intuitive, and engaging interfaces that leave a lasting impact. By prioritizing seamless user experiences, we craft designs that boost interaction and significantly improve engagement rates.",
  },
  {
    title: "Business Process Outsourcing",
    description:
      "Streamline operations and reduce costs with our BPO solutions. From customer support to back-office processes, we provide reliable and scalable outsourcing services to help businesses focus on their core competencies.",
  },
  {
    title: "Consultancy",
    description:
      "Leverage our industry expertise to navigate business challenges and drive growth. We provide strategic consulting in IT, digital transformation, and process optimization to ensure long-term success.",
  },
  {
    title: "Finance",
    description:
      "Leverage our industry expertise to navigate business challenges and drive growth. We provide strategic consulting in IT, digital transformation, and process optimization to ensure long-term success.",
  },
];

const ServicesSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-white text-black py-16 px-6">
      <h2 className="text-yellow-400 text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-dark-blue border border-white bg-black p-6 rounded-lg transition duration-300 hover:bg-blue-950  hover:text-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              {service.title}
            </h3>
            <p className="text-sm text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
