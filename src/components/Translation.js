import React from "react";

export default function Translation(props) {

    const tLations = props?.translatedWord;
    let tAra = [];

    if (tLations) {

        for (let i = 0; i < tLations.length - 1; i++) {
            tAra.push(tLations[i]);
        }
    }

    const allTranslations = tAra.map((tA, index) => {
        return <span key={index}>{tA}, </span>;
    });


    let eSamples = [];
    let allExamples;

    if (props.examp != undefined && props.examp.length > 0) {

        for (let i = 0; i < props.examp.length; i++) {
            eSamples.push(props?.examp);
        }

        allExamples = eSamples[0].map((ex, index) => {
            return <div key={index}>{ex.source}</div>
        });
    }


    return (
        <div>
            <div className="translation-words gimme-outline">
                {allTranslations}
            </div>
            <div className="gimme-outline translation-example arab-text">
                {allExamples ? allExamples : ""}
            </div>
        </div>
    )
}