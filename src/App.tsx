import { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./App.css";
import Header from "./components/Header";
import { useSearch, useTheme } from "./store/store";
import transistor from "./assets/partners/transistor.png";
import laravel from "./assets/partners/laravel.png";
import mirage from "./assets/partners/mirage.png";
import statamic from "./assets/partners/statamic.png";
import statickit from "./assets/partners/statickit.png";
import tuple from "./assets/partners/tuple.png";
import darkTransistor from "./assets/partners/dark/transistor.png";
import darkLaravel from "./assets/partners/dark/laravel.png";
import darkMirage from "./assets/partners/dark/mirage.png";
import darkStatamic from "./assets/partners/dark/statamic.png";
import darkStatickit from "./assets/partners/dark/statickit.png";
import darkTuple from "./assets/partners/dark/tuple.png";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const currentTheme = useTheme((state) => state.theme);
  const { searchState, openSearch, closeSearch } = useSearch();

  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") openSearch();
      if (e.key === "Escape") closeSearch();
    });
  }, []);

  return (
    <div className={`App w-full ${currentTheme}`}>
      <div className="d dark:bg-night-bg">
        <div className="container mx-auto px-4 flex flex-col justify-between h-screen pb-10">
          <Header />
          <section className="container flex justify-center items-center">
            <div className="max-w-3xl mx-auto text-center ">
              <h2 className="text-main-black dark:text-white font-lexend font-medium text-6xl">
                Accounting
                <span className="text-main-blue dark:text-night-cyan bg-[url('/hero-bg.svg')] bg-no-repeat bg-[right_2rem] md:bg-[left_2.5rem] md:inline block">
                  {" "}
                  made simple{" "}
                </span>
                for small businesses
              </h2>
              <p className="font-normal text-base mt-4 dark:text-gray-500">
                Most bookkeeping software is accurate, but hard to use. We make
                the opposite trade-off, and hope you don’t get audited.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-around md:justify-between md:w-1/2 mx-auto mt-10">
                <button className="px-5 py-3 bg-main-black dark:bg-white dark:text-main-black text-white rounded-full">
                  Get 6 months free
                </button>
                <button className="dark:bg-night-cyan px-5 py-3 flex flex-row items-center justify-around rounded-full border-gray-200 border-2">
                  <BsFillPlayFill className="text-main-blue mr-2 h-6 w-6" />
                  Watch video
                </button>
              </div>
            </div>
          </section>
          <footer className="container flex flex-col items-center justify-center">
            <h4 className="font-lexend font-medium text-gray-600">
              Trusted by these six companies so far
            </h4>
            <div className="flex md:flex-row space-around space-x-10 mt-5">
              <a href="#">
                <img
                  src={currentTheme === "light" ? transistor : darkTransistor}
                  alt="transistor logo"
                />
              </a>
              <a href="#">
                <img
                  src={currentTheme === "light" ? tuple : darkTuple}
                  alt="tuple logo"
                />
              </a>
              <a href="#">
                <img
                  src={currentTheme === "light" ? statickit : darkStatickit}
                  alt="statickit logo"
                />
              </a>
              <a href="#">
                <img
                  src={currentTheme === "light" ? mirage : darkMirage}
                  alt="mirage logo"
                />
              </a>
              <a href="#">
                <img
                  src={currentTheme === "light" ? laravel : darkLaravel}
                  alt="laravel logo"
                />
              </a>
              <a href="#">
                <img
                  src={currentTheme === "light" ? statamic : darkStatamic}
                  alt="statamic logo"
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
      {searchState === "open" ? (
        <div className="absolute h-screen w-full bg-black bg-opacity-50 flex justify-center pt-40 top-0 left-0">
          <div className="relative ">
            <input
              type="text"
              className="md:w-80 bg-slate-900 dark:bg-night-cyan dark:text-main-black rounded-lg text-white text-opacity-60 h-12 pl-10 pr-14 text-sm focus:outline-none"
            />
            <AiOutlineSearch className="absolute top-[16px] left-4 text-white dark:text-main-black text-opacity-60" />
            <span className="absolute top-[16px] right-4 text-white dark:text-main-black text-opacity-60 text-xs">
              &#8984; + K
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
