"use client";
import React, { useState } from "react";
import GetStarted from "@/components/GetStarted/GetStarted";

const Header = () => {
  return (
    <div className="pt-24">
      <div
        className="pb-16 text-sm px-16 grid grid-cols-2 gap-4"
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
        }}
      >
        <div className="text-black">
          <p className="pt-16 text-5xl text-[#27374C] leading-[3.5rem] font-semibold">
            Simplifying the process of obtaining personal loans
          </p>

          <p className="leading-7 pt-8 pb-4 text-base">
            Our simple and secure application process makes it easy to get the
            personal loan you need to achieve your financial goals. <br />
            Apply now and get a decision in minutes!
          </p>

          <div className="bg-white p-4">
            <p>
              By clicking{" "}
              <em>
                <strong>Get Started</strong>
              </em>
              , you consent and agree:
            </p>

            <div className="flex gap-2 p-2">
              <p>
                <input className="top-0" type="radio" checked="checked" />
              </p>
              <p>
                To permit poorcredit, QuickLoans to use my current account
                details to check if I already have an account with one of its
                connected websites.
              </p>
            </div>

            <div className="flex gap-2 p-2">
              <p>
                <input className="top-0" type="radio" checked="checked" />
              </p>
              <p>
                To receive marketing messages for loans as well as other
                credit-related items like banking, credit monitoring, debt
                relief, and credit repair.
              </p>
            </div>

            <div className="flex gap-2 p-2">
              <p>
                <input className="top-0" type="radio" checked="checked" />
              </p>
              <p>
                To the &nbsp;
                <a
                  href="/privacypolicy"
                  style={{ textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>
                ,{" "}
                <a href="/termsofuse" style={{ textDecoration: "underline" }}>
                  Terms of Use
                </a>
                ,{" "}
                <a href="/addisclosure" style={{ textDecoration: "underline" }}>
                  Ad Disclosure
                </a>
                ,{" "}
                <a
                  href="/creditauthorization"
                  style={{ textDecoration: "underline" }}
                >
                  Credit Authorization
                </a>
                ,{" "}
                <a href="/ratesandfees" style={{ textDecoration: "underline" }}>
                  Rates & Fees
                </a>{" "}
                and{" "}
                <a style={{ textDecoration: "underline" }} href="/econsent">
                  E-Consent
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end py-8">
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Header;
