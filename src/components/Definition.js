import React from "react";
import Translation from "./Translation";

export default function Definition(props) {

    //TODO give this good layout with phonetic spelling, meaning, tense, root and verbForm
    //these should all be passed to the component via props

    // TODO add a means by which the user can cycle through all possible meanings by clicking a button
    const [upperText, setUpperText] = React.useState();
    const [possibleMeanings, setPossibleMeanings] = React.useState([]);


    const makeAPICall = async (apiLink) => {
        try {
            const response = await fetch(apiLink, { mode: 'cors' });
            const data = await response.json();
            setPossibleMeanings(data);
            data.forEach(dat => {
                console.log({ dat })
            });

        }
        catch (e) {
            console.log(e)
        }
    }



    React.useEffect(() => {
        if (props.selectedWord) {
            //set the uppertext word and check the api for a definition
            setUpperText(props.selectedWord);
            const apiUrl = "https://rua-iri.com/api/word?q=" + props.selectedWord;
            makeAPICall(apiUrl);

        }
    }, [props]);


    // TODO add an onclick event to the definition arrows so that they will cycle to the next meaning
    
    // TODO give the definition arrows conditional rendering so that they only show if there is a next/previous definition


    return (
        <div className="top-banner gimme-outline">
            <div className="gimme-outline definition-arrow">
                {">"}
            </div>
            <div className="selected-word arab-text gimme-outline">
                {possibleMeanings[0] ? possibleMeanings[0].phoneticSpell : ""}
            </div>
            <div className="translations gimme-outline">
                <Translation allTranslations={possibleMeanings} />
            </div>
            <div className="gimme-outline definition-arrow">
                {"<"}
            </div>
        </div>
    )
}