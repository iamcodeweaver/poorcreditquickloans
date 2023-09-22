import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import EConsent from "@/components/EConsent/EConsent";
import React from "react";

function EconsentHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <EConsent />
      <Footer />
    </div>
  );
}

export default EconsentHero;
