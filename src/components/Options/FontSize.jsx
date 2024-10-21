import { useState } from "react";

export default function FontSize() {
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));

  function changeFontSize(event) {
    setFontSize(event.target.value);
    localStorage.setItem("fontSize", event.target.value);
    localStorage.setItem("fontSize", event.target.value);
  }

  return (
    <div className="m-3 p-3 font-light">
      <h3 className="font-normal mb-2">Font Size</h3>
      <input
        type="range"
        min={5}
        max="50"
        value={fontSize}
        className="range"
        step="1"
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
