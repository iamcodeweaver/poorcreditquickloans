import React, { useState } from "react";
import PrevNextButton from "./PrevNextButton";

function Stage4() {
  const [ownsHome, setOwnsHome] = useState("");

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
              How long have you lived at{" "}
              <span id="displayaddress" className="text-green-800" />?
            </p>
          </div>
          {/* <div className=""> */}
          <div className="">
            <p className="font-mono font-semibold opacity-60 pb-1">
              Length at address?
            </p>
            <p>
              <select
                name="length_at_address"
                id="length_at_address"
                className="py-4 px-1 w-full"
                // value={lengthAtHome}
                // onChange={(event) => setLengthAtHome(event.target.value)}
              >
                <option></option>
                <option value={1}>1 Year</option>
                <option value={2}>2 Years</option>
                <option value={3}>3 Years</option>
                <option value={4}>4 Years</option>
                <option value={5}>5 Years</option>
                <option value={6}>6 Years</option>
                <option value={7}>7 Years</option>
                <option value={8}>8 Years</option>
                <option value={9}>9 Years</option>
                <option value={10}>10 Years</option>
                <option value={11}>11+ Years</option>
              </select>
            </p>
            <span
              id="length_at_address_err"
              className="flex items-center italic justify-center w-full text-xs text-red-500"
            ></span>
          </div>
          {/* </div> */}
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              What is the current status of your residency?
            </p>
          </div>
          <div className="">
            <p className="font-mono font-semibold opacity-60 pb-1">
              Residency status
            </p>
            <p>
              <select
                name="residency_status"
                id="residency_status"
                className="py-4 px-1 w-full"
              >
                <option></option>
                <option value={1}>home owner</option>
                <option value={2}>private tenant</option>
                <option value={3}>council tenant</option>
                <option value={4}>living with parents</option>
                <option value={5}>living with friends</option>
                <option value={6}>employer accomodations</option>
                <option value={7}>other</option>
                <option value={8}>living with partner</option>
                <option value={10}>private tenant room</option>
              </select>
            </p>
            <span
              id="residency_status_err"
              className="flex items-center italic justify-center w-full text-xs text-red-500"
            ></span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8 py-4 border-[#c6c8cb] border-t-[0.05rem] text-xs">
          <div>
            <p className="font-mono font-semibold opacity-70 pb-4">
              Do you own your home ?
            </p>
          </div>
          <div className="">
            <div className="w-full pb-4">
              <p className="pb-8">
                <input
                  className="hidden"
                  name="owns_home"
                  id="owns_home"
                  value={ownsHome}
                />
                <input
                  type="radio"
                  className="py-4 px-4"
                  name="owns_home_x"
                  id="owns_home_x"
                  onChange={() => {
                    setOwnsHome("own");
                  }}
                />
                &nbsp;&nbsp;&nbsp; YES
              </p>
              <p>
                <input
                  type="radio"
                  className="py-4 px-1"
                  name="owns_home_x"
                  id="owns_home_x"
                  onChange={() => {
                    setOwnsHome("rent");
                  }}
                />
                &nbsp;&nbsp;&nbsp; NO
              </p>
              <span
                id="owns_home_err"
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

export default Stage4;
