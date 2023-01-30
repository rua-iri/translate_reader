import React from 'react';
import './App.css';
import Word from "./components/Word.js"
import Definition from './components/Definition';

//TODO Nodejs to query the api


function App() {


  const [selectedWord, setSelectedWord] = React.useState("");

  let pressTime = Date.now();

  //TODO find a way to make the text change, maybe via a separate input page...

  //split each word into the string into an array
  const wordString = `يتم فهرست بتطويق قد, يتم كل تطوير وكسبت. في بقصف مئات السيء ذات. أخذ في عرفها العناد, فكان سنغافورة ويكيبيديا، كلا بـ, جهة فاتّبع الربيع، ٣٠. تعداد ضمنها الستار أما عن, بـ يذكر سياسة تزامناً بها.

  بحشد المبرمة ان وصل. يتم بسبب المدن العناد بل, عدم في تشكيل الأراضي, أي تحت اكتوبر وحرمان وتنامت. دفّة واندونيسيا، جُل كل, دول أن خيار وصافرات. مكن ثم لإعادة وبحلول, أم والتي بمباركة بحق. قد حالية السبب والحزب حول.
  
  ولم إنطلاق استعملت اقتصادية بـ. عل حادثة التبرعات بالمطالبة جعل, عُقر سكان والفلبين بل أضف. هو عدم والقرى الخاطفة, يتم جمعت وحلفاؤها إذ. كان قد دخول تحرير مسارح. أي مكن هناك الوراء الطرفين, يكن هامش الشرقي هو.`;

  const wordAra = wordString.split(" ");


  // TODO apparently there are unecessary escape characters

  //then map each element in the array to the Word component
  const wordCollection = wordAra.map((wrd, index) => (
    <Word
      wordContent={wrd}
      key={wrd + index}
      alt={wrd.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}
      onClick={activateWord} />
  ))



  //function to be executed when a word is clicked
  function activateWord(elemAlt) {

    //check that x seconds have passed so the server doesn't crash
    if (Date.now() >= (pressTime + 500)) {
      setSelectedWord(elemAlt);
      console.log(selectedWord);
      pressTime = Date.now();
    }
  }


  return (
    <div className="App gimme-outline">
      <div className='focus-word'>
        <Definition
          selectedWord={selectedWord}
        />
      </div>
      <div className="wordbox arab-text gimme-outline">
        {wordCollection}
      </div>
    </div>
  );
}

export default App;
