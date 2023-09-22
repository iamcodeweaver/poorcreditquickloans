import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage7() {
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
              What is the name of the company you work for?
            </p>
            <p className="leading-7 opacity-50">
              Our lenders and lending partners use this information to determine
              your eligibility and it is required by most banks. Lenders and
              lending partners will not use this information to contact your
              employer or to disclose that they are from a loan company.
            </p>
          </div>{" "}
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Employer name
              </p>
              <p>
                <input
                  type="text"
                  placeholder="e.g. Microsoft Inc."
                  name="employer_name"
                  id="employer_name"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="employer_name_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>{" "}
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Employer&#39;s Phone Number
            </p>
            <p className="leading-7 opacity-50">
              NOTE: Employer phone number must be different from your own phone
              number, unless you are self employed.
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Employer&#39;s Phone
              </p>
              <p>
                <input
                  type="tel"
                  placeholder="e.g 1800989812"
                  name="employer_phone"
                  id="employer_phone"
                  maxLength={11}
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="employer_phone_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
            </div>
          </div>
          <br />
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is your job title ?
            </p>
            <p className="leading-7 opacity-50">
              Your Official title at your workplace.
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="font-mono font-semibold opacity-60 pb-1">
                Job title
              </p>
              <p>
                <input
                  type="text"
                  placeholder="e.g Engineering Lead"
                  name="job_title"
                  id="job_title"
                  className="py-4 px-1 w-full"
                />
              </p>
              <span
                id="job_title_err"
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

export default Stage7;
