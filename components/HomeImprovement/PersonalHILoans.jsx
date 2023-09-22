import React from "react";
import WorkMen from "@/public/images/work-men.png";

function PersonalHILoans() {
  return (
    <div className="px-24 text-xs leading-6 py-4 items-center justify-center flex">
      <div className="border shadow-md grid grid-cols-2 gap-1">
        <div className="p-4 items-center justify-center flex">
          <div>
            <p className="text-base font-bold pb-4">
              Personal Home Improvement Loan
            </p>
            <p className="opacity-70 text-justify">
              A personal home improvement loan is a personal loan that can be
              used for anything, including home projects. Personal loans are
              great for people with good credit or who are preparing to sell or
              rent out their home. They are also a good option for financing
              smaller, less expensive home projects. Some of the benefits of a
              personal loan for home improvement are listed below. You will have
              the same payment every month, making it easier to budget for. You
              can get approved more quickly than with a HELOC. You don’t have to
              have collateral or a lot of equity in your home. They have shorter
              terms for repayment.
            </p>
          </div>
        </div>
        <div className="p-4  items-center justify-end flex">
          <img src={WorkMen.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PersonalHILoans;
