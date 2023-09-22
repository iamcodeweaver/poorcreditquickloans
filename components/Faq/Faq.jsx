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
      id: 6,
      title: "Why choose a Poor Credit Quick Loan?",
      description: `Poor Credit Quick Loans™ offers a fast and flexible form to help connect you to a lender and complete an application with them. A personal loan can be used for many reasons and can be a quick and easy way to receive funds up front. If a lender from our network or one of the other third-party lender networks we use offers you a loam, you’ll be able to review the loan terms before accepting or declining the offer. Payments are due over a fixed period of times and often carry a fixed interest rate.

    If no lenders offer you a loan, we may pass some of your limited contact information to other partners so you can receive offers for debt relief, credit repair, credit monitoring, or similar services.`,
    },
    {
      id: 1,
      title: "Are there applicable fees?",
      description:
        "Poor Credit Quick Loans™ provides its service completely free of charge to you. However, if you accept a loan offer from a lender, the lender will typically charge an origination fee or other fees. Lenders are required by law to disclose these fees and other important loan information to you before you accept a loan offer. It is important to fully read through the terms of the agreement prior to signing.",
    },
    {
      id: 2,
      title: "How do I repay my loan?",
      description:
        "Lenders in the Poor Credit Quick Loans™ network and in the other third-party lender networks we use generally have online systems available to take electronic payments and manage your account. These lenders also generally have customer service agents who may be happy to take your payment by phone. The loan offers you may receive through our service generally have a 90-day minimum repayment and a 72-month maximum repayment term. All lenders are required by law to clearly disclose the terms of your loan offer before you can accept the offer. Before accepting any loan, you should carefully read all disclosures and the loan agreement in their entirety, and understand the detailed information about APR and repayment terms. Always remember that we are not a lender and we are not involved with the loan process with any lenders.",
    },
    {
      id: 3,
      title: "What if I am late on payments?",
      description:
        "If you think you won’t be able to make a payment, you should contact your lender immediately. Their customer support team might be able to offer you a later courtesy due date. As well, if you have already missed a payment, you should contact the lender directly. They are there to help. You may be able to make a new payment arrangement that is better suited to your current budget. Whether you are late on a payment or are unable to make a payment, get in touch with your lender directly so they can assist you.",
    },

    {
      id: 4,
      title: "Who will see my information?",
      description: (
        <div>
          First we show all the information you submit to the lenders in our
          direct network that have expressed an interest in making loans to
          consumers like you. If none of them want to pay us to be connected
          with you, we send all of your information to our extended network of
          non-lender third-party lender networks so they can try to find a
          lender in their network that is willing to pay us to be connected with
          you. All of the parties described above, and, in many cases, their
          service providers, will see all of your information to try to find or
          make you a loan. After we try to connect you with a lender, we may
          show you other ads. If you click these ads, we may share your contact
          info with these advertisers so they can contact you about their
          products or services. We may also send you additional marketing
          communications. If so, the service providers we use for this marketing
          may see your contact information to facilitate this additional
          marketing to you. Learn more in our{" "}
          <Link style={{ color: "lightblue" }} href={"/addisclosure"}>
            Ad Disclosure
          </Link>{" "}
          and{" "}
          <Link style={{ color: "lightblue" }} href={"/privacypolicy"}>
            Privacy Policy
          </Link>
          .
        </div>
      ),
    },
    {
      id: 5,
      title: "What products or services will I receive offers for?",
      description: (
        <div>
          What products or services will I receive offers for? When you use our
          service, we first try to connect you with a lender, either through our
          direct network of lenders or through our extended network of lenders.
          Then we may show you additional ads or offers for lenders and/or other
          credit-related products or services like debt relief, credit repair,
          credit monitoring. You are also added to our marketing list and may
          receive additional marketing communications from lenders or these
          other credit-related providers. Learn more in our{" "}
          <Link style={{ color: "lightblue" }} href={"/addisclosure"}>
            Ad Disclosure
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="px-80">
      <p className="text-2xl leading-6 text-center font-bold py-4 text-[#27374C]">
        Frequently Asked Questions
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
