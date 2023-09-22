import React from "react";
import TwoTalk from "@/public/images/two-talk.png";

function PayDayNext() {
  return (
    <div className="px-8">
      <div className="A1">
        <p className="text-center pb-12 text-4xl text-[#27374C] font-extrabold">
          Payday Loans
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
              How Do Payday Loans Work?
            </p>
            <p className="opacity-70 text-justify">
              There’s a good chance that you may have heard some negative things
              about payday advance loans. How do payday loans work and why do
              they have such a risky reputation? We’re glad you asked. We’ve
              broken down the typical lending process into 5 steps. You can
              submit a request for a payday loan online or by visiting a lending
              office. If you are approved for a payday loan, you will receive
              your funds in the form of a check, cash, a prepaid debit card, or
              an electronic deposit to your bank account. Before you are granted
              your loan, however, most lenders will require secured repayment to
              ensure that you repay the loan on time. This usually takes the
              form of a post-dated check for the entire loan balance (plus fees
              and interest) or authorization to electronically debit the funds
              from your bank account. You must repay the loan in one lump sum on
              the due date that you and your lender agreed upon. This is usually
              when you receive your next paycheck, or any other kind of
              supplemental income (social security, pension, child support,
              etc.). If you can’t repay the loan on the designated due date,
              chances are your lender will cash the check or withdraw the
              amount. Depending on the laws in your state, lenders may be
              willing to work out a rollover plan or an extended loan term–but
              usually with costly consequences.
            </p>
          </div>
          <div className="p-4 flex justify-end">
            <img src={TwoTalk.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayDayNext;
