import React, { useState, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("dark-mode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
