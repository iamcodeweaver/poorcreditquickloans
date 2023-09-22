import { useEffect, useState } from "react";
import NextButton from "./NextButton";

function Stage1() {
  const [ipAddress, setIpAddress] = useState("");

  const adultMin = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  )
    .toISOString()
    .slice(0, 10);

  const getIP = (e) => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      });
  };

  return (
    <div data-step className="app-form">
      <div>
        <p className="pb-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
          <br />
          First, we&#39;ll want to know a little bit about you.
        </p>
      </div>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your name?
            </p>
            <p className="leading-7 opacity-50">
              Providing accurate information allows lenders and lending partners
              to customize your loan offer and gives you the best chance of
              being approved. <br />
              <br />
              We may also share this information with our marketing partners so
              they can send you offers or other messages about loans, debt
              relief, and other credit-related services.
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                First name
              </p>
              <p>
                <input
                  type="text"
                  placeholder="John"
                  name="firstname"
                  id="firstname"
                  className="py-4 px-1 w-full"
                  onChange={getIP}
                />
                <span
                  id="fn_err"
                  className="flex items-center italic justify-center w-full text-xs text-red-500"
                ></span>
              </p>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Last name
              </p>
              <p>
                <input
                  type="text"
                  placeholder="Smith"
                  name="lastname"
                  id="lastname"
                  className="py-4 px-1 w-full"
                />
                <span
                  id="ln_err"
                  className="flex items-center italic justify-center w-full text-xs text-red-500"
                ></span>
              </p>
            </div>
          </div>
          <br />
        </div>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your date of birth?
            </p>
            <p className="leading-7 opacity-50">
              Our lenders may use your date of birth to verify your identity and
              evaluate your loan inquiry.
            </p>
          </div>{" "}
          <div className="flex gap-2">
            <div className="w-full">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Date of birth
              </p>

              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                max={adultMin}
                className="py-4 px-1 w-full text-center"
              />
              <span
                id="dob_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is the amount of loan you want to request for?
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Loan Amount
              </p>
              <p>
                <input
                  type="number"
                  placeholder="e.g. 1000"
                  name="loan_amount"
                  id="loan_amount"
                  min={100}
                  className="py-4 px-1 w-full"
                />
                <span
                  id="loan_amount_err"
                  className="flex items-center italic justify-center w-full text-xs text-red-500"
                ></span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is the loan reason?
            </p>
            <p className="leading-7 opacity-50">
              Please let us know what you plan to use your loan for.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Loan reason
              </p>
              <p>
                <select
                  id="loan_reason"
                  name="loan_reason"
                  className="py-4 px-1 w-full"
                >
                  <option value={0}>select</option>
                  <option value={4}>debt consolidation</option>
                  <option value={1}>Subsistence</option>
                  <option value={2}>one off purchase</option>
                  <option value={5}>auto purchase</option>
                  <option value={6}>pay bills</option>
                  <option value={7}>pay off loan</option>
                  <option value={8}>short term cash</option>
                  <option value={9}>home improvements</option>
                  <option value={10}>vacation</option>
                  <option value={11}>household or personal goods</option>
                  <option value={12}>presents</option>
                  <option value={13}>Household Bills</option>
                  <option value={14}>celebration or major event</option>
                  <option value={15}>education or training</option>
                  <option value={16}>relocation</option>
                  <option value={17}>pets</option>
                  <option value={18}>entertainment</option>
                  <option value={19}>gambling</option>
                  <option value={20}>medical expenses</option>
                  <option value={21}>rent or mortgage</option>
                  <option value={22}>emergency</option>
                  <option value={23}>help someone</option>
                  <option value={24}>car repair</option>
                  <option value={25}>wedding</option>
                  <option value={26}>unknown</option>
                  <option value={3}>other</option>
                </select>{" "}
                <span
                  id="loan_reason_err"
                  className="flex items-center italic justify-center w-full text-xs text-red-500"
                ></span>
              </p>
            </div>
          </div>
          <br />
          <input
            id="ip_address"
            name="ip_address"
            value={ipAddress}
            className="hidden"
          />
          <div className="w-full py-4 flex justify-end items-end">
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage1;
