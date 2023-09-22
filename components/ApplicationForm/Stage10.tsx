import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage10() {
  const [ownCarPaidOff, setOwnCarPaidOff] = useState(0);
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Almost there, let&#39;s do this!
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your credit score?
            </p>
            <p className="leading-7 opacity-50">
              We ask for this information to help ensure that you are connected
              with a lender or lending partner that can work for you.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Credit Score
              </p>
              <p>
                <select
                  name="credit_score"
                  id="credit_score"
                  className="py-4 px-1 w-full"
                >
                  <option></option>
                  <option value={850}>850 - 800</option>
                  <option value={799}>799 - 670</option>
                  <option value={669}>669 - 580</option>
                  <option value={579}>579 - 300</option>
                  <option value={0}>not sure</option>
                </select>
              </p>
              <span
                id="credit_score_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Do you have any unsecured debt?
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Unsecured Debt ($)
              </p>
              <p>
                <input
                  type="number"
                  placeholder="e.g. 200"
                  name="unsecured_debt"
                  id="unsecured_debt"
                  className="py-4 px-1 w-full"
                  min={0}
                />
                <span
                  id="unsecured_debt_err"
                  className="flex items-center italic justify-center w-full text-xs text-red-500"
                ></span>
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Do you own a car that is paid off?
            </p>
            <p className="leading-7 opacity-50">
              We may have title loan options for you that could have better
              rates.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="pb-8 opacity-70">
                <input
                  type="number"
                  className="hidden py-4 px-4"
                  name="own_car_paid_off"
                  id="own_car_paid_off"
                  value={ownCarPaidOff}
                />
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="own_car_paid_off_1"
                  id="own_car_paid_off_1"
                  onChange={() => {
                    setOwnCarPaidOff(1);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Yes, and I want to see title loan options
              </p>

              <p className="pb-8 opacity-70">
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="own_car_paid_off_1"
                  id="own_car_paid_off_1"
                  onChange={() => {
                    setOwnCarPaidOff(2);
                  }}
                />
                &nbsp;&nbsp;&nbsp; Yes, but don&#39;t show title loan options
              </p>

              <p className="opacity-70">
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="own_car_paid_off_1"
                  id="own_car_paid_off_1"
                  onChange={() => {
                    setOwnCarPaidOff(3);
                  }}
                />
                &nbsp;&nbsp;&nbsp; No, I don&#39;t own a car that is paid off
              </p>
              <span
                id="own_car_paid_off_err"
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

export default Stage10;
