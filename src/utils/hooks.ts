import { useContext } from "react";
import { ThemeContext } from "context/Theme";
import { LevelContext } from "context/Level";
import { styles } from "./styles";
import { ThemeContextProps } from "Theme";

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export const useStyle = () => {
  const { themeConfig } = useTheme();
  return styles(themeConfig);
};

export const useLevel = (): number => useContext(LevelContext);
