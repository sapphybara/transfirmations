import React from "react";
import { Switch, Text } from "react-native";
import { useTheme } from "utils/hooks";
import ViewWrapper from "wrappers/ViewWrapper";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <>
      <Text style={{ fontSize: 20 }}>TransFirmations</Text>
      <Switch
        trackColor={{
          false: themeConfig.palette.primary["200"],
          true: themeConfig.palette.primary["800"],
        }}
        thumbColor={themeConfig.palette.secondary["500"]}
        onValueChange={toggleTheme}
        value={theme === "girly"}
      />
      <ViewWrapper style={{ height: 300, width: "100%" }}>
        <Text style={{ color: themeConfig.palette.text.primary }}>
          In Card.tsx
        </Text>
      </ViewWrapper>
    </>
  );
};

export default Card;
