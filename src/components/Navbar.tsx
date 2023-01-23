import { FaBars, FaRegQuestionCircle } from "react-icons/fa";
import { RiBarChart2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full min-h-0 p-4 border border-b font-wordle border-b-gray-300">
        <FaBars size={25} className="cursor-pointer" />
        <h1 className="ml-[75px] text-3xl text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900">
          Wordle
        </h1>
        <div className="flex gap-2">
          <FaRegQuestionCircle size={30} className="cursor-pointer" />
          <RiBarChart2Fill size={30} className="cursor-pointer" />
          <AiFillSetting size={30} className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
