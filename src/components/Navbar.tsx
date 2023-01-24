import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="flex items-center justify-between w-full min-h-0 p-4 bg-white border-b dark:bg-darkMmode font-wordle border-b-lightMode dark:border-b-border">
        <FaBars size={25} className="cursor-pointer" />
        <h1 className="ml-[75px] text-3xl text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900">
          Wordle
        </h1>
        <div className="flex gap-2">
          {theme === "light" ? (
            <MdOutlineDarkMode
              size={30}
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <BsSun
              size={30}
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            />
          )}
          <RiBarChart2Fill size={30} className="cursor-pointer" />
          <AiFillSetting size={30} className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
