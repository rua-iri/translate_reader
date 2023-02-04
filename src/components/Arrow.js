import React from "react";


export default function Arrow(props) {

    // TODO the arrows are still just angle brackets, it might be nice to style them more

    return (
        <div className="gimme-outline definition-arrow" onClick={props.onClick}>
            {props.arrowShape}
        </div>
    )
}