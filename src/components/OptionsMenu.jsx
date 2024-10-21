import React, { useRef } from "react";
import Voices from "./Options/Voices";
import CustomButton from "./CustomButton";
import FontSize from "./Options/FontSize";

export default function OptionsMenu() {
  const optionsRef = useRef();

  return (
    <>
      <CustomButton
        textContent="Options"
        handleClick={() => optionsRef.current.showModal()}
      />

      <dialog ref={optionsRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Options</h3>

          <Voices />

          <FontSize />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
