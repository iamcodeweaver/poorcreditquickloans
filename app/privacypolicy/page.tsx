import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import PolicyMore from "@/components/PrivacyPolicy/PolicyMore";
import React from "react";

function PrivacyPolicyHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <PrivacyPolicy />
      <PolicyMore />
      <Footer />
    </div>
  );
}

export default PrivacyPolicyHero;
