import React, { useEffect } from "react";
import useLocalStorage from "./UseLocalStorage";

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-4">
      <h2 className="text-xl font-semibold">Light-Dark Theme</h2>
      <p>Namaste React</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Change Theme
      </button>
    </div>
  );
}

export default ThemeSwitch;
