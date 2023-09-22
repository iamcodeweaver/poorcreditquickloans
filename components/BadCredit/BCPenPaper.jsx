import React from "react";
import PenPaper from "./PenPaper";

function BCPenPaper() {
  return (
    <div className="px-8">
      <div className="pb-16 text-sm px-16 flex gap-4">
        <div className="text-black">
          <p className="text-4xl text-[#27374C] leading-[2.5rem] pt-4 font-extrabold">
            Bad Credit
          </p>

          <p className="leading-7 pt-2 pb-4 text-sm opacity-70">
            Oftentimes those with poor credit are offered bad credit loans, with
            no other option than to borrow money at higher interest rates and
            serious penalty fees, but what else can be done? Life happens, and
            it happens fast, hard, and unexpectedly—usually throwing more
            curveballs than you can handle all at once. The car breaks down, you
            get laid off, or an accident occurs that results in a tidal wave of
            medical bills.
          </p>
          <p className="leading-7 pt-2 pb-4 text-sm opacity-70">
            When you&#39;re put into a situation where quick cash is the only
            way to stay afloat, you&#39;re almost immediately reminded of your
            credit score. Those three digits can play a big factor in the
            outcome of your loan request. They are the cherry on top of an
            overbearing situation, the straw that breaks the camel&#39;s back.
          </p>
          <p className="shadow-md text-xs p-6 leading-8 opacity-70 border-[0.05rem]">
            Don&#39;t despair. We&#39;re not a lender, but we&#39;ve written
            this article to help you avoid the fatal pitfalls and vice-grip
            money lenders that may be out there. These tips will teach you how
            to request a loan with bad credit, so you can keep moving forward
            despite an unfortunate situation.
          </p>
        </div>
        <div className="pt-8">
          <PenPaper />
        </div>
      </div>
    </div>
  );
}

export default BCPenPaper;
