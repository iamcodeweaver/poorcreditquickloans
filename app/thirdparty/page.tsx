import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ThirdParty from "@/components/ThirdParty/ThirdParty";
import React from "react";

function ThirdPartyHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <ThirdParty />
      <Footer />
    </div>
  );
}

export default ThirdPartyHero;
