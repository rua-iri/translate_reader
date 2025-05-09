import React, { useRef } from "react";
import VoicesSelector from "./Options/VoicesSelector";
import CustomButton from "./CustomButton";
import FontSizeSelector from "./Options/FontSizeSelector";

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

          <VoicesSelector />

          <FontSizeSelector />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
