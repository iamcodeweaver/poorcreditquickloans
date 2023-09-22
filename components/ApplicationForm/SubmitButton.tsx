import React from "react";

function SubmitButton() {
  // const handleSubmit = () => {
  //   console.log("Done");
  // };

  return (
    <div className="w-1/3">
      <button
        className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
        type="button"
        id="submit_button"
        // data-submit
        data-next
        // onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
