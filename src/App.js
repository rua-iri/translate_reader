import React from 'react';
import './App.css';
import Word from "./components/Word.js"
import Definition from './components/Definition';
import InputArea from './components/InputArea';


// TODO change default things from the manifest favicon etc
// so that the site looks better

function App() {


  const [selectedWord, setSelectedWord] = React.useState("");
  const [wordString, setWordString] = React.useState("");

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
  }

  // function to change the text according to what is
  // typed/copy and pasted into the textarea
  function submitText() {
    const inputText = document.getElementById("input-textarea").value;
    setWordString(inputText);
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

  // TODO maybe save the text between refreshes using cookies or something

  // TODO text is hard to read as current formatting removes paragraph structure
  // this should be fixed

  return (
    <div className="App gimme-outline">
      <div className='focus-word'>
        <Definition selectedWord={selectedWord} />
      </div>
      <div className="wordbox arab-text gimme-outline">
        {wordCollection}
      </div>

      {wordString ? resetButton : <InputArea onClick={submitText} />}
    </div>
  );
}

export default App;
