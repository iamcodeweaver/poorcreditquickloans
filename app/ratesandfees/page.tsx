import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import RatesAndFees from "@/components/RatesAndFees/RatesAndFees";
import RatesMore from "@/components/RatesAndFees/RatesMore";
import React from "react";

function RatesAndFeesHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <RatesAndFees />
      <RatesMore />
      <Footer />
    </div>
  );
}

export default RatesAndFeesHero;
