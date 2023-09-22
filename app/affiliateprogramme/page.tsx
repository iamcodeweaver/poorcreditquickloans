import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AffiliateProgramme from "@/components/AffiliateProgramme/AffiliateProgramme";
import React from "react";

function AffiliateProgrammeHero() {
  return (
    <div
      className="text-black bg-white text-sm"
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <Navbar />
      <AffiliateProgramme />
      <Footer />
    </div>
  );
}

export default AffiliateProgrammeHero;
