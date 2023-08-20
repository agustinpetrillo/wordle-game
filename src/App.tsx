import { useContext, useEffect } from "react";
import { UtilsContextType, WordData } from "../types";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Navbar from "./components/Navbar";
import QwertyKeyboard from "./components/QwertyKeyboard";
import { Utils } from "./utils/Utils";

function App() {
  const { gameOver, refreshData, setWordData } = useContext(
    Utils
  ) as UtilsContextType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/agustinpetrillo/0ee6995afcdf9f32fc0c50fb7506391b/raw/08fc922677acb38b36f187a4647afaeda6a92985/words"
        );
        const data = await response.json();
        setWordData((prevState: WordData) => ({
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
