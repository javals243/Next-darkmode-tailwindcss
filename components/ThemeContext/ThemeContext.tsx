import React, { createContext, useEffect, useState } from "react";
interface IProps {
  children: React.ReactNode;
}
const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    } else {
      return "light";
    }
  }

  return "dark";
};

export const ThemeContext = createContext<any>({} as any);

export const ThemeProvider = ({ initialTheme, children }: IProps | any) => {
  const [theme, setTheme] = useState<any>(getInitialTheme);

  const rawSetTheme = (theme: any) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  if (!rawSetTheme) {
    console.log(
      "++++++++++++> Hello les gars je ne trouve pas ce que tu recherche"
    );
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
