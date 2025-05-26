import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LogoIntroWithCards from "./LogoIntroWithCards";
import OurServices from "./OurServices";
import BPO from "./BPO";
import TransformingBusinesses from "./TransformingBusinesses";
import FinanceITSolutions from "./FinanceITSolutions";

function Home() {
  return (
    <>
      <Navbar />
      <LogoIntroWithCards />
      <OurServices />
      <BPO />
      <TransformingBusinesses />
      <FinanceITSolutions />
      <Footer />
    </>
  );
}

export default Home;
