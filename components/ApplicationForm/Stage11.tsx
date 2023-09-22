import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage11() {
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Last questions, almost done!
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Access to additional lenders
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-4">
                <input
                  type="checkbox"
                  name="additional_lenders"
                  id="additional_lenders"
                />
                &nbsp;&nbsp;&nbsp;Yes, accept additional lenders
              </p>
              <span
                id="additional_lenders_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 leading-7">
                Accessing our extended network of additional lenders may
                increase your chances of receiving a loan offer because more
                lenders will see your request. The extended network includes the
                poorcreditquickloans.com network of lenders and also third party
                lender networks that have access to additional lenders. The
                other lender networks and additional lenders will see your
                information. Learn more here.
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Other credit-related offers
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-4">
                <input
                  type="checkbox"
                  name="credit_offers"
                  id="credit_offers"
                />
                &nbsp;&nbsp;&nbsp;Yes, other credit-related offers
              </p>
              <span
                id="credit_offers_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 leading-7">
                You will receive additional offers that you may find helpful
                even if no lender offers you a loan. This includes offers for
                loans, debt relief, banking, credit repair, credit monitoring,
                or other credit-related offers. We may share your contact
                information so they can make you an offer or send you a message.
                These other offers help us make a financial profit off of our
                free service. Learn more here.{" "}
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Required Authorizations
            </p>
            <p className="opacity-70">
              We are required by law to obtain these authorizations from you
              before you can use our service.
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-4">
                <input
                  type="checkbox"
                  name="required_authorization"
                  id="required_authorization"
                />
                &nbsp;&nbsp;&nbsp;I agree
              </p>
              <span
                id="required_authorization_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 leading-7">
                By checking the box, I authorize this site to share all of my
                information with its Lending Partners to process my loan
                inquiry, as described in more detail in the Ad Disclosure &
                Privacy Policy. This site is protected by reCAPTCHA and the
                Google Privacy Policy and Terms of Service apply. By clicking
                &nbsp;<b>Submit</b>, you agree as follows: I confirm that I have
                read, understood, and agree to the Ad Disclosure, Privacy
                Policy, Terms of Use, E-Consent, and Credit Authorization. I
                authorize poorcreditquickloans.com to use my information to
                create an account that will allow me to more easily submit
                future loan inquiries on this site and its affiliated sites.
              </p>
            </div>
            <br />
            <div className="w-full py-4 flex justify-end items-end gap-4">
              <PrevNextButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage11;
