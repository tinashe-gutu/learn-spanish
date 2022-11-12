import { greet } from "./utils/greet";
import data from "../data/spanish-words.json"

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
