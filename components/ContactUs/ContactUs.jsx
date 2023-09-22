import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <div
        className="pt-16 px-16"
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
        }}
      >
        <div className="row">
          <div className="A1 flex items-center justify-center">
            <p className="w-3/5 pt-16 text-center pb-12 text-4xl text-[#27374C] font-extrabold">
              Contact Us
            </p>
          </div>

          <div className="px-16 leading-7 pb-16">
            <p className="pb-2 text-justify text-base font-extrabold">
              We&#39;re Here to Help
            </p>

            <p className="pb-8 text-justify opacity-70">
              Poorcredtquickloan.com is dedicated to customer satisfaction. If
              you have any questions, comments or suggestions on how we might
              improve your user experience, please contact us via email or
              phone, and one of our representatives will get back to you
              shortly. If you have questions or concerns about the terms of your
              loan agreement, please contact your lender or lending partner
              directly.
            </p>
            <hr />
            <div className="shadow-md bg-white pb-8 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-extrabold pb-2">Contact Information</p>

                  <p className="opacity-70 pb-6">
                    Mailing address:Poorcreditquickloan.com
                    <br />
                    2661 N Pearl St. #431Tacoma, WA 98407
                  </p>

                  <p className="opacity-70 pb-6">
                    Email: support@poorcreditquickloan.com
                  </p>

                  <p className="opacity-70 pb-6">
                    Phone: 1-800-772-2274
                    <br />
                    Phone Hours: Monday to Friday, 6am to 7pm PST
                  </p>

                  <p className="opacity-70 pb-6">
                    Please refer to our{" "}
                    <Link href={"/howitwork"} className="font-bold italic">
                      How It Works
                    </Link>{" "}
                    page and{" "}
                    <Link href={"/thefaq"} className="font-bold italic">
                      Frequently Asked Questions
                    </Link>{" "}
                    before calling in.
                  </p>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
