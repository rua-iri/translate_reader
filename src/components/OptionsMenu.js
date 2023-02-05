import React from "react";
import About from "./Options/About";
import Voices from "./Options/Voices";
import Percentage from "./Options/Percentage";


export default function OptionsMenu() {


    // TODO save button should save preferences to localstorage


    return (
        <div id="menu-box">

            <div id="menu-contents">

                <div id="menu-title">
                    Arabic Reading Assistant
                </div>

                <About />

                <Voices />

                <Percentage />

                <button className="source-button" id="save-button">
                    Save
                </button>


            </div>

        </div>
    )
}