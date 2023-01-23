import { useContext, useEffect } from "react";
import { UtilsContextType } from "../../types";
import { Utils } from "../utils/Utils";

type Props = {
  letterPosition: number;
  attemptValue: number;
};

const Letter = ({ letterPosition, attemptValue }: Props) => {
  const { wordsData, setDisabledLetters, currentAttempt, correctWord } =
    useContext(Utils) as UtilsContextType;

  const letter = wordsData[attemptValue][letterPosition];

  const correct = correctWord.toLowerCase()[letterPosition] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toLowerCase().includes(letter);
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "!bg-correct" : almost ? "!bg-almost" : "bg-gray-700");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev: string[]) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div
      className={`${letterState} flex items-center justify-center text-2xl font-bold bg-gray-700 text-gray-100 uppercase border-2 border-gray-900 w-14 h-14`}
    >
      {letter}
    </div>
  );
};

export default Letter;
