import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const contactBtnRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const btn = contactBtnRef.current;

    const handleMouseEnter = () => {
      gsap.to(btn, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center flex-1 space-x-6">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
            <Link to="/our-work" className="hover:text-yellow-500">
              Our Work
            </Link>
            <Link to="/services" className="hover:text-yellow-500">
              Services
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              ref={contactBtnRef}
              to="/contact"
              className="bg-white text-blue-900 px-4 py-2 rounded font-semibold shadow hover:bg-yellow-300 hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900 px-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 hover:bg-blue-800 rounded">
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 hover:bg-blue-800 rounded"
          >
            About
          </Link>
          <Link
            to="/our-work"
            className="block px-3 py-2 hover:bg-blue-800 rounded"
          >
            Our Work
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 hover:bg-blue-800 rounded"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 mt-2 bg-white text-blue-900 rounded text-center font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
