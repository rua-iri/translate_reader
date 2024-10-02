import React from "react";

export default function Word({ isSelected, onClick, alt, wordContent }) {
  let fontWeight = "";

  if (isSelected) {
    fontWeight = "font-bold";
  }

  if (!wordContent) {
    return <div className="h-3 basis-full"></div>;
  } else {
    return (
      <span dir="rtl" className={fontWeight} onClick={() => onClick(alt)}>
        {wordContent}
        &nbsp;
      </span>
    );
  }
}
