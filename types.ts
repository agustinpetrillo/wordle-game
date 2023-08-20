export type CurrentAttempt = {
  attempt: number;
  letterPosition: number;
};

export type GameOver = {
  gameOver: boolean;
  guessedWord: boolean;
};

export type WordData = {
  totalWords: Set<string>;
  correct: string;
};

export type UtilsContextType = {
  wordsData: string[][];
  setWordsData: (wordsData: string[][]) => void;
  currentAttempt: CurrentAttempt;
  setCurrentAttempt: (currentAttempt: CurrentAttempt) => void;
  handleSelectedLetter: (keyValue: string) => void;
  handleDeletedLetter: () => void;
  handleEnteredWord: () => void;
  generateWordSet: (
    data: string[]
  ) => Promise<{ totalWords: string; correct: string }>;
  disabledLetters: string[];
  wordData: WordData;
  setWordData: (wordData: WordData) => void;
  setDisabledLetters: (disabledLetters: object) => void;
  gameOver: GameOver;
  setGameOver: (gameOver: GameOver) => void;
  wordSet: Set<string>;
  setWordSet: (wordSet: string) => void;
  setCorrectWord: (correctWord: string) => void;
  refreshData: boolean;
  setRefreshData: (refreshData: boolean) => void;
};
