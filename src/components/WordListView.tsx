interface CardProperties {
  Spanish: string;
  English: string;
}

interface knownWordsProps {
  known: CardProperties[];
  isKnown: boolean;
}

export function WordListView({ known, isKnown }: knownWordsProps): JSX.Element {
  return (
    <>
      <p>{isKnown ? "Known" : "Unknown"}</p>
      <ul>
        {known.map((word, i) => (
          <li key={i}>
            {word.English}:{word.Spanish}
          </li>
        ))}
      </ul>
    </>
  );
}
