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
    <button
        className="bg-purple-600  font-semibold cursor-pointer mt-2 ml-2 rounded-xl px-7 py-2 "
        onClick={() => setDark(!dark)}
      >
        Toggle
      </button>
  );
};

export default ThemeToggle;
