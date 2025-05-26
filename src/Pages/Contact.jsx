import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactUs() {
  const formRef = useRef(null);

  useEffect(() => {
    // Animate form children on mount
    gsap.from(formRef.current.children, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-br from-blue-500 via-red-100 to-sky-400
                    p-8"
    >
      <h1 className="text-yellow-400 text-5xl font-bold mt-8 drop-shadow-lg">
        Contact Us
      </h1>
      <form
        ref={formRef}
        className="bg-black bg-opacity-20 backdrop-blur-md rounded-lg 
                   p-8 max-w-md w-full shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <label className="block mb-4">
          <span className="text-yellow-300 font-semibold mb-1 block">Name</span>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-md focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 text-white"
            placeholder="Your Name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-yellow-300 font-semibold mb-1 block ">
            Email
          </span>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-md focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 text-white"
            placeholder="you@example.com"
          />
        </label>

        <label className="block mb-6">
          <span className="text-yellow-300 font-semibold mb-1 block">
            Message
          </span>
          <textarea
            required
            rows="4"
            className="w-full px-4 py-2 rounded-md resize-none focus:outline-none 
                       focus:ring-2 focus:ring-yellow-400 text-white"
            placeholder="Write your message here..."
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold 
                     py-3 rounded-md transition-colors duration-300 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
