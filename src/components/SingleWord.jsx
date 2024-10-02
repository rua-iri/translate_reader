import React from "react";

export default function SingleWord({ isSelected, onClick, alt, wordContent }) {
  let fontWeight = "";

  if (isSelected) {
    fontWeight = "bg-slate-200 rounded";
  }

  if (!wordContent) {
    return <div className="h-3 basis-full"></div>;
  } else {
    return (
      <span
        dir="rtl"
        className={`cursor-pointer ${fontWeight}`}
        onClick={() => onClick(alt)}
      >
        {wordContent}
        &nbsp;
      </span>
    );
  }
}
