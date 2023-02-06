import React from "react";


export default function Percentage() {

    const [wordPercentage, setWordPercentage] = React.useState(localStorage.getItem("wordPercentage"));

    function changePercent(event) {
        setWordPercentage(event.target.value);
    }

    React.useEffect(() => {
        localStorage.setItem("wordPercentage", wordPercentage);
    }, [wordPercentage])

    return (
        <div className="menu-item">
            <h3>
                Percentage of Translations Allowed
            </h3>

            <div>
                {wordPercentage}%
            </div>

            <input 
            type="range"
            id="range-slider"
            min={0} max={100}
            value={wordPercentage}
            onChange={changePercent} />
        </div>
    )
}