import React, { useEffect, useState } from "react";
import PrevNextButton from "./PrevNextButton";
import UsStates from "./UsStates";

function Stage2() {
  return (
    <div data-step className="app-form">
      <p className="pb-4 pt-4 text-2xl font-mono text-[#27374C] leading-[2rem] font-semibold">
        <br />
        <span style={{ color: "green" }} id="displayname" />, we&#39;re here to
        help with your loan request.
      </p>
      <div className="shadow-md">
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your address?
            </p>
            <p className="leading-7 opacity-50">
              Lenders may use your address to help verify your identity and to
              help determine your loan eligibility. Our marketing partners may
              use this information to help send you offers or other messages
              about loans, debt relief, and other credit-related services.
            </p>
          </div>{" "}
          <div className="">
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">Address</p>
              <p>
                <input
                  placeholder="12th and 43rd Street,"
                  name="address1"
                  id="address1"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="ad1_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Address line 2 (Optional)
              </p>
              <p>
                <input
                  placeholder="Glendale Heights"
                  name="address2"
                  id="address2"
                  className="py-4 px-1 w-full"
                />
              </p>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Flat no(#).
              </p>
              <p>
                <input
                  type="text"
                  placeholder="A-746"
                  name="flat_number"
                  id="flat_number"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="flat_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Zip code
              </p>
              <p>
                <input
                  type="text"
                  placeholder="98001"
                  name="zip_code"
                  id="zip_code"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="zip_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">City</p>
              <p>
                <input
                  type="text"
                  placeholder="Illinois"
                  name="city"
                  id="city"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="city_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
            <div className="pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">State</p>
              <p>
                <select
                  placeholder="OH"
                  name="state"
                  id="state"
                  className="py-4 px-1 w-full"
                >
                  <UsStates />
                </select>
              </p>
              <span
                id="state_err"
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

export default Stage2;
