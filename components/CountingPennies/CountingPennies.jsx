"use client";
import { React, useState } from "react";
import Image from "next/image";
import countPennies from "@/public/images/counting-pennies.jpg";

function CountingPennies() {
  return (
    <div>
      <div className="pt-8">
        <div className="p-4 w-[430px] h-[270px] z-0 flex items-center justify-center relative">
          <div className="clip-path-top-left"></div>
          <div className="clip-path-bottom-left"></div>
          <div className="clip-path-bottom-right"></div>

          <div className="h-[230px] bg-white w-[350px] relative z-10">
            <Image
              src={countPennies.src}
              width={350}
              height={350}
              alt={"Counting Pennies"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountingPennies;
