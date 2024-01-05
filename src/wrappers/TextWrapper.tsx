import { FC } from "react";
import React, { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { useStyle, useTheme } from "utils/hooks";

type ColorVariant = "primary" | "secondary" | "tertiary" | "icon";
type SizeVariant = "small" | "medium" | "large";

interface TextWrapperProps {
  children: string;
  colorVariant?: ColorVariant;
  sizeVariant?: SizeVariant;
  style?: StyleProp<TextStyle>;
}

const getSizeByVariant = (sizeVariant: SizeVariant) => {
  switch (sizeVariant) {
    case "small":
      return 14;
    case "medium":
      return 16;
    case "large":
      return 24;
  }
};

const TextWrapper: FC<TextWrapperProps> = ({
  children,
  colorVariant = "primary",
  sizeVariant = "medium",
  style,
}) => {
  const { themeConfig } = useTheme();
  const styles = useStyle();

  const dynamicStyles = StyleSheet.create({
    text: {
      color: themeConfig.palette.text[colorVariant],
      fontSize: getSizeByVariant(sizeVariant),
    },
  });
  return (
    <Text style={[styles.text, dynamicStyles.text, style]}>{children}</Text>
  );
};

export default TextWrapper;
