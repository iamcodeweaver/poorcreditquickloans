import React from "react";
import UnsubscribeForm from "./UnsubscribeForm";
import Link from "next/link";

const Unsubscribe = () => {
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
        <div className="flex items-center justify-center">
          <div className="w-2/3">
            <div className="A1 flex items-center justify-center">
              <p className="w-3/5 pt-16 text-center pb-20 text-4xl text-[#27374C] font-extrabold">
                Unsubscribe
              </p>
            </div>

            <div className="px-16 leading-7 pb-16">
              <hr />
              <div className="shadow-md bg-white pb-8 p-8">
                <div className="font-bold pb-8">
                  To Unsubscribe, Enter Your Email Address Here:
                </div>
                <div>
                  <UnsubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unsubscribe;
