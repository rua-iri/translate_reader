import React from "react";
import CustomButton from "./CustomButton";

export default function InputArea({ handleSubmit }) {
  return (
    <div className="my-3">
      <form onSubmit={() => handleSubmit(event)}>
        <div className="flex flex-col items-center">
          <label htmlFor="input-textarea">Input Arabic Text Here</label>
          <textarea
            dir="rtl"
            className="h-60 w-10/12 text-lg m-2 resize-none outline-double outline-1 outline-slate-200 p-5"
            id="input-textarea"
            name="input-textarea"
            placeholder="Input Arabic Text Here"
          />
        </div>
        <CustomButton textContent={"Submit"} />
      </form>
    </div>
  );
}
