import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function OnlineLoans() {
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
              Personal Loans Online
            </p>

            <p className="leading-7 pt-8 pb-4 text-base">
              Looking for personal loans online is a great way to find lenders
              that may be willing to extend a loan offer to you.
              poorcreditquickloans.com is a great resource to connect you with
              lenders who may be able to find an offer that can work for you.
              We’ll assist you in getting the funds for a variety of projects
              and personal reasons, and we allow submissions for all credit
              types. Learn more below about online loans, how they work, and how
              to go through the online loan process.
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

export default OnlineLoans;
