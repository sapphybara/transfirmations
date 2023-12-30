import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { useStyle } from "utils/hooks";

const SafeAreaWrapper: FC<PropsWithChildren> = ({ children }) => {
  const styles = useStyle();
  return <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;
