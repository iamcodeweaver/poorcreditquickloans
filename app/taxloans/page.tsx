import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TaxLoans from "@/components/TaxLoans/TaxLoans";
import EarlyITax from "@/components/TaxLoans/EarlyITax";
import TaxMore from "@/components/TaxLoans/TaxMore";
import React from "react";

function TaxLoansHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <TaxLoans />
      <EarlyITax />
      <TaxMore />
      <Footer />
    </div>
  );
}

export default TaxLoansHero;
