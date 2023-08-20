import { useContext, useEffect } from "react";
import { UtilsContextType } from "../types";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Navbar from "./components/Navbar";
import QwertyKeyboard from "./components/QwertyKeyboard";
import { Utils } from "./utils/Utils";

function App() {
  const { gameOver, generateWordSet, refreshData, wordData, setWordData } =
    useContext(Utils) as UtilsContextType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../words.json");
        const data = await response.json();
        setWordData((prevState) => ({
          ...prevState,
          totalWords: new Set(data),
          correct: data[Math.floor(Math.random() * data.length)],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [refreshData]);
  // useEffect(() => {
  //   generateWordSet().then((words) => {
  //     setWordSet(words.totalWords);
  //   });
  // }, []);

  // useEffect(() => {
  //   generateWordSet().then((words) => {
  //     setCorrectWord(words.correct);
  //   });
  // }, [refreshData]);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-darkMmode">
        <Navbar />
        <Board />
        {gameOver.gameOver ? <GameOver /> : <QwertyKeyboard />}
      </div>
    </>
  );
}

export default App;
