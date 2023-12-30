import { useContext } from "react";
import { ThemeContext } from "context/Theme";
import { styles } from "./styles";
import { ThemeContextProps } from "Theme";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useStyle = () => {
  const { themeConfig } = useTheme();

  return styles(themeConfig);
};
