import React from "react";
import Navbar from "../Components/Navbar";
import LogoIntroWithCards from "../Components/LogoIntroWithCards";
import OurServices from "../Components/OurServices";
import BPO from "../Components/BPO";
import TransformingBusinesses from "../Components/TransformingBusinesses";
import FinanceITSolutions from "../Components/FinanceITSolutions";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
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
