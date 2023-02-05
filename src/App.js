import React from 'react';
import './App.css';
import Word from "./components/Word.js"
import Definition from './components/Definition';
import InputArea from './components/InputArea';


// TODO change default things from the manifest favicon etc
// so that the site looks better

function App() {


    // TODO add an options menu
    // its components should probably be in a separate directory in the components
    // maybe put an about sections there to explain the app


    // TODO allow users to change the voice of the pronunciation tool
    // there are three options available from reverso
    // store this choice in localstorage

    // TODO allow users to select the percentage of words they are allowed
    // to translate for a given article
    // this should be stored in localstorage
    // the number of words translated should be reset when the user resets the article


  const [selectedWord, setSelectedWord] = React.useState("Selected Word");
  const [wordString, setWordString] = React.useState(localStorage.getItem("text-input") ? localStorage.getItem("text-input") : "");

  let pressTime = Date.now();


  //split each word into the string into an array
  const wordAra = wordString.replaceAll("\n", " ").split(" ");


  //then map each element in the array to the Word component
  const wordCollection = wordAra.map((wrd, index) => (
    <Word
      wordContent={wrd}
      key={wrd + index}
      alt={wrd.replace(/[.,،/#!$%^&*;:{}=\-_`~()"؛]/g, "")}
      onClick={activateWord}
      isSelected={selectedWord === wrd.replace(/[.,،/#!$%^&*;:{}=\-_`~()"؛]/g, "")} />
  ))

  const resetButton = <button className="source-button" onClick={resetText}>Reset</button>;


  // function to set the text to an empty string
  function resetText() {
    setWordString("");
    setSelectedWord("Selected Word");
    localStorage.removeItem("text-input");
  }

  // function to change the text according to what is
  // typed/copy and pasted into the textarea
  function submitText() {
    const inputText = document.getElementById("input-textarea").value;
    setWordString(inputText);
    localStorage.setItem('text-input', inputText);
  }


  //function to be executed when a word is clicked
  function activateWord(elemAlt) {

    //check that 500 seconds have passed and the word clicked is not
    // the same so the server isn't spammed
    if (Date.now() >= (pressTime + 500) && elemAlt !== selectedWord) {
      setSelectedWord(elemAlt);
      pressTime = Date.now();
      console.log(elemAlt);
    }
  }

  const wordBox = <div className="wordbox-box"><div className="wordbox arab-text gimme-outline">{wordCollection}</div></div>;


  // TODO text is hard to read as current formatting removes paragraph structure
  // this should be fixed

  return (
    <div className="App gimme-outline">
      <div className='focus-word'>
        <Definition selectedWord={selectedWord} />
      </div>
      {wordString ? wordBox : ""}
      <button className='source-button' id="options-button">Options</button>
      {wordString ? resetButton : <InputArea onClick={submitText} />}
    </div>
  );
}

export default App;
