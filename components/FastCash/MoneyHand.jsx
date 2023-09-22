"use client";
import { React } from "react";
import Image from "next/image";
import MoneyInHand from "../../public/images/money_in_hand.png";

function MoneyHand() {
  return (
    <div>
      <div className="pt-8">
        <div className="p-4 w-[370px] h-[360px] z-0 flex items-center justify-center relative">
          <div className="clip-path-top-left"></div>
          <div className="clip-path-bottom-left"></div>
          <div className="clip-path-bottom-right"></div>

          <Image
            src={MoneyInHand.src}
            width={350}
            height={100}
            alt={"Money In Hand"}
          />
        </div>
      </div>
    </div>
  );
}

export default MoneyHand;
