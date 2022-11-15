type handleFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;
interface funcProps {
  string: string;
  onChange: handleFunc;
}
export function Input({ string, onChange }: funcProps): JSX.Element {
  return (
    <>
      <p>Input some text here if you want:&nbsp;&nbsp;</p>
      <input type="text" value={string} onChange={(e) => onChange(e)} />
    </>
  );
}
