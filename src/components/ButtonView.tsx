type handleFunc = () => void;

interface functionProps {
  onClick: handleFunc;
  btnName: string;
}
export function Button({ onClick, btnName }: functionProps): JSX.Element {
  return <button onClick={onClick}>{btnName}</button>;
}
