import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaAt,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Vyanwebs</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            N - Friends Colony, Ring Road
            <br />
            Bangali Square, Above the SBI Bank,
            <br />
            Indore, M.P. - 452001
            <br />
            <br />
            2nd Floor, Corporate Park,
            <br />
            Goregaon East, Mumbai - 400063
            <br />
            <br />
            📞 +91 7489806724
            <br />
            ✉️ info@vyanwebs.com
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Our Social Networks
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Connect with us on social media
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="text-pink-500 hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="text-red-400 hover:text-red-300 transition">
              <FaAt />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              <FaSkype />
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Vyanwebs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
