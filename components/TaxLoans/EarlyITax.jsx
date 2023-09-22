import React from "react";
import PhoneCalc from "@/public/images/phone-calc.png";

function EarlyITax() {
  return (
    <div className="px-8">
      <div className="A1">
        <p className="text-center pb-6 text-4xl text-[#27374C] font-extrabold">
          Learn How Early Income Tax <br />
          Loans Work
        </p>
        <p className="px-40 pb-16 text-center text-[#27374C]">
          If you’re ready for your next home improvement project and just need
          the funds to get started, check out poorcreditquickloans.com. Learn
          more about us and what we do, then let us help you find a lender for
          your home improvement loans!
        </p>
        <div className="pb-16 text-sm px-16">
          <div className="1">
            <p className="pb-2 pt-4 text-2xl text-[#27374C] font-semibold">
              Payday Loans Definition
            </p>
            <div className="text-black px-6 shadow-md border pt-4">
              <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
                A payday loan is a small, short-term loan with high interest
                rates and additional fees. A standard payday advance loan term
                is less than a month long, as borrowers are expected to repay
                the amount in full with their very next paycheck. Sometimes you
                need cash fast, but a payday loan should be your last resort.
                Payday advance loans may be a quick and easy way to get the
                money you need when you need it, but these loans usually come
                with high interest rates and additional fees and penalties. If
                you have recently been thrown into a difficult financial
                situation, and the only way to keep your head above water is to
                borrow money, you may want to consider a fast cash loan product.
                Fast cash loans are often more flexible and cost-effective than
                payday loans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16">
        <div className="border leading-6 shadow-md grid grid-cols-2 gap-1">
          <div className="p-8">
            <p className="text-base font-bold pb-4">
              What Is a Tax Refund Advance Loan?
            </p>
            <p className="opacity-70 text-justify">
              A tax refund advance loan is just what it sounds like. This is a
              short-term or personal loan that allows you to get your tax refund
              sooner than you normally would. The loan is granted based on the
              expected amount you’ll be getting in your tax refund, and often
              requires you to have your taxes filed in advance of the annual
              deadline. Like any type of personal loan, the money is given with
              the expectation that it will be paid back within a short time. The
              exact timeline depends on the lender, but many common short-term
              loan contracts are a few months to a year long. These types of
              loans are also known as income tax loans or early income tax
              loans. The interest rate and other terms are also dependent upon
              the lender. The loan is usually given by the same company who
              prepared the taxes.
            </p>
          </div>
          <div className="p-4 flex justify-end">
            <img src={PhoneCalc.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarlyITax;
