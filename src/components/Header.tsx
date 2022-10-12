import logo from "../assets/logo-taxpal.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "../store/store";

function Header() {
  const currentTheme = useTheme((state) => state.theme);
  const toggleTheme = useTheme((state) => state.toggleTheme);

  return (
    <header className="py-6 w-full text-gray-600 dark:text-night-cyan flex flex-col md:flex-row justify-between">
      <nav className="flex flex-col sm:flex-row justify-between lg:w-1/3">
        <a href="/" className="flex flex-row justify-between items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20ZM20 36C12.736 36 6.679 30.837 5.296 23.98C4.97 22.358 6.343 21 8 21H32C33.657 21 35.031 22.357 34.704 23.98C33.32 30.838 27.264 36 20 36Z"
              fill={currentTheme === "light" ? "#2563EB" : "#fff"}
            />
          </svg>

          <div className="font-poppins font-semibold">
            <span className="text-main-black dark:text-night-cyan">Tax</span>
            <span className="text-main-blue dark:text-white">Pal</span>
          </div>
        </a>
        <ul className="list-none flex flex-col sm:flex-row justify-between items-center ml-8">
          <li className="px-6">
            <a href="#">Features</a>
          </li>
          <li className="px-6">
            <a href="#">Testimonials</a>
          </li>
          <li className="px-6">
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
      <div className="py-6 lg:w-6/12 flex flex-col sm:flex-row justify-between items-center">
        <div className="relative ">
          <input
            type="text"
            className="md:w-52 bg-slate-900 dark:bg-night-cyan dark:text-main-black bg-opacity-50 rounded-lg text-white text-opacity-60 h-9 pl-10 pr-14 text-sm focus:outline-none"
          />
          <AiOutlineSearch className="absolute top-[10px] left-4 text-white dark:text-main-black text-opacity-60" />
          <span className="absolute top-[10px] right-4 text-white dark:text-main-black text-opacity-60 text-xs">
            &#8984; + K
          </span>
        </div>
        <a href="#">Sign In</a>
        <button className="text-white dark:text-main-black bg-main-blue dark:bg-night-cyan py-2 px-4 rounded-full">
          Get Started Today
        </button>
        <div onClick={toggleTheme} className="cursor-pointer">
          {currentTheme === "light" ? (
            <BsFillSunFill className="text-orange-400 w-8 h-8" />
          ) : (
            <BsFillMoonFill className="w-8 h-8 text-yellow-200" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
