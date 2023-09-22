import React from "react";
import MoneyHand from "./MoneyHand";

function FastCashLoans() {
  return (
    <div className="px-8">
      <p className="text-center pb-4 text-4xl text-[#27374C] font-extrabold">
        What Are Fast Cash Loans?
      </p>
      <div className="pb-16 text-sm px-16 flex gap-4">
        <div className="text-black">
          <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
            Fast cash loans are self-explanatory. The idea is being able to
            obtain your loan as soon as one business day. There are several
            brick and mortar locations where you can try to obtain a fast cash
            loan in person, but advancing technology and digital developments
            have also made it possible to open a web browser and get a loan
            online without ever having to leave your home. This type of
            installment plan is generally a smaller, short-term loan, as opposed
            to the installment plans that you would utilize for a larger
            purchase such as buying a home or paying for extensive medical bills
            after a major incident.
          </p>
          <p className="text-center pb-4 text-2xl text-[#27374C]">
            How Do Quick Cash Loans Work?
          </p>

          <p className="shadow-md text-xs p-6 leading-8 opacity-70 border-[0.05rem]">
            Seeking a quick loan to cover your financial emergency? It almost
            sounds too good to be true, and you might be wondering, “how do
            quick cash loans work?” The process for a fast cash advance loan is,
            as you guessed it: usually fast. <br />
            If you use the loan request form on our site, all you have to do is
            submit a request, wait a few minutes to find out if a lender will
            offer you a loan, agree to the terms of the loan, and have the cash
            transferred to your checking account as soon as the next business
            day.
          </p>
        </div>
        <div className="pt-8">
          <MoneyHand />
        </div>
      </div>
    </div>
  );
}

export default FastCashLoans;
