import React from "react";
import About from "./Options/About";
import Voices from "./Options/Voices";
import Percentage from "./Options/Percentage";


export default function OptionsMenu(props) {

    const [showOptions, setShowOptions] = React.useState(props.showMenu);

    // TODO save button should save preferences to localstorage


    React.useEffect(() => {
        setShowOptions(props.showMenu);
    }, [props])

    function saveOptions() {
        props.hideMenu();
    }



    return (
        <div id="menu-box" style={{display: showOptions ? "block" : "none"}}>

            <div id="menu-contents">

                <div id="menu-title">
                    Arabic Reading Assistant
                </div>

                <About />

                <Voices />

                <Percentage />

                <button className="source-button" id="save-button" onClick={saveOptions}>
                    Save
                </button>


            </div>

        </div>
    )
}