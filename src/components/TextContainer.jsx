import { useEffect, useState } from "react";

export default function TextContainer({ textContent }) {
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));


  return (
    <div className="m-4 max-h-[25rem] lg:max-h-[40rem] overflow-scroll overflow-x-auto border">
      <div
        dir="rtl"
        className={`w-full p-5 text-right inline-flex flex-wrap text-${fontSize}`}
      >
        {textContent}
      </div>
    </div>
  );
}
