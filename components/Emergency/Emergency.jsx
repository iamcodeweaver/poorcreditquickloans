import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function DebtConsolidation() {
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
              How to Get Emergency Loan Help{" "}
            </p>
            <p className="leading-7 pt-8 pb-4 text-base">
              We all hope we’ll never find ourselves in an emergency situation
              that requires money we don’t have on hand. Unfortunately, these
              incidents are quite common. Car repairs, medical bills, and
              unemployment sneak up on the best of us, and if we don’t have
              enough money in our bank accounts, we need to know what our
              options are. One way to handle unexpected expenses like these is
              with emergency loans.
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

export default DebtConsolidation;
