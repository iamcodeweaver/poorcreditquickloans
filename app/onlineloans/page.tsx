import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OnlineLoans from "@/components/OnlineLoans/OnlineLoans";
import OLoans from "@/components/OnlineLoans/OLoans";
import OLoansMore from "@/components/OnlineLoans/OLoansMore";
import React from "react";

function OnlineLoansHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <OnlineLoans />
      <OLoans />
      <OLoansMore />
      <Footer />
    </div>
  );
}

export default OnlineLoansHero;
