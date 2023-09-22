import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import ClickGetStarted from "../ClickGetStarted/ClickGetStarted";

function PayDayLoans() {
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
              Payday Loans
            </p>

            <p className="leading-7 pt-8 pb-4 text-base">
              How do payday loans work, should you submit a request for one, and
              what are the pros and cons? We’ve got all the answers you need
              right here. If you’re in a bind, this information will help you to
              make a wise and well-informed decision so as to not further your
              financial disarray.
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

export default PayDayLoans;
