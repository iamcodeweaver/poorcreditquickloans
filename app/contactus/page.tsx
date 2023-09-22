import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";

function ContactUsHero() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default ContactUsHero;
