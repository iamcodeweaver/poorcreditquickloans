import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function BadCredit() {
  return (
    <div>
      <div className="pt-24">
        <div
          className="pb-16 text-sm px-16 grid grid-cols-2 gap-4"
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
          }}
        >
          <div className="text-black">
            <p className="pt-16 text-5xl text-[#27374C] leading-[3.5rem] font-semibold">
              How to Get a Loan with Bad Credit
            </p>

            <p className="leading-7 pt-8 pb-4 text-base">
              Life happens and mistakes can negatively impact your credit score
              for years.Our guide can help people with bad credit get a loan.
            </p>

            <ClickGetStarted />
          </div>
          <div className="w-full flex justify-end py-8">
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadCredit;
