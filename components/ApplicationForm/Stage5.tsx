import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage5() {
  const [ownsHome, setOwnsHome] = useState("");

  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        Next, tell us more about your employment.
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your primary source of income?
            </p>
            <p className="leading-7 opacity-50">
              Our Lenders and lending partners require this information to
              determine your eligibility and your ability to repay your loan.
              Alimony, child support, and seperate maintenance income do not
              need to be included if you do not want it to be considered as a
              basis for repayment for lender’s loan offer that you may be
              connected with.
            </p>
          </div>
          <div className="">
            <div className="">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Income source
              </p>
              <p>
                <select
                  name="income_source"
                  id="income_source"
                  className="py-4 px-1 w-full"
                  // value={incomeSource}
                  // onChange={(event) => setIncomeSource(event.target.value)}
                >
                  <option></option>
                  <option value={1}>Unemployed</option>
                  <option value={2}>Self Employed</option>
                  <option value={3}>Employment Full-TIme</option>
                  <option value={4}>Employment Part-TIme</option>
                  <option value={5}>Employment Temporary</option>
                  <option value={6}>Pension</option>
                  <option value={7}>DIsability Benefits</option>
                  <option value={8}>Benefits or Alimony</option>
                  <option value={10}>Other</option>
                </select>
              </p>
              <span
                id="income_source_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              If you are employed, how long have you been employed for?
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Time employed
              </p>
              <p>
                <input
                  type="number"
                  placeholder="e.g. 1 - 10"
                  name="time_employed"
                  id="time_employed"
                  min={1}
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="time_employed_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              How often do you get paid or receive other income?
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                I get paid
              </p>
              <p>
                <select
                  className="py-4 px-1 w-full"
                  name="pay_frequency"
                  id="pay_frequency"
                  // value={paymentFreq}
                  // onChange={(event) => setPaymentFreq(event.target.value)}
                >
                  <option></option>
                  <option value={1}>None</option>
                  <option value={2}>Weekly - paid every 7 days</option>
                  <option value={3}>Every 2 weeks -(Every 14 days) </option>
                  <option value={22}>Monthly (paid once a month)</option>
                  <option value={8}>Twice a month</option>
                  <option value={5}>Last Day of the Month</option>
                  <option value={6}>Last Working Day of the Month</option>
                  <option value={9}>Every four Weeks</option>
                  <option value={10}>Last Friday of the Month</option>
                  <option value={11}>Last Thursday of the Month</option>
                  <option value={12}>Last Wednesday of the Month</option>
                  <option value={13}>Last Tuesday of the Month</option>
                  <option value={14}>Last Monday of the Month</option>
                  <option value={15}>Other</option>
                </select>
              </p>
              <span
                id="pay_frequency_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Are you in the military, or are you the spouse or dependant of
              someone in the military?
            </p>
          </div>
          {/* <div className="">
            <div className="w-full pb-4">
              <p className="pb-8">
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="in_military_1"
                  id="in_military_1"
                  // value={inMilitary}
                  // onChange={(e) => {
                  //   setInMilitary(4);
                  // }}
                />
                &nbsp;&nbsp;&nbsp; YES
              </p>

              <p>
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="in_military"
                  // value={inMilitary}
                  // onChange={(e) => {
                  //   setInMilitary(1);
                  // }}
                />
                &nbsp;&nbsp;&nbsp; NO
              </p>
            </div>
            <br />
            <div className="w-full py-4 flex justify-end items-end gap-4">
              <PrevNextButton />
            </div>
          </div> */}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Military service
              </p>
              <p className="">
                <select
                  id="military_service"
                  name="military_service"
                  className="py-4 px-1 w-full"
                >
                  <option></option>
                  <option value={1}>None</option>
                  <option value={2}>Veteran</option>
                  <option value={3}>Inactive Reserves</option>
                  <option value={4}>Active Duty</option>
                  <option value={5}>Active Reserves</option>
                  <option value={6}>Unknown</option>
                </select>
              </p>
              <span
                id="military_service_err"
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

export default Stage5;
