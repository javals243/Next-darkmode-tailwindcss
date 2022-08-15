import { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const DarkModeToggle = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const handleThemeSwitch = () => {
    setTheme(isDark ? "dark" : "light");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {isDark ? "Hello" : "lesgars"}
      </button>
    </>
  );
};
