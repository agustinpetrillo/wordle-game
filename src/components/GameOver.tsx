import { useContext } from "react";
import { UtilsContextType } from "../../types";
import { Utils } from "../utils/Utils";

//hacer fetch con useEffect aca para que cuando el usuario le de play again se ejecute el useEffect nuevamente
//añadir: frena, garua, pisen, croma
//quitar tildes y dieresis a las palabras

const GameOver = () => {
  const {
    gameOver,
    setCurrentAttempt,
    wordData,
    setDisabledLetters,
    setGameOver,
    setWordsData,
    setRefreshData,
    refreshData,
  } = useContext(Utils) as UtilsContextType;

  const handlePlayAgain = () => {
    setGameOver({
      gameOver: false,
      guessedWord: false,
    });
    setCurrentAttempt({
      attempt: 0,
      letterPosition: 0,
    });
    setDisabledLetters([]);
    setWordsData([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setRefreshData(!refreshData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-3">
        <h3 className="mb-1 text-2xl font-semibold">
          {gameOver.guessedWord ? "You Guess!" : "You Lost!"}
        </h3>
        <p>The correct word was:</p>
        <h1 className="mb-3 text-4xl font-semibold uppercase">
          {wordData.correct}
        </h1>
        <button
          onClick={() => handlePlayAgain()}
          className="px-12 py-4 text-white bg-gray-600 rounded"
        >
          Play again
        </button>
      </div>
    </>
  );
};

export default GameOver;
