import React from "react";
import WordDataContainer from "./WordDataContainer";
import Arrow from "./Arrow";
import { fetchWordMeanings } from "/utils/fetcher";

export default function TopBar({ selectedWord }) {
  const [allMeanings, setAllMeanings] = React.useState([]);
  const [resultCounter, setResultCounter] = React.useState(0);

  const lookupWord = async () => {
    try {
      console.log("selectedWord: ", selectedWord);
      setAllMeanings(await fetchWordMeanings(selectedWord));
    } catch (e) {
      console.log(e);
      alert("Error: API Call Failed");
    }
  };

  React.useEffect(() => {
    setResultCounter(0);
    if (selectedWord && selectedWord !== "Selected Word") {
      lookupWord();
    }
  }, [selectedWord]);

  function cycleResults(isNext) {
    if (isNext && resultCounter < allMeanings.length - 1) {
      setResultCounter(resultCounter + 1);
    } else if (!isNext && resultCounter > 0) {
      setResultCounter(resultCounter - 1);
    }
  }

  const wordSelected = allMeanings[resultCounter]
    ? allMeanings[resultCounter].phoneticSpelling
    : selectedWord;

  const examplesLink =
    "https://context.reverso.net/translation/arabic-english/" + wordSelected;
  const examplesAnchor = (
    <a
      className="mt-1 mb-10 text-lg text-stone-300 link link-hover"
      href={examplesLink}
      target="_blank"
      rel="noreferrer"
    >
      Examples
    </a>
  );

  return (
    <div className="flex rounded-t-lg mb-1 flex-row-reverse w-full bg-slate-600 text-slate-50">
      {resultCounter ? (
        <Arrow isArrowRight={true} onClick={() => cycleResults(false)} />
      ) : (
        ""
      )}

      <div
        className="flex flex-col px-2 text-xl items-center justify-center"
        dir="rtl"
      >
        <div>{wordSelected}</div>
        <div>{wordSelected !== "Selected Word" ? examplesAnchor : ""}</div>
      </div>
      <div className="w-full text-lg">
        <WordDataContainer
          allTranslations={allMeanings}
          resCounter={resultCounter}
          textContent={wordSelected}
        />
      </div>

      {resultCounter < allMeanings.length - 1 ? (
        <Arrow isArrowRight={false} onClick={() => cycleResults(true)} />
      ) : (
        ""
      )}
    </div>
  );
}
