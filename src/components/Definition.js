import React from "react";
import Translation from "./Translation";

export default function Definition(props) {

    //TODO give this good layout with singular, plural, defintion, pronunciation, example sentence etc
    //these should all be passed to the component via props

    const [upperText, setUpperText] = React.useState({});


    React.useEffect(() => {
        if (props.selectedWord) {

            setUpperText(props.selectedWord);

            const apiUrl = "https://rua-iri.com/api/word?q=" + props.selectedWord;
            fetch(apiUrl)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
    }, [props]);


    return (
        <div className="top-banner gimme-outline">
            <div className="selected-word arab-text gimme-outline">
                {upperText}
            </div>
            <div className="translations gimme-outline">
                <Translation translatedWord={upperText?.translations} examp={upperText.context?.examples} />
            </div>
        </div>
    )
}