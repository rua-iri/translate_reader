import { useDispatch, useSelector } from "react-redux";
import { setFontSize } from "../../features/font/font";

export default function FontSize() {
  const fontSize = useSelector((state) => state.fontSlice.size);

  const dispatch = useDispatch();

  const sizesRange = {
    0: "xs",
    33: "sm",
    66: "lg",
    100: "xl",
  };

  function changeFontSize(event) {
    const fontSizeKey = event.target.value;
    console.log(fontSizeKey);
    dispatch(setFontSize(sizesRange[fontSizeKey]));
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
        step="33"
        onChange={changeFontSize}
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
}
