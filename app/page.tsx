"use client";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import SampleAPR from "@/components/SampleAPR/SampleAPR";
import Reasons from "@/components/Reasons/Reasons";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div className="text-black bg-white text-sm">
      <Navbar />
      <Header />
      <Services />
      <About />
      <SampleAPR />
      <Reasons />
      <Faq />
      <Footer />
    </div>
  );
}
