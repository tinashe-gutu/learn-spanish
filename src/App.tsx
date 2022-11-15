import { useState } from "react";
import { WordView } from "./components/WordView";
import { Input } from "./Input";
import "./App.css";

interface CardProperties {
  [index: string]: number;
}

function App(): JSX.Element {
  const [data, setData] = useState("hello how are you");
  const inputArr = data.split("").filter((char) => char !== " ");
  const inputStr = inputArr.join("");

  const [word, setWord] = useState(data);
  const [letterPosition, setLetterPostion] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(data[letterPosition]);
  const [currentObject, setCurrentObject] = useState<CardProperties>({});

  function handleReset() {
    setData("hello world how are you");
    setWord(() => data);
    setLetterPostion(0);
    setCurrentLetter(data[0]);
    setCurrentObject(() => ({}));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("In handle change");
    setData(() => {
      setCurrentObject({});
      setLetterPostion(0);
      setCurrentLetter(data[0]);
      setCurrentObject(() => ({}));
      setWord(e.target.value);
      return e.target.value;
    });
  }

  function handleNext(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (word.length - 1 === 0) {
      e.currentTarget.disabled = true;
    }
    setWord((curWord) => {
      const wordArr = curWord.split("");
      if (wordArr[0] === " ") {
        wordArr.shift();
        wordArr.shift();
      } else {
        wordArr.shift();
      }
      return [...wordArr].join("");
    });

    setLetterPostion(() => letterPosition + 1);
    setCurrentLetter(() => inputStr[letterPosition + 1]);
    setCurrentObject(() => {
      if (currentObject[currentLetter]) {
        return {
          ...currentObject,
          [currentLetter]: currentObject[currentLetter]++,
        };
      } else {
        return { ...currentObject, [currentLetter]: 1 };
      }
    });
  }

  return (
    <div>
      <h1 className="title">Count Occurences Visualiser</h1>
      <div className="header">
        <WordView word={currentObject} string={word} />
      </div>
      <div className="input">
        <Input string={word} onChange={handleChange} />
      </div>
      <hr></hr>
      <div className="buttons">
        <button
          className="button"
          onClick={handleNext}
          disabled={word.length === 0}
        >
          Next
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
