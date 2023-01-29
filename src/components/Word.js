import React from "react";


export default function Word(props) {

    //TODO The selected word should change colour and other stuff
    //when the user clicks on it

    function handleHover() {
        
    }
    
    return (
        <span className="word-elem" onClick={() => props.onClick(props.alt)}>
            <span>
                {props.wordContent}
            </span>
        </span>
    )
}