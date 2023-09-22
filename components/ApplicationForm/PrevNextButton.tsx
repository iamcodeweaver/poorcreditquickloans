import React from "react";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

function PrevNextButton() {
  return (
    <>
      {/* <div className="px-8 w-2/5 flex gap-4"> */}
      <PreviousButton />
      <NextButton />
      {/* <button
        className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
        type="button"
        data-previous
      >
        Previous
      </button>{" "}
      <button
        className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
        type="button"
        data-next
      >
        Next
      </button>{" "} */}
      {/* </div> */}
    </>
  );
}

export default PrevNextButton;
