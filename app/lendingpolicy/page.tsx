import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import LendingPolicy from "@/components/LendingPolicy/LendingPolicy";
import React from "react";

function LendingPolicyHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <LendingPolicy />
      <Footer />
    </div>
  );
}

export default LendingPolicyHero;
