import { useState } from "react";

export default function SingleWord({ isSelected, onClick, alt, wordContent }) {
  let fontDecoration = "";
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));

  if (isSelected) {
    fontDecoration = "bg-slate-200 rounded";
  }

  if (!wordContent) {
    return <div className="h-3 basis-full"></div>;
  } else {
    return (
      <span
        dir="rtl"
        className={`cursor-pointer ${fontDecoration} text-[${fontSize}px]`}
        onClick={() => onClick(alt)}
      >
        {wordContent}
        &nbsp;
      </span>
    );
  }
}
