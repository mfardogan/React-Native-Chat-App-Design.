import React from "react";
import { View } from "react-native";
import { StoryList } from "../components/StoryList";
import { Consts } from "../constants/Consts";

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Consts.colors.back,
      }}
    >
      <StoryList />
    </View>
  );
};
