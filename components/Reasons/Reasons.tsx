import Link from "next/link";
import React from "react";
import Image from "next/image";

import Lock from "@/public/images/lk_sm.png";
import Leaves from "@/public/images/lf_sm.png";
import PC from "@/public/images/pc_sm.png";

function Reasons() {
  return (
    <div className="px-16">
      <div className="px-[200px] py-8 text-2xl font-bold text-center text-[#27374C]">
        <p>Why Poorcredit, QuickLoans?</p>
      </div>
      <div className="px-[220px] text-center text-xs opacity-70 pb-8">
        You can manage leads and sales with our tracking software, administer
        your affiliate program automatically, and integrate PayPal seamlessly.
      </div>
      <div
        // className="grid grid-cols-3 gap-6 text-sm leading-6"
        className="grid grid-cols-3 gap-6 text-sm leading-6"
      >
        <div className="h-fit border-[.025rem] px-8 pb-16 pt-4 hover:border-zinc-950 shadow-lg">
          <div className="border-[0.05rem] w-[40px] h-[40px] -mt-9 bg-white flex items-center justify-center">
            <Image src={Lock.src} alt={""} height={20} width={20} />
          </div>
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Security matters
          </p>
          <div className="opacity-70">
            <p>
              We safeguard your information using cutting-edge data encryption
              technology so you can apply for a loan from the comfort of your
              home and with confidence.
            </p>
            <br />
          </div>
        </div>

        <div className="h-fit border-[.025rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-lg">
          <div className="border-[0.05rem] w-[40px] h-[40px] -mt-9 bg-white flex items-center justify-center">
            <Image src={PC.src} alt={""} height={20} width={20} />
          </div>
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Simple and straightforward
          </p>
          <div className="opacity-70">
            <p>
              Our online form is easy to use, clear, and quick—exactly as it
              ought to be. We can easily share your information with our
              extensive network of lenders and other lending networks we
              collaborate with so they may make loan offers straight away.
              <br />
              <br />
              If you accept a loan offer, the money may be electronically placed
              into your bank account in as little as one working day.
            </p>
          </div>
        </div>

        <div className="h-fit border-[.025rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-lg">
          <div className="border-[0.05rem] w-[40px] h-[40px] -mt-9 bg-white flex items-center justify-center">
            <Image src={Leaves.src} alt={""} height={20} width={20} />
          </div>
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Your time, your terms
          </p>

          <div className="opacity-70">
            <p>
              Anytime, day or night, make a loan request. Our partners can
              provide loans with a range of periods and interest rates of up to
              $35,000. Review your loan offer without commitment and select the
              option that works best for you.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="w-full py-12 items-center justify-center flex">
        <Link href={"/applicationform"}>
          <button className="bg-[#0767a8] text-white text-sm font-semibold p-3 w-[320px]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Reasons;
