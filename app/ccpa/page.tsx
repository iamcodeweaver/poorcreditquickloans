import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import CCPA from "@/components/CCPA/CCPA";
import React from "react";

function CCPAHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <CCPA />
      <Footer />
    </div>
  );
}

export default CCPAHero;
