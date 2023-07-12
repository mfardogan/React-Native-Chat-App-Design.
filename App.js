import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Consts } from "./constants/Consts";
import { Navigator } from "./navigators/Navigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend: require("./assets/fonts/LexendGiga-Regular.ttf"),
    Logo: require("./assets/fonts/BirthstoneBounce-Medium.ttf"),
  });

  React.useEffect(() => {
    const col = () => {
      NavigationBar.setBackgroundColorAsync(Consts.colors.back);
    };
    col();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={Consts.colors.back}
        />
        <Navigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
