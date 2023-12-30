/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Card from "components/Card";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { ThemeProvider } from "context/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <StatusBar barStyle={false ? "light-content" : "dark-content"} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Card />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
