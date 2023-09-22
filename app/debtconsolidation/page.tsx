import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import DebtConsolidation from "@/components/DebtConsolidation/DebtConsolidation";
import DCMore from "@/components/DebtConsolidation/DCMore";
import HowToCD from "@/components/DebtConsolidation/HowToCD";
import DDCW from "@/components/DebtConsolidation/DDCW";
import React from "react";

function DebtConsolidationHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <DebtConsolidation />
      <DCMore />
      <HowToCD />
      <DDCW />
      <Footer />
    </div>
  );
}

export default DebtConsolidationHero;
