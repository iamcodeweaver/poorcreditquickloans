import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TermsOfUse from "@/components/TermsOfUse/TermsOfUse";
import React from "react";

function TermsOfUseHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <TermsOfUse />
      <Footer />
    </div>
  );
}

export default TermsOfUseHero;
