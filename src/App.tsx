/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Card from "components/Card";
import { ScrollView, StatusBar, View } from "react-native";
import ThemeProvider from "context/Theme";
import SafeAreaWrapper from "wrappers/SafeAreaWrapper";

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaWrapper>
        <StatusBar barStyle={false ? "light-content" : "dark-content"} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Card />
          </View>
        </ScrollView>
      </SafeAreaWrapper>
    </ThemeProvider>
  );
};

export default App;
