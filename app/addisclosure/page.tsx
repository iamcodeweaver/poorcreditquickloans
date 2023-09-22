import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AdDisclosure from "@/components/AdDisclosure/AdDisclosure";
import React from "react";

function AdDisclosureHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <AdDisclosure />
      <Footer />
    </div>
  );
}

export default AdDisclosureHero;
