interface CardProperties {
  [index: string]: number;
}

interface Letters {
  word: CardProperties;
  string: string;
}

export function WordView({ word, string }: Letters): JSX.Element {
  let stringObj = ``;
  for (const [key, value] of Object.entries(word)) {
    stringObj += `${key}: ${value},`;
  }
  return (
    <>
      <h2 className="string">
        <i>current String: </i>
        {string}
      </h2>
      <h3 className="object">
        <i>Current Object: </i>&#123; {stringObj} &#125;
      </h3>
    </>
  );
}
