import React from "react";
import GetSButton from "@/components/GetSButton/GetSButton";
import LaptopWT from "@/public/images/laptop_white_table.png";

function BenefitsOfEL() {
  return (
    <div>
      <div className="px-24 text-xs leading-6 py-4 items-center justify-center flex">
        <div className="border shadow-md grid grid-cols-2 gap-1">
          <div className="p-4 items-center justify-center flex">
            <div>
              <p className="text-base font-bold pb-4">
                Benefits of Emergency Loans
              </p>
              <p className="opacity-70 text-justify">
                Emergency loans tend to get you funding quickly, some even
                deposit the money directly into your account within hours. You
                can use the money for whatever you want, which is a great way to
                add flexibility to a tight budget. There are also options
                available for procuring loans online, which means you can make a
                request for a loan from home and during the hours when most
                businesses are closed. There are a few things to watch out for
                when it comes to emergency loans, however. This type of loan
                usually has higher rates than traditional loans and many
                companies also charge large fees. Some disreputable companies
                even engage in predatory behavior with the hope that you will
                miss a payment so they can charge late fees and keep you
                indebted longer. The best way to avoid this is to always do
                business with a company you know you can trust. For example,
                PoorCreditQuickLoans.com is a service that can connect you to
                lenders, rather than lend you money directly. This means we do
                not benefit from missed or late payments, or collect fees
                associated with your loan. Our priority is to help you gain
                financial freedom by connecting you to a trustworthy lender.
              </p>
            </div>
          </div>
          <div className="p-4  items-center justify-end flex">
            <img src={LaptopWT.src} alt="" />
          </div>
        </div>
      </div>

      <div className="pb-16 text-sm px-24">
        <div className="1">
          <p className="pb-2 pt-8 text-[#27374C] font-semibold">
            How Do I Know if Emergency Loans Are Right For Me?
          </p>
          <div className="text-black px-6 shadow-md border pt-4">
            <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
              Short-term loans are a great option if you know you will be able
              to pay them off right away and you can handle the higher interest
              rates. However, because of the high rates and fast due dates,
              emergency loans are usually best for, well, emergencies. It is
              always wise to research all your available resources and loan
              options before jumping into a financial commitment.
            </p>
          </div>
        </div>

        <div className="2">
          <p className="pb-2 pt-8 text-[#27374C] font-semibold">
            Alternatives to Short-Term Loans
          </p>
          <div className="text-black px-6 shadow-md border pt-4">
            <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
              Emergency loans don’t always have to be short-term or have high
              interest rates. You can take out a personal loan just as quickly
              in many cases, and have the money deposited directly into your
              account. With poorcreditquickloans.com, you can easily submit some
              basic information about your request and we will attempt to
              connect you with a lender. After a successful connection and
              approval, you can receive funds in as little as one business day.
              Learn more about how our process works and the types of loans
              available from our lending partners.
            </p>
          </div>
        </div>

        <div className="3">
          <p className="pb-2 pt-8 text-[#27374C] font-semibold">
            Peer-to-Peer Loans
          </p>
          <div className="text-black px-6 shadow-md border pt-4">
            <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
              A peer-to-peer loan means you borrow money from an investor rather
              than from a lending company. Each lending company works with
              different investors that have their own specific terms and rates.
              Often, you can get lower rates with peer-to-peer loans, making
              them a popular option.
            </p>
          </div>
        </div>

        <div className="4">
          <p className="pb-2 pt-8 text-[#27374C] font-semibold">
            Personal Installment Loans
          </p>
          <div className="text-black px-6 shadow-md border pt-4">
            <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
              With a personal installment loan, you will be presented with the
              terms and conditions of the loan. Each lender has specific
              requirements, so read through the details carefully before signing
              the agreement. Personal installment loans involve a monthly
              payment for a designated period of time, much like a traditional
              loan from a bank, except you can do everything online.
            </p>
          </div>
        </div>
      </div>

      <div className="text-3xl pt-16 pb-4 font-bold text-center">
        Emergency Loan Help
      </div>
      <div className="pb-16">
        <div className="items-center justify-center flex">
          <div className="leading-7 opacity-70 pb-8 text-center w-3/4">
            PoorCreditQuickLoans.com is happy to provide help and support
            throughout your financial journey. You are welcome to contact us
            with any questions you may have about our process. Questions about a
            specific loan you have already agreed to should be taken directly to
            the lender. Get started with PoorCreditQuickLoans.com today!
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

export default BenefitsOfEL;
