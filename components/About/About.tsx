import React from "react";

import CountingPennies from "../CountingPennies/CountingPennies";

const About = () => {
  return (
    <div className="px-24">
      <div className="pb-8 pt-8 text-sm px-16 grid grid-cols-2 gap-4">
        <div className="text-black">
          <p className="text-3xl font-bold text-[#27374C] leading-[2.5rem] pt-4">
            APR — Representative Range Explanation
          </p>

          <p className="leading-7 text-xs text-justify pt-2 pb-4 opacity-70">
            You are not required to accept the conditions of any loan offer made
            to you by exampleLoans.com, and there are no fees or costs
            associated with submitting a loan request. There are loan amounts
            available ranging from $1,000 to $35,000. The APR ranges from 5.99%
            to 35.99%. Our network of lenders offers loans with terms as long as
            72 months, with a minimum term of 3 months. The exact loan rate is
            determined by the requested loan amount as well as your credit
            history, usage, and score. If a loan is offered to you, you will
            have the chance to study the lender&#39;s final offer before
            deciding to accept the loan terms. We advise you to carefully review
            the terms of any loan offer you get. You can get in touch with us
            whenever you need assistance with any of
            PoorCreditQuickLoans.com&#39;s services.
          </p>
        </div>
        <div className="pt-8 flex items-center justify-center">
          <CountingPennies />
        </div>
      </div>
    </div>
  );
};

export default About;
