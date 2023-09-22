import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Unsubscribe from "@/components/Unsubscribe/Unsubscribe";
import React from "react";

function UnsubscribeHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <Unsubscribe />
      <Footer />
    </div>
  );
}

export default UnsubscribeHero;
