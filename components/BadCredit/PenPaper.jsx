"use client";
import { React } from "react";
import Image from "next/image";
import PenPaperI from "../../public/images/pen_paper.png";

function PenPaper() {
  return (
    <div>
      <div className="pt-8">
        <div className="p-4 w-[370px] h-[360px] z-0 flex items-center justify-center relative">
          <div className="clip-path-top-left"></div>
          <div className="clip-path-bottom-left"></div>
          <div className="clip-path-bottom-right"></div>

          {/* <div className="h-[350px] border-2 bg-white w-[370px] relative z-10"> */}
          <Image
            src={PenPaperI.src}
            width={350}
            height={100}
            alt={"Pen on Paper"}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default PenPaper;
