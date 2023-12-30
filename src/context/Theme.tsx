import React, { createContext, useState, PropsWithChildren, FC } from "react";
import { girly, boyish } from "utils/mytheme.json";
import Theme, { ThemeContextProps } from "Theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "girly",
  toggleTheme: () => {},
  themeConfig: girly as Theme,
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<"girly" | "boyish">("girly");

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === "girly" ? "boyish" : "girly"));
  };

  // Select the theme configuration based on the current theme
  const themeContextValue: ThemeContextProps = {
    theme: currentTheme,
    toggleTheme,
    themeConfig:
      currentTheme === "girly" ? (girly as Theme) : (boyish as Theme),
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
