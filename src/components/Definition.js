import React from "react";
import Translation from "./Translation";
import Arrow from "./Arrow";

export default function Definition(props) {

    const [possibleMeanings, setPossibleMeanings] = React.useState([]);
    const [resultCounter, setResultCounter] = React.useState(0);


    const makeAPICall = async (apiLink) => {
        try {
            const response = await fetch(apiLink, { mode: 'cors' });
            const data = await response.json();
            setPossibleMeanings(data);
        }
        catch (e) {
            console.log(e)
        }
    }


    React.useEffect(() => {

        // reset resultCounter every time that new props are passed
        setResultCounter(0);

        if (props.selectedWord) {
            // check the api for a definition
            const apiUrl = "https://rua-iri.com/api/word?q=" + props.selectedWord;
            makeAPICall(apiUrl);
        }
    }, [props]);


    // function to cycle to previous method
    function prevResult() {
        if (resultCounter > 0) {
            setResultCounter(resultCounter - 1);
        }
    }

    // function to cycle to previous method
    function nextResult() {
        if (resultCounter < (possibleMeanings.length - 1)) {
            setResultCounter(resultCounter + 1);
        }
    }

    const wordSelected = possibleMeanings[resultCounter] ? possibleMeanings[resultCounter].phoneticSpell : props.selectedWord;
    const exampleLink = "https://context.reverso.net/translation/arabic-english/" + wordSelected;

    return (
        <div className="top-banner gimme-outline" >
            {resultCounter ? <Arrow arrowShape=">" onClick={prevResult} /> : ""}

            <div className="selected-word arab-text gimme-outline">
                {wordSelected}
                <a className="word-examples gimme-outline" href={exampleLink} target="_blank">
                    Examples
                </a>
            </div>
            <div className="translations gimme-outline">
                <Translation allTranslations={possibleMeanings} resCounter={resultCounter} />
            </div>

            {(resultCounter < possibleMeanings.length - 1) ? <Arrow arrowShape="<" onClick={nextResult} /> : ""}
        </div>
    )
}