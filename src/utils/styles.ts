import Theme from "Theme";
import { StyleSheet } from "react-native";

export const styles = (themeConfig: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeConfig.palette.background.backdrop,
      alignItems: "center",
      justifyContent: "center",
      color: themeConfig.palette.text.primary,
    },
    safeAreaView: {
      backgroundColor: themeConfig.palette.background.backdrop,
      flex: 1,
    },
    text: {
      color: themeConfig.palette.text.primary,
    },
  });
