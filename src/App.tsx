import data from "./spanish-words.json";
import { useState } from "react";
import { WordView } from "./components/WordView";
import { Button } from "./components/ButtonView";
import { WordListView } from "./components/WordListView";
import "./App.css";

interface CardProperties {
  Spanish: string;
  English: string;
}

interface CardCatergory {
  known: CardProperties[];
  unkown: CardProperties[];
}

function App(): JSX.Element {
  const [currentWordPosition, setCurrentWordPosition] = useState(0);
  const [cardType, setCardType] = useState<CardCatergory>({
    known: [],
    unkown: [],
  });

  function handleKnown() {
    setCurrentWordPosition(() => currentWordPosition + 1);
    setCardType(() => ({
      known: [...cardType.known, currentSpanishWord],
      unkown: [...cardType.unkown],
    }));
  }

  function handleUnknown() {
    setCurrentWordPosition(() => currentWordPosition + 1);
    setCardType(() => ({
      known: [...cardType.known],
      unkown: [...cardType.unkown, currentSpanishWord],
    }));
  }

  function resetUknowns() {
    setCardType(() => ({ known: [...cardType.known], unkown: [] }));
  }
  function resetAll() {
    setCardType(() => ({ known: [], unkown: [] }));
  }

  const currentSpanishWord = data[currentWordPosition];
  return (
    <div className="main-container">
      <div className="header">
        <WordView word={currentSpanishWord} />
        <div className="btn-div">
          <Button onClick={handleKnown} btnName="known" />
          <Button onClick={handleUnknown} btnName="unknown" />
        </div>
      </div>
      <div>
        <WordListView known={cardType.known} isKnown={true} />
        <WordListView known={cardType.unkown} isKnown={false} />
      </div>
      <div>
        <Button onClick={resetUknowns} btnName="Reset Unknown" />
        <Button onClick={resetAll} btnName="Reset All" />
      </div>
    </div>
  );
}
export default App;
