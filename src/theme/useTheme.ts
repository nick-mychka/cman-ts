import { useCallback, useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback((theme: Theme) => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  }, []);

  return { theme, toggleTheme };
}
