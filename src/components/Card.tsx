import React from "react";
import { Switch, Text } from "react-native";
import { useTheme } from "utils/hooks";
import ViewWrapper from "wrappers/ViewWrapper";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <ViewWrapper>
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
      <ViewWrapper style={{ flex: 0 }}>
        <Text style={{ color: themeConfig.palette.text.primary }}>
          In Card.tsx
        </Text>
      </ViewWrapper>
    </ViewWrapper>
  );
};

export default Card;
