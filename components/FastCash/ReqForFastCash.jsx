import React from "react";
import Link from "next/link";
import POS from "../../public/images/pos.png";
import GetSButton from "../GetSButton/GetSButton";

function ReqForFastCash() {
  return (
    <div className="px-16">
      <div className="text-3xl pb-8 font-bold text-center py-2">
        Requirements for Fast Cash Loans
      </div>
      <div className="shadow-md border p-8 leading-7 opacity-70 text-justify">
        <div className="pb-4">
          There are a certain set of requirements to submit a request for fast
          cash loans that most lenders adhere to. For your quick reference,
          we’ve listed some of them below:
          <ul className="list-disc pl-8">
            <li>You must be at least 18 years old</li>
            <li>
              You must have an active bank account where you would like the
              funds deposited
            </li>
            <li>
              You must have proof of income and in some cases, make more than
              $500 a month
            </li>
          </ul>
          <br />
          These requirements are bound to vary from lender to lender. For
          example, some lenders require a certain minimum credit score. Others
          might ask for copies of your bank statements for the last three
          months. These requirements are in place to help the lender determine
          how likely you are to repay the loan within the designated installment
          term.
        </div>
      </div>
      <div className="text-3xl pt-16 pb-4 font-bold text-center">
        Submit a Loan Request
      </div>
      <div className="pb-16">
        <div className="items-center justify-center flex">
          <div className="leading-7 opacity-70 pb-8 text-center w-3/4">
            Go to Poorcreditquickloans.com today fill out our online form or
            clear up any questions you may have about quick cash loans. For more
            information about our personal loan process and how it all works,
            visit our website.
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

export default ReqForFastCash;
