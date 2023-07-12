import React from "react";
import { View } from "react-native";
import { StoryList } from "../../components/StoryList/StoryList";
import { Styles } from "./Styles";

export const Home = () => {
  const { container } = Styles;
  return (
    <View style={container}>
      <StoryList />
    </View>
  );
};
