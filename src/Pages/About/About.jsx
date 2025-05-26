import React from "react";
import BusinessHero from "./BusinessHero";
import ServicesSection from "./ServicesSection";
import ClientSay from "./ClientSay";
import Footer from "../../Components/Footer";

function About() {
  return (
    <div>
      <BusinessHero />
      <ServicesSection />
      <ClientSay />
      <Footer />
    </div>
  );
}

export default About;
