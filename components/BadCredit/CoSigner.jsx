import React from "react";
import Link from "next/link";
import POS from "../../public/images/pos.png";
import TeaCup from "../../public/images/tea_in_hand.png";
import GetSButton from "../GetSButton/GetSButton";

function CoSigner() {
  return (
    <div className="px-16">
      <div className="text-3xl font-bold text-center py-2">Get a Co-Signer</div>
      <div className="shadow-md p-8 leading-7 opacity-70 text-justify">
        <p className="pb-4">
          Need a loan with bad credit? You can get a co-signer. The fact of the
          matter is that loans for people with bad credit usually come with
          costly terms–a high interest rate being one of them. Your credit score
          will directly impact the interest rate of your loan, which will
          determine how much extra you’ll end up paying for the money you
          borrowed. When you enlist the help of a co-signer, the interest rate
          will be calculated according to the co-signer’s credit score. So, if
          you know someone with a great score and they’re in a position to help
          you get a loan, it doesn’t hurt to ask. Even so much as a 40-point
          difference in a score can save you hundreds of dollars, depending on
          the amount borrowed and the terms agreed upon. Here’s a quick example
          using typical APRs according to credit scores.
        </p>
        <p>
          Let’s say you have a poor credit score of 635 and you apply for a
          small bad credit loan of $5k. In our hypothetical example, this loan
          comes with an interest rate of 29%. That means that you have to pay
          back the loan in full, plus 29% of the total amount borrowed—which is
          a whopping $1,450 for a grand total of $6,450. Now let’s reimagine the
          scenario with a cosigner who has an average credit score of 645 (just
          10 points higher than yours). You are approved for the loan of $5k
          with an interest rate of 19%, which brings your grand total to $5,950.
          By seeking the help of a cosigner with a credit score just barely
          higher than yours, you could potentially save $500 in interest—and the
          savings increase the higher the credit score goes.
        </p>
      </div>

      <div className="pt-16 px-28 text-xs leading-7 py-4 items-center text-center justify-center flex">
        <table className="opacity-80 shadow-md">
          <thead>
            <tr className="bg-white border-[0.1rem]">
              <th className="border font-bold" scope="col">
                Credit Score
              </th>
              <th className="border font-bold" scope="col">
                Amount
              </th>
              <th className="border font-bold" scope="col">
                Rate(APR)
              </th>
              <th className="border font-bold" scope="col">
                Total Paid
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-[0.1rem]">
              <td className="border font-bold" data-label="Term">
                600
              </td>
              <td className="border" data-label="Loan Amount">
                $8,500
              </td>
              <td className="border" data-label="Rate(APR)">
                6.99%
              </td>
              <td className="border" data-label="Payments">
                24
              </td>
            </tr>
            <tr className="bg-white border-[0.1rem]">
              <td className="border font-bold" scope="row" data-label="Term">
                600
              </td>
              <td className="border" data-label="Loan Amount">
                $10,000
              </td>
              <td className="border" data-label="Rate(APR)">
                8.34%
              </td>
              <td className="border" data-label="Payments">
                36
              </td>
            </tr>

            <tr className="bg-white border-[0.1rem]">
              <td className="border font-bold" scope="row" data-label="Term">
                600
              </td>
              <td className="border" data-label="Loan Amount">
                $15,000
              </td>
              <td className="border" data-label="Rate(APR)">
                10.45%
              </td>
              <td className="border" data-label="Payments">
                48
              </td>
            </tr>

            <tr className="bg-white border-[0.1rem]">
              <td className="border font-bold" scope="row" data-label="Term">
                700
              </td>
              <td className="border" data-label="Loan Amount">
                $20,000
              </td>
              <td className="border" data-label="Rate(APR)">
                8.54%
              </td>
              <td className="border" data-label="Payments">
                60
              </td>
            </tr>

            <tr className="bg-white border-[0.1rem]">
              <td className="border font-bold" scope="row" data-label="Term">
                700
              </td>
              <td className="border" data-label="Loan Amount">
                $30,000
              </td>
              <td className="border" data-label="Rate(APR)">
                7.99%
              </td>
              <td className="border" data-label="Payments">
                72
              </td>
            </tr>
            <tr>
              <td colspan={4} className="text-xs opacity-70 p-4 border">
                While these APRs are only examples, this chart gives a good idea
                of how the difference in credit scores and thus rates lead to a
                big difference in total money repaid:
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-16 px-28 text-xs leading-7 py-4 items-center justify-center flex">
        <div className="border shadow-md grid grid-cols-2 gap-8">
          <div className="p-4">
            <p className="text-base font-bold pb-4">Join a Credit Union</p>
            <p className="opacity-70 text-justify">
              Joining a credit union is another great way to avoid the pain
              points of securing small loans for bad credit. At a traditional
              bank or lending office, loans for people with bad credit are
              usually based off of the applicant’s credit score. Credit unions
              do things a little differently. When you are a member of a credit
              union and you apply for a loan, the review process takes into
              account several different factors, not just your score. Credit
              unions may consider your length of employment, your debt-to-income
              ratio, and other components of your overall financial health.
            </p>
          </div>
          <div className="p-4">
            <img src={POS.src} />
          </div>
        </div>
      </div>
      <div className="pt-16 px-28 text-xs text-center leading-7 py-4">
        <p className="text-base font-bold pb-4">Get a Personal Loan</p>
        <p className="opacity-70 px-44">
          If you had some bad luck trying to secure a loan from a financial
          institution, you may want to look for personal installment lenders as
          a more likely alternative. Installment loans for bad credit can come
          with high interest rates, but not always as high as a third-party
          lender. Personal lenders are similar to a credit union in that they
          measure several factors of your overall financial health to approve or
          deny your loan. This is also a more convenient route, as you’ll likely
          find plenty of online loans for bad credit from personal installment
          lenders.
        </p>
      </div>
      <div className="pt-16 px-28 text-xs leading-7 py-4 items-center justify-center flex">
        <div className="border shadow-md grid grid-cols-2 gap-8">
          <div className="p-4">
            <p className="text-base font-bold pb-4">
              Find Fair Personal Loans for Bad Credit
            </p>
            <p className="opacity-70 text-justify">
              Learning how to get a loan with bad credit is the first step; now
              it’s time to use the tips we provided to see if you qualify for a
              personal loan. Learn more about the ins and outs of personal loans
              for bad credit, or{" "}
              <Link href={"/applicationform"} className="underline">
                submit a request
              </Link>{" "}
              for a personal loan right now, so you don’t have to put your life
              on hold.
            </p>
            <div className="pt-16">
              <GetSButton />
            </div>
          </div>
          <div className="p-4">
            <img alt={""} src={TeaCup.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoSigner;
