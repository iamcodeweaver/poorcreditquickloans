import React from "react";
import GetSButton from "@/components/GetSButton/GetSButton";

function DDCW() {
  return (
    <div>
      <div className="px-24 leading-6 py-4 items-center justify-center flex">
        <div className="3">
          <p className="pb-2 pt-4 text-[#27374C] font-semibold">
            Does Debt Consolidation Work?
          </p>
          <div className="text-black px-6 shadow-md border pt-4">
            <div className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
              As mentioned above, debt consolidation works great if you are able
              to consistently make the payments and avoid incurring further
              debt. Check out some of the pros and cons below to decide if this
              debt payment method is right for you.
              <br />
              <b>Pros</b>
              <br />
              <ul className="list-disc pl-4">
                <li>
                  You can save a lot of money with lower payments and lower
                  interest rates.
                </li>
                <li>
                  Monthly payments force you to stay on a schedule for paying
                  down debt.
                </li>
                <li>
                  Signing up for automatic withdrawal payments may be able to
                  get you an even lower rate.
                </li>
                <li>
                  Successfully paying off debt can improve your credit score
                  over time.
                </li>
              </ul>
              <br />
              <b>Cons</b>
              <br />
              <ul className="list-disc pl-4">
                <li>
                  If you have a variable rate, it may not stay low as long as
                  you need it to.
                </li>
                <li>
                  If the terms of your loan are longer, you may be paying on the
                  debt much longer.
                </li>
              </ul>
              <br />
              <b>Pro Tip</b>
              <br />
              <ul className="list-disc pl-4">
                <li>
                  If consolidating debt frees up money in your budget, put it
                  into an emergency fund or add it to your payments to get out
                  of debt more quickly. Do not think of it as “extra” money and
                  spend it.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-3xl pt-16 pb-4 font-bold text-center">
        Debt Consolidation Help
      </div>
      <div className="pb-16">
        <div className="items-center justify-center flex">
          <div className="leading-7 opacity-70 pb-8 text-center w-3/4">
            Learning how to consolidate credit card debt and other payments can
            be simple with the right assistance. PoorCreditQuickLoans.com can
            get you on track by connecting you with a lender that can work for
            you. Simply fill out an online request form and we’ll let you know
            if one of our lending partners has an offer for you! Learn more
            about how to consolidate debt with Poorcreditquickloans.com today!
          </div>
        </div>
        <div className="items-center justify-center flex">
          <div className="border w-1/3">
            <GetSButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DDCW;
