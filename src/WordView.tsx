interface WordProps{
    Spanish: string
    English: string
}
interface Word{
    word:WordProps
}

export function WordView({word}:Word):JSX.Element{
    return <h1 className="word">{word.Spanish}</h1>
}