import React, { useState } from "react";
import Image from "next/image";
import SubmitButton from "./SubmitButton";
import LoanCheck from "@/public/images/loan_check.png";
import PreviousButton from "./PreviousButton";

function Stage12() {
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        <span style={{ color: "green" }} id="displayname" />, we have several
        partners interested in providing you funding.
      </p>
      <div className="shadow-md">
        <div className="px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Submit below to complete your loan request.
            </p>
            <p className="opacity-70">
              We have additional lenders and lending partners that may still
              offer you a loan of $1500 or under. These loan amounts, interest
              rates and repayment terms may differ from what is listed on our
              site.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Other credit-related offers
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                ABA/Routing Number
              </p>
              <p>
                <input
                  type="text"
                  placeholder="e.g. 122235821"
                  name="routing_number"
                  id="routing_number"
                  maxLength={9}
                  className="py-4 px-1 w-full "
                />
              </p>
              <span
                id="routing_number_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Name of the Bank
              </p>
              <p>
                <input
                  type="text"
                  placeholder="Chase Bank"
                  name="name_of_bank"
                  id="name_of_bank"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="name_of_bank_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Account number
              </p>
              <p>
                <input
                  type="text"
                  placeholder="e.g. 1920189920"
                  name="account_number"
                  id="account_number"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="account_number_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4"></p>
          </div>
          <div className="">
            <div className="pb-4">
              <p>
                <Image src={LoanCheck.src} alt={""} width={300} height={100} />
              </p>
            </div>
            <br />
            <span
              id="final_err"
              className="flex text-center items-center italic justify-center w-full text-xs text-green-700"
            ></span>
            <div className="w-full py-4 flex justify-end items-end gap-4">
              <PreviousButton />
              <SubmitButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage12;
