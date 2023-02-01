import React from "react";


export default function Arrow(props) {

    return (
        <div className="gimme-outline definition-arrow" onClick={props.onClick}>
            {props.arrowShape}
        </div>
    )
}