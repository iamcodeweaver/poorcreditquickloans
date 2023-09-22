"use client";
import React from "react";

import Script from "next/script";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import Stage5 from "./Stage5";
import Stage6 from "./Stage6";
import Stage7 from "./Stage7";
import Stage8 from "./Stage8";
import Stage9 from "./Stage9";
import Stage10 from "./Stage10";
import Stage11 from "./Stage11";
import Stage12 from "./Stage12";

function Form() {
  return (
    <div className="pt-16 bg-[#d5e6f1]">
      <Script src="/scripts/script.js" strategy="lazyOnload" />
      <div className="pb-16 text-sm px-16">
        <form
          id="app_form"
          name="app_form"
          data-multi-step
          className="text-black"
        >
          <div className="">
            <Stage1 />
            <Stage2 />
            <Stage3 />
            <Stage4 />
            <Stage5 />
            <Stage6 />
            <Stage7 />
            <Stage8 />
            <Stage9 />
            <Stage10 />
            <Stage11 />
            <Stage12 />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
