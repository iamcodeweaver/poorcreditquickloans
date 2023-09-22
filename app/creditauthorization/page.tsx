import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import CreditAuthorization from "@/components/CreditAuthorization/CreditAuthorization";
import React from "react";

function CreditAuthorizationHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <CreditAuthorization />
      <Footer />
    </div>
  );
}

export default CreditAuthorizationHero;
