"use client";
import { React, useState } from "react";
import GetSButton from "@/components/GetSButton/GetSButton";

function GetStarted() {
  const [input, setInput] = useState(100);
  return (
    <div>
      <div className="pt-8">
        <div className="p-4 w-[430px] h-[450px] z-0 flex items-center justify-center relative">
          <div className="clip-path-top-left"></div>
          <div className="clip-path-bottom-left"></div>
          <div className="clip-path-bottom-right"></div>

          <div className="p-8 h-[410px] bg-white w-[350px] relative z-10">
            <p className="font-semibold text-sm">
              Minimum of <span className="text-base">$100</span> to{" "}
              <span className="text-base">$3,500</span>
            </p>
            <br />
            <p className="font-semibold text-xs">
              How much would you like to borrow?
            </p>
            <input
              className="border-inherit w-full border p-2"
              placeholder="e.g $5000"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <div
              className="sliderLabel"
              style={{ marginLeft: `${(((input * 100) / 3500) * 16) / 20}%` }}
            >
              ${input.toLocaleString()}
            </div>
            <input
              type="range"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              min={0}
              max={3500}
              step={100}
              value={input}
              className="w-full"
            ></input>
            <div
              className="sliderEnds"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>$100</span>
              <span>$3,500</span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <GetSButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
