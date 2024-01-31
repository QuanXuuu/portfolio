"use client";

import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <button
        className="fixed bottom-5 right-5 bg-gray-50 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-sm flex justify-center items-center rounded-full hover:scale-[1.15] active:scale-105 transition-all"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? (
          <BsSun className="text-xl" />
        ) : (
          <BsMoon className="text-xl" />
        )}
      </button>
    </motion.div>
  );
}

export default ThemeSwitch;
