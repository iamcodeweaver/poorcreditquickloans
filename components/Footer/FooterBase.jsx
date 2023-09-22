import React from "react";

function FooterBase() {
  return (
    <div>
      <div className="footer__copyright">
        <small>Copyright © 2023 Peddle Technologies</small>
      </div>
      <div className="disclaimer py-2 leading-7 text-justify">
        <div>
          <p>
            <strong>Customer Notice:</strong> A personal loan is an online
            installment loan with loans sizes between $100 and $3,500. A
            personal loan can be a great option for those customers looking to
            borrow money for a wedding, home improvement, or family vacation.
            The online process is designed with customer convenience in mind.
          </p>
          <p>
            <strong>Legal Disclaimer:</strong> PoorCreditQuickLoans.com’s{" "}
            <a href="/terms-of-use">Terms of Use</a> and the
            PoorCreditQuickLoans.com{" "}
            <a href="/privacy-policy">Privacy Policy</a> apply to the use of
            this website and its services. PoorCreditQuickLoans.com connects
            borrowers with lenders or lending partners and thus the specific
            terms and conditions of the specific lender or lending partner will
            apply to any loan a borrower takes out. We are compensated by these
            lenders or lending partners for connecting you with them, and the
            compensation received may affect which offer you are presented with.
            Any display of APR, loan amounts, interest or other loan details are
            estimations only, and actual amounts will vary by lender or lending
            partner and by borrower. Please note that some lenders or lending
            partners may perform credit checks as part of their credit
            transaction approval process. The lender or lending partner you
            connect with may not offer the best possible terms and borrowers
            should always compare all available options before making any
            decisions. In addition, you may be connected with a tribal lender.
            Tribal lenders’ rates and fees may be higher than state-licensed
            lenders, and are subject to federal and tribal laws, not state laws.
            THE OWNERS AND OPERATORS OF THIS WEBSITE ARE NOT LENDERS, they do
            not broker loans and they do not make loans or credit decisions.
            Nothing on this website is an offer or a solicitation to lend. Any
            information you submit to this site will be provided to a lender or
            lending partner. The operator of this website is not an agent,
            representative or broker of any lender or lending partner and does
            not endorse or charge you for any service or product.
          </p>
          <p>
            <strong>Availability:</strong> Every state has its own set of rules
            and regulations that govern personal loan lenders. Your loan amount,
            APR and repayment term will vary based on your credit worthiness,
            state and lender or lending partner.
          </p>
        </div>
        <div>
          <p>
            <strong>Material Disclosure:</strong> The operator of this website
            is not a lender, loan broker or agent for any lender or loan broker.
            This website is not an offer of credit nor is it a solicitation to
            lend. We are not affiliated with any lender. We are an advertising
            referral service for lenders that may be able to offer loans in
            amounts between $100 and $3,500. There is no fee to use our
            services. Your loan request submitted on this website will be shared
            with one or more lenders. There is no guarantee that you will be
            connected with a lender, your loan request will be approved by a
            lender, or you will be offered the loan amount requested. Lenders
            may perform a credit check to determine your creditworthiness or
            verify your information. Any compensation we receive is paid by
            lenders and other advertising partners, and only for advertising
            services provided. If you are offered a loan, it may not necessarily
            have the best rates or terms. Short-term, small-dollar loans should
            not be used as a long-term solution to financial hardship.
          </p>
          <p>
            <strong>APR Disclosure:</strong> The Annual Percentage Rate (APR) is
            the rate at which your loan accrues interest and is based upon the
            amount, cost and term of your loan, repayment amounts and timing of
            payments. APR range for lenders in our network can generally range
            from 5.99% to 35.89% (Qualified Customers only), with loan terms
            from 61 days to 96 months. Your actual rate will depend upon your
            credit score, loan amount, loan term, and credit usage and history.
            Some states have laws limiting the APR that a lender can charge you.
            Lenders are legally required to show you the APR and other terms of
            your loan before you execute a loan agreement.
          </p>
          <p>
            <strong>Credit Implications:</strong> The operator of this website
            does not make any credit decisions. Lenders in our network may
            obtain credit scores or credit reports through the credit reporting
            agencies or alternative providers to determine your
            creditworthiness. By submitting your information to us, you agree to
            allow participating lenders to verify your information and check
            your credit. Late Payments of loans may result in additional fees or
            collection activities, or both. Each lender has their own terms and
            conditions, please review their policies for further information.
            Nonpayment of credit could result in collection activities. Each
            lender has their own terms and conditions, please review their
            policies for further information. Every lender has its own renewal
            policy, which may differ from lender to lender. Please review your
            lender’s renewal policy.
          </p>
        </div>
      </div>{" "}
      <div className="footer_divider py-2">
        <hr />
      </div>
    </div>
  );
}

export default FooterBase;
