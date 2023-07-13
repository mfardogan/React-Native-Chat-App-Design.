import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StoryList } from "../../components/StoryList/StoryList";
import { Consts } from "../../constants/Consts";
import { Styles } from "./Styles";

export const Home = () => {
  const { container } = Styles;
  return (
    <View style={container}>
      <StoryList />

      <View
        style={{
          position: "absolute",
          bottom: 5,
          right: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Segment content={require("../../assets/images/add.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Segment content={require("../../assets/images/discover.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Segment = ({ content }) => {
  return (
    <View style={{ margin: 5 }}>
      <Image
        style={{
          width: 60,
          height: 60,
          borderWidth: 2,
          borderRadius: 30,
          borderColor: Consts.colors.app,
        }}
        source={content}
      />
    </View>
  );
};
