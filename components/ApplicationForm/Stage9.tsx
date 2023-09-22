import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";
import UsStates from "./UsStates";

function Stage9() {
  const [bankPaidWith, setBankPaidWith] = useState(0);

  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Thanks Please help us verify your identity...
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your driver&#39;s license or state ID number?
            </p>
            <p className="leading-7 opacity-50">
              Providing accurate information allows lenders and lending partners
              to customize your loan offer and gives you the best chance of
              being approved. We may also share this information with our
              marketing partners so they can send you offers or other messages
              about loans, debt relief, and other credit-related services.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">Licence</p>
              <p>
                <input
                  type="text"
                  placeholder="e.g. 782918219"
                  name="license"
                  id="license"
                  maxLength={11}
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="license_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Issuing State
              </p>
              <p>
                <select
                  placeholder="OH"
                  name="issuing_state"
                  id="issuing_state"
                  className="py-4 px-1 w-full"
                >
                  <UsStates />
                </select>
              </p>
              <span
                id="issuing_state_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Are you paid with direct deposit or paper check?
            </p>
            <p className="leading-7 opacity-50">
              If your paycheck is funded directly to your banking account,
              select direct deposit.
              <br />
              TIP: Lenders and lending partners are more likely to fund a loan
              to an account with direct deposit.
            </p>
          </div>{" "}
          <div className="opacity-70">
            <div className="w-full pb-4">
              <p className="pb-4">
                <input
                  type="text"
                  className="hidden"
                  name="bank_paid_with"
                  id="bank_paid_with"
                  value={bankPaidWith}
                />
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="bank_paid_with_1"
                  id="bank_paid_with_1"
                  onChange={() => {
                    setBankPaidWith(1);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Checking / Current
              </p>

              <p className="pb-4">
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="bank_paid_with_1"
                  id="bank_paid_with_1"
                  onChange={() => {
                    setBankPaidWith(2);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Savings
              </p>

              <p className="pb-4">
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="bank_paid_with_1"
                  id="bank_paid_with_1"
                  onChange={() => {
                    setBankPaidWith(4);
                  }}
                />
                &nbsp;&nbsp;&nbsp; None
              </p>

              <p className="pb-4">
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="bank_paid_with_1"
                  id="bank_paid_with_1"
                  onChange={() => {
                    setBankPaidWith(5);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Unknown
              </p>
              <span
                id="bank_paid_with_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>{" "}
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              How many months have you been at your bank?
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Months at Bank
              </p>
              <p>
                <input
                  type="number"
                  placeholder="e.g. 6"
                  name="month_at_bank"
                  id="month_at_bank"
                  min={1}
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="month_at_bank_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
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

export default Stage9;
