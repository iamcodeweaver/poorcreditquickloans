import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import HomeImprovement from "@/components/HomeImprovement/HomeImprovement";
import HowToCBHIL from "@/components/HomeImprovement/HowToCBHIL";
import PersonalHILoans from "@/components/HomeImprovement/PersonalHILoans";
import FindRightHome from "@/components/HomeImprovement/FindRightHome";
import React from "react";

function HIHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <HomeImprovement />
      <HowToCBHIL />
      <PersonalHILoans />
      <FindRightHome />
      <Footer />
    </div>
  );
}

export default HIHero;
