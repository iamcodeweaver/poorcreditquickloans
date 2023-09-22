import React from "react";
import PhoneHand from "@/public/images/phone_hand.png";
function OLoans() {
  return (
    <div className="px-8">
      <div className="A1">
        <p className="text-center pb-6 text-4xl text-[#27374C] font-extrabold">
          Online Loans
        </p>
        <div className="pb-16 text-sm px-16">
          <div className="1">
            <p className="pb-2 pt-4 text-2xl text-[#27374C] font-semibold">
              What Are Online Loans?
            </p>
            <div className="text-black px-6 shadow-md border pt-4">
              <p className="leading-7 pt-2 pb-4 text-sm text-justify opacity-70">
                An online loan is similar to a traditional loan, except that
                everything is done over the internet. As long as you have a
                connection to the internet, you can fill out a loan request.
                There are many different types of online loans, as well as
                online lenders.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16">
        <div className="border leading-6 shadow-md grid grid-cols-2 gap-1">
          <div className="p-8">
            <p className="text-base font-bold pb-4">
              Why Use poorcreditquickloans.com?
            </p>
            <p className="opacity-70 text-justify">
              Submitting a request for an online loan through a trusted company
              like poorcreditquickloans.com is a great way to find lenders
              without all the research and guessing. We are not lenders
              ourselves; we have our own large network of lenders and also work
              with other third-party lender networks. So, by submitting the loan
              request form on poorcreditquickloans.com, your information is
              shown to this large extended network of lenders so they can decide
              whether to offer you a loan based on the information you provided.
              This can save you time because you won’t have to go to a bunch of
              individual lenders to find one willing to offer you a loan. Also,
              if no lenders offer you a loan, we may pass some limited
              information about you to other partners so you can receive offers
              for debt relief, credit repair, credit monitoring or other related
              services.
            </p>
          </div>
          <div className="p-4 flex justify-end">
            <img src={PhoneHand.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OLoans;
