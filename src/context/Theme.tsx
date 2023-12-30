import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
} from "react";
import { girly, boyish } from "utils/mytheme.json";
import Theme from "Theme";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  themeConfig: Theme; // You may want to replace 'any' with the actual type of your theme configuration
}

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

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
