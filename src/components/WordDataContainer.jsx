import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function WordDataContainer({
  allTranslations,
  resCounter,
  textContent,
}) {
  let translationArray = allTranslations;
  let resultCounter = resCounter;

  let rootElem;

  if (translationArray[resCounter]) {
    rootElem = <div>{translationArray[resCounter].root}</div>;
  } else {
    rootElem = "";
  }

  return (
    <div>
      <div className="h-16 flex flex-col">
        <div className="px-1 grow-1">
          {translationArray[resultCounter]
            ? translationArray[resultCounter].meaning.replaceAll(";", "/ ")
            : "meaning"}
        </div>
        <div className="grow-1">
          {translationArray[resultCounter]
            ? translationArray[resultCounter].tense
            : "tense"}
        </div>
      </div>

      <div className="flex w-full h-8">
        <div className="w-full arab-text">{rootElem}</div>
        <div className="w-full">
          {translationArray[resultCounter]
            ? translationArray[resultCounter].verbForm
            : "verbForm"}
        </div>
        <div className="w-full">
          <AudioPlayer
            textContent={textContent}
            speakerName={localStorage.getItem("selectedVoice")}
          />
        </div>
      </div>
    </div>
  );
}
