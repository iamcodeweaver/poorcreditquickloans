"use client";
import React from "react";
// import "./faq.css";
import SimpleAccordion from "./SimpleAccordion";

const FaqTwo = () => {
  const q1 = `What is “Annual Percentage Rate” - APR?`;
  const q2 = `How do I repay my loan?`;
  const q3 = `What if I am late on payments?`;
  const q4 = `Are there applicable fees?`;
  const q5 = `What products or services will I receive offers for?`;
  const q6 = `Why choose a Personal Loan?`;

  const a1 = `The Annual Percentage Rate (APR) signifies the yearly interest rate applied to borrowing and is presented as a percentage, reflecting the real annual expense of funds throughout the loan's duration. Given the differing interest-rate arrangements, transaction charges, late fees, and other elements among loans, utilizing a standardized calculation like the APR offers borrowers a comprehensive figure for simple comparison with rates from different lenders. It's essential to directly reach out to the lender you're linked with to thoroughly review and comprehend the unique particulars of your loan agreement.`;
  const a2 = `Lenders within the Poor Credit, Quick Loan network and other third-party lender networks we engage with typically offer online platforms for electronic payments and account management. Moreover, these lenders typically provide customer service representatives who are available to assist with phone payments. The personal loan options you may receive via our service generally come with a repayment period ranging from a minimum of 90 days to a maximum of 72 months. All lenders are mandated by law to transparently present the terms of your loan offer before you can accept it. It's crucial to thoroughly review all disclosures and the complete loan agreement before accepting any loan, ensuring a clear understanding of the comprehensive details concerning APR and repayment terms. Always bear in mind that we do not act as a lender and are not directly involved in the loan process with any lenders.`;
  const a3 = `If you anticipate difficulty in making a payment, it's important to reach out to your lender promptly. Their customer support team may be able to arrange a later due date as a courtesy. Similarly, if you've already missed a payment, it's advisable to directly contact the lender. They are available to provide assistance and you may have the opportunity to negotiate a new payment plan that aligns better with your current financial situation. Whether you're facing a delay in payment or are unable to make a payment, it's essential to communicate directly with your lender so they can provide the necessary assistance`;
  const a4 = `Poor Credit, Quick Loan offers its services to you at no cost. Nevertheless, in the event that you accept a loan offer from a lender, the lender generally imposes an origination fee or additional charges. By law, lenders are obligated to clearly disclose these charges and provide essential loan details before you commit to accepting a loan offer. It is vital to carefully review and comprehend the terms of the agreement before affixing your signature.`;
  const a5 = `Upon using our service, we begin by attempting to link you with a lender, either within our primary network of lenders or through our broader network of lenders. Following this, we might display supplementary advertisements or offers related to lenders, as well as other credit-related products or services such as debt relief, credit repair, and credit monitoring. Additionally, your contact information is added to our marketing list, making you eligible to receive further marketing communications from lenders or these other credit-related providers. To find out more, consult our Ad Disclosure.`;
  const a6 = (
    <>
      Poor Credit, Quick Loan provides a swift and adaptable platform to connect
      you with a lender and facilitate the loan application process. A loan
      designed for those with poor credit, it offers a speedy and convenient way
      to obtain funds promptly. If a lender from our network or any third-party
      lender networks we collaborate with extends a loan offer, you&#39;ll have
      the opportunity to carefully review the loan terms before deciding to
      accept or decline. Repayments are structured over a fixed duration and
      typically come with a set interest rate. <br />
      <br />
      In the event that lenders do not extend a loan offer, we may share limited
      contact details with our partners, enabling you to explore offers related
      to debt relief, credit improvement, credit monitoring, or similar
      services.
    </>
  );

  return (
    <div>
      <div className="pt-24">
        <div
          className="pb-16 text-sm px-36"
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   background:
          //     "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
          // }}
        >
          <div className="text-black">
            <p className="pt-24 pb-8 text-4xl text-[#27374C] leading-[3.5rem] text-center font-semibold">
              Frequently Asked Questions
            </p>
            <div>
              <SimpleAccordion header={q1} body={a1} />
              <SimpleAccordion header={q2} body={a2} />
              <SimpleAccordion header={q3} body={a3} />
              <SimpleAccordion header={q4} body={a4} />
              <SimpleAccordion header={q5} body={a5} />
              <SimpleAccordion header={q6} body={a6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqTwo;
