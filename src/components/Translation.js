import React from "react";
import AudioElem from "./AudioElem";

export default function Translation(props) {

    let tAra = props.allTranslations;
    let resCounter = props.resCounter;


    // TODO maybe add a function to allow the user to look up words with the same root
    // maybe it could use Hans Wehr's dictionary...


    // TODO style the audio so that it fits on mobile

    return (
        <div>
            <div className="translation-box">
                <div className="translation-meaning gimme-outline">
                    {tAra[resCounter] ? tAra[resCounter].meaning.replaceAll(";", "/ ") : "meaning"}
                </div>
                <div className="gimme-outline translation-tense">
                    {tAra[resCounter] ? tAra[resCounter].tense : "tense"}
                </div>
            </div>

            <div className="gimme-outline grammar-box">
                <div className="gimme-outline grammar-box-elem arab-text">
                    {tAra[resCounter] ? tAra[resCounter].root : "root"}
                </div>
                <div className="gimme-outline grammar-box-elem">
                    {tAra[resCounter] ? tAra[resCounter].verbForm : "verbForm"}
                </div>
                <div className="gimmie-outline grammar-box-elem">
                    <AudioElem phoneticWord={props.phoneticWord} speakerName="Salma" />
                </div>
            </div>
        </div>
    )
}