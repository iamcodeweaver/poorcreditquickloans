import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Emergency from "@/components/Emergency/Emergency";
import HowToGEL from "@/components/Emergency/HowToGEL";
import PersonalLoans from "@/components/Emergency/PersonalLoans";
import BenefitsOfEL from "@/components/Emergency/BenefitsOfEL";
import React from "react";

function EmergencyHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <Emergency />
      <HowToGEL />
      <PersonalLoans />
      <BenefitsOfEL />
      <Footer />
    </div>
  );
}

export default EmergencyHero;
