import { useEffect, useCallback, useContext } from "react";
import { UtilsContextType } from "../../types";
import { Utils } from "../utils/Utils";
import Key from "./Key";

const QwertyKeyboard = () => {
  const {
    handleSelectedLetter,
    handleDeletedLetter,
    handleEnteredWord,
    currentAttempt,
    disabledLetters,
  } = useContext(Utils) as UtilsContextType;

  const topKeyboardLine = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleKeyboardLine = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];
  const bottomKeyboardLine = ["z", "x", "c", "v", "b", "n", "m"];

  const handleKeyboardTyping = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") handleEnteredWord();
      if (e.key === "Backspace") handleDeletedLetter();
      if (e.key !== "Backspace" && e.key !== "Enter") {
        topKeyboardLine.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase())
            handleSelectedLetter(key);
        });
        middleKeyboardLine.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase())
            handleSelectedLetter(key);
        });
        bottomKeyboardLine.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase())
            handleSelectedLetter(key);
        });
      }
    },
    [currentAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardTyping);
    return () => document.removeEventListener("keydown", handleKeyboardTyping);
  }, [handleKeyboardTyping]);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mt-2"
        onKeyDown={() => handleKeyboardTyping}
      >
        <div className="flex items-center justify-center gap-1 mb-1">
          {topKeyboardLine.map((key, keyIndex) => (
            <Key
              keyValue={key}
              key={keyIndex}
              disabled={disabledLetters.includes(key)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1 mb-1">
          {middleKeyboardLine.map((key, keyIndex) => (
            <Key
              keyValue={key}
              key={keyIndex}
              disabled={disabledLetters.includes(key)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <Key keyValue="ENTER" bigKey={true} />
          {bottomKeyboardLine.map((key, keyIndex) => (
            <Key
              keyValue={key}
              key={keyIndex}
              disabled={disabledLetters.includes(key)}
            />
          ))}
          <Key keyValue="DEL" bigKey={true} />
        </div>
      </div>
    </>
  );
};

export default QwertyKeyboard;
