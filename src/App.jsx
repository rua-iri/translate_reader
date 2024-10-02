import { useState } from "react";

import SingleWord from "./components/SingleWord";
import TopBar from "./components/TopBar";
import InputArea from "./components/InputArea";
import OptionsMenu from "./components/OptionsMenu";
import CustomButton from "./components/CustomButton";
import TextContainer from "./components/TextContainer";
import InfoModal from "./components/InfoModal";

export default function App() {
  const [selectedWord, setSelectedWord] = useState("Selected Word");
  const [wordString, setWordString] = useState(
    localStorage.getItem("text-input")
  );

  // set default voice if it has not been already set by user
  localStorage.getItem("selectedVoice")
    ? null
    : localStorage.setItem("selectedVoice", "Leila");
  let pressTime = Date.now();

  // function to set the text to an empty string
  function resetText() {
    setWordString("");
    setSelectedWord("Selected Word");
    localStorage.removeItem("text-input");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputText = event.target[0].value;
    setWordString(inputText);
    localStorage.setItem("text-input", inputText);
  }

  //function to be executed when a word is clicked
  function activateWord(elemAlt) {
    // check that 500 seconds have passed the same so the server isn't spammed
    if (Date.now() >= pressTime + 500 && elemAlt !== selectedWord) {
      setSelectedWord(elemAlt);
      pressTime = Date.now();
      console.log(elemAlt);
    }
  }

  // split each word into the string into an array
  const wordAra = wordString?.replaceAll("\n", " ").split(" ");

  //then map each element in the array to the Word component
  const wordCollection = wordAra?.map((wrd, index) => {
    const wrdFormatted = wrd.replace(/[.,،/#!$%^&*;:{}=\-_`~()"؛]/g, "");

    return (
      <SingleWord
        wordContent={wrd}
        key={wrd + index}
        alt={wrdFormatted}
        onClick={activateWord}
        isSelected={selectedWord === wrdFormatted}
      />
    );
  });

  return (
    <div className="App min-h-svh h-full bg-slate-200 p-3 relative">
      <div className="text-center bg-white rounded-lg pb-3 mx-8 lg:mx-56">
        <div className="block">
          <TopBar selectedWord={selectedWord} />
        </div>

        {wordString ? (
          <TextContainer textContent={wordCollection} />
        ) : (
          <InputArea handleSubmit={handleSubmit} />
        )}

        {wordString && (
          <CustomButton textContent={"Reset"} handleClick={resetText} />
        )}

        <OptionsMenu />
      </div>

      <InfoModal />
    </div>
  );
}
