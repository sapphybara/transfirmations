import LevelProvider from "context/Level";
import React, {
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  isValidElement,
} from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useLevel, useStyle, useTheme } from "utils/hooks";

interface CustomViewProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const isViewWrapper = (child: ReactNode): boolean =>
  isValidElement(child) && (child.type as any)?.displayName === "ViewWrapper";

const getColorFromLevel = (level: number) => {
  const { themeConfig } = useTheme();
  switch (level) {
    case 0:
      return themeConfig.palette.background.body;
    case 1:
      return themeConfig.palette.background.surface;
    case 2:
      return themeConfig.palette.background.level1;
    case 3:
      return themeConfig.palette.background.level2;
    case 4:
      return themeConfig.palette.background.level3;
    default:
      if (level > 4) {
        throw new Error("Level cannot be greater than 4");
      }
      return themeConfig.palette.background.body;
  }
};

const ViewWrapper: FC<CustomViewProps> = ({ children, style }) => {
  const styles = useStyle();
  const level = useLevel();
  const backgroundColor = getColorFromLevel(level);

  // manages accidental creation of double nested wrappers with no children
  const isMeaninglessWrapper =
    Children.count(children) === 1 &&
    isViewWrapper(Children.toArray(children)[0]);
  return (
    <LevelProvider initialLevel={level + Number(!isMeaninglessWrapper)}>
      <View style={[styles.container, { backgroundColor }, style]}>
        {children}
      </View>
    </LevelProvider>
  );
};

ViewWrapper.displayName = "ViewWrapper";

export default ViewWrapper;
