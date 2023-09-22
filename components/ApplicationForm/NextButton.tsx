import React from "react";

function NextButton() {
  return (
    <div className="w-1/3">
      <button
        className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
        type="button"
        data-next
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
