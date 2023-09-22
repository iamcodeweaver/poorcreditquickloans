import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage8() {
  const [bankAccountType, setBankAccountType] = useState(0);

  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Your request is almost complete
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What type of bank account do you have?
            </p>
            <p className="leading-7 opacity-50">
              Select the type of account you would like your loan deposited to.
              <br />
              TIP: Lenders and lending partners are more likely to fund to a
              checking account than a savings account.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="pb-8">
                <input
                  type="radio"
                  className="hidden py-4 px-4"
                  name="bank_account_type"
                  id="bank_account_type"
                  value={bankAccountType}
                />
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="bank_account_type_1"
                  id="bank_account_type_1"
                  onChange={() => {
                    setBankAccountType(1);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Checking
              </p>

              <p>
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="bank_account_type_1"
                  id="bank_account_type_1"
                  onChange={() => {
                    setBankAccountType(2);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Savings
              </p>
              <span
                id="bank_account_type_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>{" "}
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your Social Security Number?
            </p>
            <p className="leading-7 opacity-50">
              Lenders and lending partners use your SSN to verify your identity,
              to help prevent fraud and to check your credit. It is important to
              provide a valid SSN when submitting a loan request. We use data
              encryption to protect your information when submitting on our
              website.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Social Security Number
              </p>
              <p>
                <input
                  type="text"
                  placeholder="e.g 180989812"
                  name="ssn"
                  id="ssn"
                  maxLength={9}
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="ssn_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              <p className="opacity-70 pt-2">
                By entering your social security number, you are providing
                written instruction under the Fair Credit Act and other laws for
                poorcreditquickloans.com and the lenders who review your loan to
                obtain your credit report from one or more consumer reporting
                agencies and to use your credit profile and the information you
                provide on this form to evaluate your loan inquiry and your
                creditworthiness.
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

export default Stage8;
