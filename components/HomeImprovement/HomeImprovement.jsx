import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function HomeImprovement() {
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
              How to Get a Home Improvement Loan
            </p>

            <p className="leading-7 pt-8 pb-4 text-base">
              Home remodels and repairs can be extremely costly, generally much
              more than we have lying around as disposable income. Thankfully,
              putting on a new roof, remodeling the kitchen, or finishing the
              basement are well worth the money, especially when the time comes
              to sell the house. Learn more below about how to get a home
              improvement loan to fund your upcoming projects.
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

export default HomeImprovement;
