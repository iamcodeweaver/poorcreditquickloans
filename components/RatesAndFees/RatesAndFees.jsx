import React from "react";

function RatesAndFees() {
  return (
    <div
      className="pt-16 px-8"
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <div className="A1 pt-16">
        <p className="text-center pb-4 text-4xl text-[#27374C] font-extrabold">
          Rates & Fees
        </p>
        <p className="px-48 leading-7 text-center pb-8">
          Only a lender or lending partner can provide you with information on
          their rates and terms. This will typically happen shortly after your
          loan request is complete, and you are connected with a lender or
          lending partner. PersonalLoans.com does not make credit decisions or
          determine rates and terms. Remember, you are under no obligation to
          accept the loan offer if the terms are not satisfactory for whatever
          reason.
        </p>

        <div className="pb-4 text-sm px-16">
          <div className="1">
            <p className="pb-2 pt-4 text-2xl text-[#27374C] font-semibold">
              Repayment
            </p>
            <div className="text-black px-6 shadow-md border pt-4">
              <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
                Repayment on personal loans is generally performed either
                monthly or once every two weeks, depending either on your
                preferences or your lender&#39;s or lending partner’s terms. You
                may be able to have funds withdrawn automatically from your bank
                account on the date agreed upon with your lender or lending
                partner. Be sure that you read and fully understand all policies
                regarding repayment and understand what you will have to do as a
                borrower to repay the loan. Your loan cannot be conditioned upon
                repayment by electronic funds transfer or automatic withdrawal.
                Consult your lender or lending partner for more details.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-4 text-sm px-16">
          <div className="1">
            <p className="pb-2 pt-4 text-2xl text-[#27374C] font-semibold">
              Personal Loan Costs
            </p>
            <div className="text-black px-6 shadow-md border pt-4">
              <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
                On the whole, the eventual cost of a personal loan will vary a
                great deal based on factors related to the requester, the state
                the requester lives in, the lender or lending partner, and the
                requester&#39;s repayment. Other factors that matter are the
                amount of money that is borrowed, the period of time of the loan
                and the specific interest rates used. Your credit score may also
                be taken into consideration.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-4 text-sm px-16">
          <div className="1">
            <p className="pb-2 pt-4 text-2xl text-[#27374C] font-semibold">
              Standard Personal Loan Terms
            </p>
            <div className="text-black px-6 shadow-md border pt-4">
              <div className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
                While specific terms of personal loans will vary depending on
                our state, your lender or lending partner and your specific
                circumstances, below is a general range of common terms.
                <ul className="list-disc px-4">
                  <li>Loan amount: $1,000 – $35,000</li>
                  <li>Lending period: 90 days - 72 months</li>
                  <li>Payment frequency: Once a month or twice a month</li>
                  <li>Min APR: 5.99%</li>
                  <li>
                    Max APR: 35.99% (Note: APR will vary based on your credit
                    score, repayment history, and other factors.)
                  </li>{" "}
                  <li>Prepayment penalty: None</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatesAndFees;
