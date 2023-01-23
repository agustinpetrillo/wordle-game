import { createContext, useState } from "react";
import { CurrentAttempt } from "../../types";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Utils = createContext({});

export const UtilsProvider = ({ children }: Props) => {
  const [wordsData, setWordsData] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);

  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const [refreshData, setRefreshData] = useState<boolean>(false);

  const generateWordSet = async () => {
    let totalWords;
    let correct;
    await fetch("../../words.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredByFiveLetters = data.filter(
          (fiveLetters: string) => fiveLetters.length === 5
        );
        totalWords = new Set(filteredByFiveLetters);
        correct =
          filteredByFiveLetters[
            Math.floor(Math.random() * filteredByFiveLetters.length)
          ];
      });
    return { totalWords, correct };
  };

  const [correctWord, setCorrectWord] = useState<string>("");
  const [wordSet, setWordSet] = useState<Set<string>>(new Set());

  const handleSelectedLetter = (keyValue: string) => {
    if (keyValue === "ENTER" || keyValue === "DEL") return;
    if (currentAttempt.letterPosition >= 5) return;

    const newBoard = [...wordsData];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setWordsData(newBoard);
    setCurrentAttempt((prevState: CurrentAttempt) => ({
      ...prevState,
      letterPosition: prevState.letterPosition + 1,
    }));
  };

  const handleDeletedLetter = () => {
    if (currentAttempt.letterPosition === 0) return;

    const newBoard = [...wordsData];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setWordsData(newBoard);
    setCurrentAttempt((prevState: CurrentAttempt) => ({
      ...prevState,
      letterPosition: prevState.letterPosition - 1,
    }));
  };

  const handleEnteredWord = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += wordsData[currentAttempt.attempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("word not found");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currentAttempt.attempt === 5)
      setGameOver({ gameOver: true, guessedWord: false });
  };

  const value = {
    wordsData,
    setWordsData,
    currentAttempt,
    setCurrentAttempt,
    disabledLetters,
    setDisabledLetters,
    gameOver,
    setGameOver,
    handleSelectedLetter,
    handleDeletedLetter,
    handleEnteredWord,
    correctWord,
    generateWordSet,
    setCorrectWord,
    wordSet,
    setWordSet,
    refreshData,
    setRefreshData,
  };
  return <Utils.Provider value={value}>{children}</Utils.Provider>;
};
