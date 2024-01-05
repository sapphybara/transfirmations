import Theme from "Theme";
import { StyleSheet } from "react-native";

export const styles = ({ palette }: Theme) =>
  StyleSheet.create({
    get container() {
      return this.viewBase;
    },
    text: {
      color: palette.text.primary,
      fontFamily: "lato_regular",
      fontWeight: "normal",
    },
    viewBase: {
      alignItems: "center",
      backgroundColor: palette.background.body,
      color: palette.text.primary,
      flex: 1,
      justifyContent: "center",
    },
  });
