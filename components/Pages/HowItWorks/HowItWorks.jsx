"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PcCupInHand from "@/public/images/pc-cup-in-hand.jpg";
import HandshakeSmile from "@/public/images/handshake_smile.jpeg";
import TypesOfPersonalLoan from "@/components/TypesOfPersonalLoan/TypesOfPersonalLoan";

function HowItWorks() {
  return (
    <div className="pt-32 px-16 pb-16">
      <div className="text-center text-3xl font-bold text-[#27374C] pb-4">
        How it works
      </div>

      <div className="leading-7 opacity-70">
        Our simple online loan request process is designed to help connect you
        with a lender from our network or from another third-party lender
        network that may be able to offer you a loan. It is also designed for us
        to market other credit-related products and services to you, such as
        debt relief, credit repair and credit monitoring. In addition to
        personal loans, some of our lending partners may offer lines of credit
        or other types of loans. If a lender makes you a loan offer and you
        accept, you can receive your funds in as little as one business day. You
        will then have anywhere from 90 days to 72 months in which to repay your
        loan, depending on the terms of the loan agreement with your lender. The
        APR for loans in the personal loan network varies, with many providers
        offering rates between 5.99% and 35.99%. Please note that our lender
        network includes tribal lenders. Tribal lenders’ rates and fees may be
        higher than state-licensed lenders, and are subject to federal and
        tribal laws, not state laws. Learn more in our{" "}
        <Link href="#">Ad Disclosure.</Link>{" "}
        <p className="pt-4">The entire process takes just a few easy steps:</p>
      </div>
      <div className="flex py-8">
        <div className="w-2/5">
          <p className="pl-8 py-8 pr-20 opacity-60 leading-7">
            You fill out the simple loan request form here on our website,
            including how much money you would like to borrow, your credit type,
            and loan reason. The form will also require you to provide some
            personal, banking, and income information. This information will be
            shown to the lenders in our network and in other third-party lender
            networks so the lenders in these networks can choose whether to
            offer you a loan.
          </p>
        </div>
        <div className="w-3/5">
          <Image
            className="rounded-lg"
            alt={""}
            src={PcCupInHand.src}
            height={320}
            width={612}
          />
        </div>
      </div>
      <div className="flex py-8">
        <div className="w-3/5 pl-8">
          <Image
            className="rounded-lg"
            alt={""}
            src={HandshakeSmile.src}
            height={320}
            width={612}
          />
        </div>
        <div className="w-2/5">
          <p className="py-4 pr-8 pl-4 opacity-60 leading-7">
            Shortly after reviewing your loan request information, lenders or
            lending partners will make a decision on whether to offer you a loan
            by inviting you to complete an application with them on their
            website based on the information provided. If approved, you&#39;ll
            be redirected to a loan agreement with terms and conditions,
            including the amount you will need to repay and the repayment time
            frame. Make sure you understand the key elements to your loan
            agreement, including the loan interest rate as well as the repayment
            terms prior to accepting an offer.
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-2xl font-bold text-[#27374C] pt-8 pb-4">
          Personal Loans Requirement
        </p>
        <div className="py-4 px-8 shadow-md hover:border-[#2b2f6c] border-[0.1rem] opacity-60 leading-7">
          Although we will accept loan requestors with any credit score, there
          are still a few basic requirements that the lenders in our network are
          looking for. Before you request a loan, make sure you meet specific
          criteria regarding these items. Please note that meeting these
          requirements does not mean that you will be connected to a lender.
          <br />
          <br />
          <ul className="list-disc">
            <li>
              Age/ID/Residency Status - You must be 18 or older to be eligible
              for a personal loan. You must also have a valid Social Security
              number, and be a legal U.S. citizen or permanent resident.
            </li>
            <li>
              Income - In order to ensure that you will be able to repay a loan,
              you must either have full-time employment, be self-employed, or
              receive regular disability or Social Security benefits. Some
              lenders or lending partners may require a pay stub or other form
              of income verification.
            </li>
            <li>
              Bank Account - Most loans require a valid checking account, as
              once a loan is approved for you through PoorCreditQuickLoans.com,
              your lender or lending partner will deposit your funds directly
              into said account.
            </li>
            <li>
              Credit Type - Although it is always better to have good credit,
              you do not necessarily need to have a good or excellent credit
              record to qualify for a personal loan. Having good or excellent
              credit might cause a lender to provide you more favorable terms.
              Most lenders require that customers demonstrate a pattern of
              responsibility. To be eligible for a personal loan product,
              typically an individual must not have any accounts more than 60
              days late; must not have active or recent bankruptcies; must not
              exhibit a pattern of late payments; must not have any debt that
              cannot be covered by current income; and must not have any
              recently charged-off accounts. We are not a lender, and do not
              make any lending decisions. Only a lender can decide if they
              choose to extend a credit or loan offer to you.
            </li>
          </ul>
          <br />
          Meeting these requirements does not necessarily guarantee you will be
          approved for a personal loan, but it does significantly boost the
          chances that approval will occur.
        </div>
      </div>
      <div className="pt-8 flex items-center justify-center">
        <TypesOfPersonalLoan />
      </div>
    </div>
  );
}

export default HowItWorks;
