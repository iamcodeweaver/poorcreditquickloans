import React from "react";

function PreviousButton() {
  return (
    <div className="w-1/3">
      <button
        className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
        type="button"
        data-previous
      >
        Previous
      </button>
    </div>
  );
}

export default PreviousButton;
