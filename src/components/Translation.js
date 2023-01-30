import React from "react";

export default function Translation(props) {

    let tAra = props.allTranslations;




    return (
        <div>
            <div className="translation-meaning gimme-outline">
                {tAra[0] ? tAra[0].meaning : "meaning"}
            </div>
            <div className="gimme-outline translation-tense arab-text">
                {tAra[0] ? tAra[0].tense : "tense"}
            </div>

            <div className="gimme-outline grammar-box">
                <div className="gimme-outline grammar-box-elem">
                    {tAra[0] ? tAra[0].root : "root"}
                </div>
                <div className="gimme-outline grammar-box-elem">
                    {tAra[0] ? tAra[0].verbForm : "verbForm"}
                </div>
            </div>
        </div>
    )
}