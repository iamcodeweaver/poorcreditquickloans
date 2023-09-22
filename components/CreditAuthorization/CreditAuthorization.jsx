import React from "react";

function CreditAuthorization() {
  return (
    <div
      className="pt-16 px-16"
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <div className="A1 flex items-center justify-center">
        <p className="w-3/5 pt-16 text-center pb-12 text-4xl text-[#27374C] font-extrabold">
          Credit Authorization Agreement
        </p>
      </div>

      <div className="px-16 leading-7 pb-16">
        <div className="opacity-70 shadow-md p-4 border text-justify">
          By submitting a loan request on this site, you acknowledge, agree, and
          authorize that:
          <ul className="list-decimal pl-4">
            <li>
              you are submitting a request for a loan and this loan request is a
              business transaction initiated by you;
            </li>
            <li>
              your loan request and all information in it may be shown to
              multiple lenders, lending partners, and marketing partners in our
              network or in other financial networks (together “Partners”) in
              real time or over time so that one or more of them can decide
              whether to offer you a loan or to otherwise advertise their loan
              or other financial products to you;
            </li>
            <li>
              you are providing written instruction under the Fair Credit
              Reporting Act and other applicable laws for PersonalLoans.com’s
              Partners, including, but not limited to the Partners listed below,
              to obtain consumer reporting and other related information about
              you from one or more consumer reporting agencies (including, but
              not limited to TransUnion, Experian and Equifax) for the purposes
              of verifying your identity, determining whether you offer you a
              loan, determining how much debt you currently have in order to
              determine your debt-to-income ratio, and to make other
              prequalification or credit decisions;
            </li>
            <li>
              your Partner may disclose your loan information, including loan
              approval and funding status, to us;
            </li>
            <li>
              many users of this site do not qualify for the loan types or
              amounts they request;
            </li>
            <li>
              some lenders may only offer loans in an amount below the amount
              your requested;
            </li>
            <li>
              any loan terms you may be offered are determined solely by your
              lender and not by us; and
            </li>
            <li>
              you will closely review your loan offer(s) and research various
              loan options and alternatives available to you.
            </li>
          </ul>
          <br />
          Below is a list of some (but not all) of the Partners that may obtain
          consumer reporting and other related information about you:{" "}
          <ul className="pl-4 list-disc">
            <li>OneMain Financial Services, </li>
            <li>Inc. OneMain Financial Group, </li>
            <li>LLC OneMain Consumer Loan, Inc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreditAuthorization;
