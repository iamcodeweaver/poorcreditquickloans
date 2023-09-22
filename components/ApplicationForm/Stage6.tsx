import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage6() {
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Tell us more ...
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your monthly income?
            </p>
            <p className="leading-7 opacity-50">
              Income includes wages, retirement, investments, and rental
              properties. Alimony, child support, and separate maintenance
              income do not need to be included if you do not want it to be
              considered as a basis for repayment for the lender&#39;s loan
              offer that you may be connected with.
            </p>
          </div>
          <div className="">
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Monthly Income($)
              </p>
              <p>
                <input
                  type="number"
                  placeholder="0"
                  name="monthly_income"
                  id="monthly_income"
                  className="py-4 px-1 w-full"
                  min={1}
                />
              </p>
              <span
                id="monthly_income_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Are you paid with direct deposit or paper check?
            </p>
            <p className="leading-7 opacity-50">
              How does your employer pay you.
            </p>
          </div>{" "}
          <div className="">
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Income Payment Type
              </p>
              <p>
                <select
                  name="income_payment_type"
                  id="income_payment_type"
                  className="py-4 px-1 w-full"
                  // value={incomePaymentType}
                  // onChange={(event) => setIncomePaymentType(event.target.value)}
                >
                  <option></option>
                  <option value={1}>None</option>
                  <option value={2}>Check</option>
                  <option value={3}>Cash </option>
                  <option value={4}>Direct Deposit</option>
                </select>
              </p>
              <span
                id="income_payment_type_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              When is your next payday?
            </p>
            <p className="leading-7 opacity-50">
              If you receive benefits, alimony, or other non-employment income,
              use the day that you will next receive that type of income
            </p>
          </div>{" "}
          <div className="">
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Next payday
              </p>
              <p>
                <input
                  className="py-4 px-1 w-full"
                  type="date"
                  name="next_payday"
                  id="next_payday"
                  min={new Date().toISOString().slice(0, 10)}
                />
              </p>
              <span
                id="next_payday_err"
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

export default Stage6;
