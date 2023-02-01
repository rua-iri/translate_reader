import React from "react";


export default function InputArea(props) {

    return (
        <div className="input-area">
            <label  className="textarea-label" htmlFor="input-textarea">
                Input Arabic Text Here
            </label>
            <textarea className="source-textarea arab-text" id="input-textarea" name="input-textarea" cols="30" rows="5"></textarea>
            <button className='source-button' onClick={props.onClick}>
                Submit
            </button>
        </div>
    )
}