import React from "react";
import { Switch } from "react-native";
import { useTheme } from "utils/hooks";
import TextWrapper from "wrappers/TextWrapper";
import ViewWrapper from "wrappers/ViewWrapper";

const Card = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <>
      <TextWrapper
        sizeVariant="large"
        // styleVariant="decorative"
        style={{
          fontFamily: "gilbert_bold",
          fontSize: 36,
        }}>
        TransFirmations
      </TextWrapper>
      <Switch
        trackColor={{
          false: themeConfig.palette.background.tooltip,
          true: themeConfig.palette.background.tooltip,
        }}
        thumbColor={themeConfig.palette.primary["600"]}
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
