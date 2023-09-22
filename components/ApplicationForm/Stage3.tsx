import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage3() {
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        <span style={{ color: "green" }} id="displayname"></span>, we&#39;re
        here to help with your loan request.
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your contact information?
            </p>
            <p className="leading-7 opacity-50">
              Lending partners may reach out to you to confirm your loan
              request. You may also receive offers for other credit-related
              services. Learn more here.
            </p>
          </div>{" "}
          <div className="">
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">Email</p>
              <p>
                <input
                  placeholder="email@testemail.com"
                  name="email"
                  id="email"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="email_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 pt-2">
                By entering your email, you agree to receive emails from us, our
                lending partners, and other marketing partners offering or
                marketing loans, debt relief, and other credit-related services.
              </p>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Phone number
              </p>
              <p>
                <input
                  placeholder="1800902832"
                  name="phone_no"
                  id="phone_no"
                  className="py-4 px-1 w-full"
                  maxLength={11}
                />
              </p>
              <span
                id="phone_no_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 pt-2">
                Entering your phone number and clicking <b>Next</b> is your
                e-signature instructing us and up to five of our lending
                partners and other marketing partners to send you offers and
                other messages about loans, debt relief, and other
                credit-related services by text message, automatic phone call,
                and/or prerecorded message, even if you are on a do-not-call
                list. Consent is not required to buy any goods and services; you
                may choose to contact customer support at 1-800-772-2274.
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

export default Stage3;
