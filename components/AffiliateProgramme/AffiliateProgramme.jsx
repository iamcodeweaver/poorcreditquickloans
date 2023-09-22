import React from "react";

function AffiliateProgramme() {
  return (
    <div
      className="pt-16 px-16"
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <div className="A1 flex items-center justify-center">
        <p className="w-3/5 pt-16 text-center pb-12 text-4xl text-[#27374C] font-extrabold">
          Affiliate Programme
        </p>
      </div>

      <div className="px-36 text-center leading-6 pb-12 opacity-70">-</div>

      <div className="px-16 leading-7 pb-16">
        <div className="opacity-70 shadow-md p-4 border text-justify">
          <b>Affiliate Programme</b>
          <br />
          Coming soon ...{" "}
        </div>
      </div>
    </div>
  );
}

export default AffiliateProgramme;
