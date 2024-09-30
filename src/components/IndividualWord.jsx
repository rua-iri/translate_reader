import React from "react";

export default function Word({ isSelected, onClick, alt, wordContent }) {
  let fontWeight = "";

  if (isSelected) {
    fontWeight = "font-bold underline`";
  } else {
    fontWeight = "normal-text";
  }

  if (!wordContent) {
    return <div className="h-3 basis-full"></div>;
  } else {
    return (
      <>
        <span dir="rtl" className="my-0.5" onClick={() => onClick(alt)}>
          <span className={fontWeight}>
            {wordContent}
            &nbsp;
          </span>
        </span>
      </>
    );
  }
}
