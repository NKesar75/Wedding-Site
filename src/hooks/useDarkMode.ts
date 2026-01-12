import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  useEffect(() => {
    // Force dark mode by default for all users
    if (!localStorage.getItem("darkMode")) {
      setDarkMode(true);
    }
  }, [setDarkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}
