import React from "react";
import TeaCup from "@/public/images/tea_in_hand.png";

function PersonalLoans() {
  return (
    <div className="px-24 text-xs leading-6 py-4 items-center justify-center flex">
      <div className="border shadow-md grid grid-cols-2 gap-1">
        <div className="p-4 items-center justify-center flex">
          <div>
            <p className="text-base font-bold pb-4">Personal Loans</p>
            <p className="opacity-70 text-justify">
              Personal loans can also be used as emergency cash loans, but may
              give you more time to pay them off. For example, emergency loans
              for the unemployed can cover living expenses temporarily and be
              repaid when you are working again. Personal loans can come in
              small amounts as well, which is beneficial since you should never
              borrow more than you need and can reasonably pay back.
            </p>
          </div>
        </div>
        <div className="p-4  items-center justify-end flex">
          <img src={TeaCup.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PersonalLoans;
