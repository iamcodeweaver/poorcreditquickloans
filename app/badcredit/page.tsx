import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import BadCredit from "@/components/BadCredit/BadCredit";
import BCPenPaper from "@/components/BadCredit/BCPenPaper";
import CoSigner from "@/components/BadCredit/CoSigner";

function BadCreditHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <BadCredit />
      <BCPenPaper />
      <CoSigner />
      <Footer />
    </div>
  );
}

export default BadCreditHero;
