import { WordView } from "./WordView";
import data from "./spanish-words.json";
import { useState } from "react";

function App(): JSX.Element {
  const [currentWordPosition, setCurrentWordPosition] = useState(0);

  const currentSpanishWord = data[currentWordPosition];
  return (
    <div>
      <WordView word={currentSpanishWord} />
    </div>
  );
}

export default App;
