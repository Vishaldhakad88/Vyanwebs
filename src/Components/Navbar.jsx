import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  FaAdjust,
  FaBars,
  FaHome,
  FaPhone,
  FaServer,
  FaTimes,
} from "react-icons/fa"; // Import hamburger and close icons
import logo from "../../public/logo.jpg";
import { FaBagShopping, FaHouse, FaSquareUpwork } from "react-icons/fa6";

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
      className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center text-xl font-bold text-white"
            >
              <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
              <span className="ml-2 text-black">VyanWebs</span>
            </Link>
          </div>

          {/* Desktop Nav */}
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

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              ref={contactBtnRef}
              to="/contact"
              className="bg-blue-900 text-white px-4 py-2 rounded font-semibold shadow hover:bg-blue-300 hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white px-3 py-2 hover:bg-blue-800 rounded"
          >
            <FaHouse className="text-lg" />
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white px-3 py-2 hover:bg-blue-800 rounded"
          >
            <FaAdjust className="text-lg" />
            About
          </Link>
          <Link
            to="/our-work"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white px-3 py-2 hover:bg-blue-800 rounded"
          >
            <FaBagShopping className="text-lg" />
            Our Work
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white px-3 py-2 hover:bg-blue-800 rounded"
          >
            <FaServer className="text-lg" />
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-white text-blue-900 px-3 py-2 mt-2 rounded font-semibold"
          >
            <FaPhone className="text-lg" />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
