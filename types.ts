export type CurrentAttempt = {
  attempt: number;
  letterPosition: number;
};

export type GameOver = {
  gameOver: boolean;
  guessedWord: boolean;
};

export type UtilsContextType = {
  wordsData: string[][];
  setWordsData: (wordsData: string[][]) => void;
  currentAttempt: CurrentAttempt;
  setCurrentAttempt: (currentAttempt: object) => void;
  handleSelectedLetter: (keyValue: string) => void;
  handleDeletedLetter: () => void;
  handleEnteredWord: () => void;
  correctWord: string;
  generateWordSet: () => Promise<{ totalWords: string; correct: string }>;
  disabledLetters: string[];
  setDisabledLetters: (disabledLetters: object) => void;
  gameOver: GameOver;
  setGameOver: (gameOver: object) => void;
  wordSet: Set<string>;
  setWordSet: (wordSet: string) => void;
  setCorrectWord: (correctWord: string) => void;
  refreshData: boolean;
  setRefreshData: (refreshData: boolean) => void;
};
