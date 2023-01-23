import { useContext } from "react";
import { UtilsContextType } from "../../types";
import { Utils } from "../utils/Utils";

type Props = {
  keyValue: string;
  bigKey?: boolean;
  disabled?: string[] | boolean;
};

const Key = ({ keyValue, bigKey, disabled }: Props) => {
  const { handleSelectedLetter, handleDeletedLetter, handleEnteredWord } =
    useContext(Utils) as UtilsContextType;

  const handleSelectedKey = () => {
    if (keyValue === "ENTER") handleEnteredWord();
    if (keyValue === "DEL") handleDeletedLetter();
    handleSelectedLetter(keyValue);
  };
  return (
    <>
      <button
        className={`${
          bigKey
            ? "w-[68px] text-gray-100 uppercase font-semibold text-sm bg-gray-500 rounded h-14 tracking-tight"
            : disabled
            ? "text-sm font-semibold text-gray-100 uppercase bg-gray-700 rounded h-14 w-11"
            : "text-sm font-semibold text-gray-100 uppercase bg-gray-500 rounded h-14 w-11"
        }`}
        onClick={() => handleSelectedKey()}
      >
        {keyValue}
      </button>
    </>
  );
};

export default Key;
