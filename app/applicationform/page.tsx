import Navbar from "@/components/Navbar/Navbar";
import Form from "@/components/ApplicationForm/Form";
import React from "react";
import Footer from "@/components/Footer/Footer";

function ApplicationForm() {
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
      <Form />
      <Footer />
    </div>
  );
}

export default ApplicationForm;
