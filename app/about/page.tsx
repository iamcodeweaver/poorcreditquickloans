import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AboutUs from "@/components/Pages/About/AboutUs";
import WhatWeDo from "@/components/Pages/About/WhatWeDo";
import React from "react";

function About() {
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
      <AboutUs />
      <WhatWeDo />
      <Footer />
    </div>
  );
}

export default About;
