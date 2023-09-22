import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import FastCash from "@/components/FastCash/FastCash";
import FastCashLoans from "@/components/FastCash/FastCashLoans";
import ReqForFastCash from "@/components/FastCash/ReqForFastCash";
import React from "react";

function FastCashHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <FastCash />
      <FastCashLoans />
      <ReqForFastCash />
      <Footer />
    </div>
  );
}

export default FastCashHero;
