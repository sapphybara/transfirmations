/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Card from "components/Card";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useStyle, useTheme } from "utils/hooks";
import ViewWrapper from "wrappers/ViewWrapper";

const App = () => {
  const styles = useStyle();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={theme === "boyish" ? "light-content" : "dark-content"}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* this view will always seem to not have "flex: 1" because it's in a scroll view.
          it's still full size */}
        <ViewWrapper>
          <Card />
        </ViewWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
