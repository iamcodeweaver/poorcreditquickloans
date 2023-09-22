import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SiteMap from "@/components/SiteMap/SiteMap";
import React from "react";

function SiteMapHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <SiteMap />
      <Footer />
    </div>
  );
}

export default SiteMapHero;
