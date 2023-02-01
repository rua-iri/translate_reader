import React from "react";

export default function Translation(props) {

    let tAra = props.allTranslations;
    let resCounter = props.resCounter;



    // TODO maybe add a function to allow the user to look up words with the same root
    // maybe it could use Hans Wehr's dictionary...

    return (
        <div>
            <div className="translation-meaning gimme-outline">
                {tAra[resCounter] ? tAra[resCounter].meaning : "meaning"}
            </div>
            <div className="gimme-outline translation-tense">
                {tAra[resCounter] ? tAra[resCounter].tense : "tense"}
            </div>

            <div className="gimme-outline grammar-box">
                <div className="gimme-outline grammar-box-elem arab-text">
                    {tAra[resCounter] ? tAra[resCounter].root : "root"}
                </div>
                <div className="gimme-outline grammar-box-elem">
                    {tAra[resCounter] ? tAra[resCounter].verbForm : "verbForm"}
                </div>
            </div>
        </div>
    )
}