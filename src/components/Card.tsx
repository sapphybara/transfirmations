import React from "react";
import { Switch, Text, View } from "react-native";
import { useStyle, useTheme } from "utils/hooks";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();
  const styles = useStyle();

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

export default Card;
