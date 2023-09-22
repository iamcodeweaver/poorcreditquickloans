import React from "react";
import Link from "next/link";

function GetSButton() {
  return (
    <div>
      <Link
        href={"/applicationform#"}
        // target="_blank"
      >
        <button className="bg-[#0767a8] hover:bg-[#3c6682] text-white text-sm font-semibold p-3 w-full">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default GetSButton;
