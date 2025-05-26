import React from "react";

function ClientSay() {
  const clients = [
    {
      title: "Expert developers who delivered beyond expectations.",
      name: "Michael Brown",
      role: "DevMasters",
    },
    {
      title: "The best IT consultancy service we have ever had!",
      name: "Sarah Williams",
      role: "BusinessBoost",
    },
    {
      title: "Their cybersecurity solutions are top-notch!",
      name: "Emily White",
      role: "SecureNet",
    },
    {
      title: "Excellent support and seamless cloud integration.",
      name: "Daniel Wilson",
      role: "CloudElite",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .scroll-left {
            animation: scrollLeft 30s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 30s linear infinite;
          }

          .scroll-left:hover,
          .scroll-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="bg-blue-200 py-16 px-6 text-center text-white">
        <h2 className="text-yellow-400 text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        {/* First Row: Left to Right */}
        <div className="relative overflow-hidden w-full max-w-6xl mx-auto mb-12">
          <div className="scroll-right flex gap-6 w-max whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`r1-${index}`}
                className="w-80 sm:w-64 bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="italic text-base mb-6 whitespace-normal">
                  “{client.title}”
                </p>
                <div>
                  <h3 className="font-semibold text-lg text-yellow-400">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-400">{client.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
          <div className="scroll-left flex gap-6 w-max whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`r2-${index}`}
                className="w-80 sm:w-64 bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="italic text-base mb-6 whitespace-normal">
                  “{client.title}”
                </p>
                <div>
                  <h3 className="font-semibold text-lg text-yellow-400">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-400">{client.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientSay;
