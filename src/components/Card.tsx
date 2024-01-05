import React from "react";
import { Switch, Text } from "react-native";
import { useTheme } from "utils/hooks";
import TextWrapper from "wrappers/TextWrapper";
import ViewWrapper from "wrappers/ViewWrapper";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <>
      <TextWrapper sizeVariant="large" style={{ fontFamily: "gilbert_bold" }}>
        TransFirmations
      </TextWrapper>
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
        <TextWrapper>In Card.tsx</TextWrapper>
      </ViewWrapper>
    </>
  );
};

export default Card;
