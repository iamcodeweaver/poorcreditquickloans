import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="rounded-lg border-[0.05rem] ">
      <div className="flex p-4" onClick={toggle}>
        <p className="font-semibold text-sm w-full pb-4 pt-4">{title}</p>
        <div className="text-sm font-semibold flex items-center justify-center pt-2">
          {open ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-xs leading-6 px-4 pb-4 opacity-70 text-justify">
          {description}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
