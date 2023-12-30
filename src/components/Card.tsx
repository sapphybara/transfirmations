import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { useTheme } from "context/Theme";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <View style={styles.container}>
      <Text>Voila</Text>
      <Switch
        trackColor={{
          false: themeConfig.palette.primary["200"],
          true: themeConfig.palette.primary["800"],
        }}
        thumbColor={themeConfig.palette.secondary["500"]}
        onValueChange={toggleTheme}
        value={theme === "girly"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
