import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PayDayLoans from "@/components/PayDayLoans/PayDayLoans";
import PayDayNext from "@/components/PayDayLoans/PayDayNext";
import PayDayMore from "@/components/PayDayLoans/PayDayMore";
import React from "react";

function PayDayLoansHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <PayDayLoans />
      <PayDayNext />
      <PayDayMore />
      <Footer />
    </div>
  );
}

export default PayDayLoansHero;
