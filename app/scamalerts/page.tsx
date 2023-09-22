import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScamAlerts from "@/components/ScamAlerts/ScamAlerts";
import React from "react";

function ScamAlertsHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <ScamAlerts />
      <Footer />
    </div>
  );
}

export default ScamAlertsHero;
