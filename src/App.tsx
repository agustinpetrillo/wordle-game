import { useContext, useEffect } from "react";
import { UtilsContextType } from "../types";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import QwertyKeyboard from "./components/QwertyKeyboard";
import { Utils } from "./utils/Utils";

function App() {
  const { gameOver, setCorrectWord, setWordSet, generateWordSet, refreshData } =
    useContext(Utils) as UtilsContextType;

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.totalWords);
    });
  }, []);

  useEffect(() => {
    generateWordSet().then((words) => {
      setCorrectWord(words.correct);
    });
  }, [refreshData]);

  return (
    <>
      <Board />
      {gameOver.gameOver ? <GameOver /> : <QwertyKeyboard />}
    </>
  );
}

export default App;
