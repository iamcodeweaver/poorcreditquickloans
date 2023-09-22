import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function TaxLoans() {
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
              Getting Your Tax Refund
            </p>

            <p className="leading-7 pt-8 pb-4 text-base">
              Many people count on their annual tax refund to pay for home
              projects, travel, or other bills that might be piling up over
              time. But sometimes refunds are delayed by the federal government,
              leaving filers waiting around for their anticipated check in the
              mail. Or other times, costs come up that were unplanned for and
              have no way to be paid.
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

export default TaxLoans;
