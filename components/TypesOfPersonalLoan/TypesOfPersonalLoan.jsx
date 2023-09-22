import { React, useState } from "react";
import AccordionItem from "@/components/AccordionItem/AccordionItem";
import Link from "next/link";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  const faqData = [
    {
      id: 1,
      title: "Peer To Peer Loans",
      description: (
        <>
          Typical Requirements:
          <ul className="list-disc p-4">
            <li>Credit Score: 600+</li>
            <li>Minimum Income: $2,000 per month, must be verifiable</li>
            <li>Income Source: Employed or Self-Employed</li>
            <li>Loan Range Given: $250 to $3,500</li>
          </ul>
          Peer-to-peer lenders connect borrowers directly to investors, rather
          than offering the loan themselves. A peer-to-peer or P2P loan means
          that you will be borrowing money directly from a person or company,
          rather than the bank. Peer-to-peer loans ensure that borrowers are
          paired with individuals looking to invest in a detailed note. Often
          your loan reason will be disclosed to the investors reviewing the
          notes available on the peer-to-peer lender system. As the borrower,
          you will fill out a basic loan request form and post your desired loan
          amount. Investors will then view your listing and choose the one that
          best fits their specific needs. Once a deal is brokered, you will make
          fixed monthly payments to the investor until your loan is paid off.
          The entire process takes place online, so you will never have to leave
          the comfort of your own home. Requesting a loan only takes a few
          minutes, and if you qualify for a peer-to-peer loan you may be given a
          list of loan options to choose from. Many borrowers prefer
          peer-to-peer lending due to lower rates. You can borrow anywhere from
          $250 to $3,500 with a peer-to-peer loan, depending on your credit
          type. PersonalLoans is partnered with several peer-to-peer loan
          lenders and each lender has their own set of investors and terms.
          Peer-to-peer lenders often collect a loan origination fee of anywhere
          between 1 to 5% which is deducted from the loan amount given to the
          borrower.
        </>
      ),
    },
    {
      id: 2,
      title: "Personal Installment Loans",
      description: (
        <>
          Typical Requirements:
          <ul className="list-disc p-4">
            <li>Credit Score: 580+</li>
            <li>Minimum Income: $2,000 per month</li>
            <li>Income Source: Employed, Self-Employed, or Benefits</li>
            <li>Loan Range Given: $1,000 to $3,500</li>
          </ul>
          The personal loan installment loan process is also quick and
          convenient. You can request a loan online by providing basic personal
          and financial information. Your lender or lending partner will provide
          you with a loan agreement individually tailored to your financial
          needs. Once you accept the loan agreement, your loan will be deposited
          directly into your bank account. Again, review the terms of your
          agreement before you sign, as each lender or lending partner will have
          their own specific repayment process. Consumers are encouraged to
          research applicable Federal and state laws, and to ask their lenders
          or lending partners for more information. If a lender or lending
          partner is wholly owned and operated by a federally recognized
          American Indian Tribe and sovereign government, applicable Tribal and
          Federal law governs its loans and related contracts, applications and
          documents. For example, personal installment loans can vary by state.
          Each state has its own rules and regulations for personal loans, so
          your loan amount and rate will depend on where you live. Also, your
          loan amount, APR and length of loan may depend on a variety of factors
          that lenders or lending partners use including your credit score and
          repayment history.
        </>
      ),
    },
    {
      id: 3,
      title: "Bank Personal Loan",
      description: (
        <>
          Typical Requirements:• Credit Score: 580+• Minimum Income: $3,000 per
          month• Income Source: Employed or Self-Employed• Loan Range Given:
          $250 to $3,500
          <ul className="list-disc p-4">
            <li>Credit Score: 580+</li>
            <li>Minimum Income: $3,000 per month</li>
            <li>Income Source: Employed or Self-Employed</li>
            <li>Loan Range Given: $250 to $3,500</li>
          </ul>
          A bank personal loan provides one-on-one local service to borrowers
          who would like to request a loan in person at their local bank. First
          by phone or in person and provide your personal information for the
          loan. Some banks even allow you to request a loan online as well. If
          you request a loan online you will likely be directed to the nearest
          local branch to complete the loan request process in person. After you
          are approved, you will either receive the funds at the branch or they
          will be deposited to your bank account. You may be eligible for a bank
          personal loan up to $3,500, and you can discuss the individual terms
          and payment options at your local branch. Most bank personal loans
          have fixed rates, and may provide you with money in your account as
          soon as one business day, if approved.
        </>
      ),
    },
  ];

  return (
    <div className="px-40">
      <p className="text-2xl leading-6 text-center font-bold py-4 text-[#27374C]">
        Types of Personal Loans®
      </p>

      <div className="">
        {/* ==================== */}
        {faqData.map((data, index) => {
          return (
            <>
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                description={data.description}
                toggle={() => toggle(index)}
              />
              <br />
            </>
          );
        })}
        {/* ==================== */}
      </div>
    </div>
  );
};

export default Faq;
