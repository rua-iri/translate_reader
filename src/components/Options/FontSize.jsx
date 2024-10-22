import { useState } from "react";

export default function FontSize() {
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));

  const sizesRange = {
    0: "xs",
    25: "sm",
    50: "base",
    75: "lg",
    100: "xl",
  };

  function changeFontSize(event) {
    const fontSizeKey = event.target.value;
    console.log(fontSizeKey);
    setFontSize(fontSizeKey);
    localStorage.setItem("fontSize", sizesRange[fontSizeKey]);
  }

  return (
    <div className="m-3 p-3 font-light">
      <h3 className="font-normal mb-2">Font Size</h3>
      <input
        type="range"
        min={0}
        max="100"
        value={Object.keys(sizesRange).find(
          (key) => sizesRange[key] == fontSize
        )}
        className="range"
        step="25"
        onChange={changeFontSize}
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
}
