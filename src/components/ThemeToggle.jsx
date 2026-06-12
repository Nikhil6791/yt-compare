import React from "react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="bg-white h-screen w-screen dark:bg-black text-black dark:text-white">
      <button
        className="bg-purple-600 text-white font-semibold cursor-pointer mt-2 ml-2 rounded-xl px-7 py-2 "
        onClick={() => setDark(!dark)}
      >
        Toggle
      </button>
    </div>
  );
};

export default ThemeToggle;
