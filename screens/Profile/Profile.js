import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { Consts } from "../../constants/Consts";
import { Dummy } from "../../stores/Dummy";
import { Styles } from "./Styles";

export const Profile = () => {
  const user = Dummy.profiles.at(9);
  const nav = useNavigation();
  const {
    container,
    flig,
    name,
    avatar,
    topBox,
    location,
    buttonBox,
    follow,
    followText,
    direct,
  } = Styles;

  React.useEffect(() => {
    nav.setOptions({
      title: user.name,
      headerStyle: {
        backgroundColor: Consts.colors.app,
      },
    });
  }, []);
  return (
    <View style={container}>
      <StatusBar
        backgroundColor={Consts.colors.app}
        headerStyle={"light-content"}
      />
      <View style={flig}>
        <View style={topBox}>
          <Image style={avatar} source={{ uri: user.avatar }} />
        </View>

        <Text style={location}>{user.location}</Text>

        <Text style={name}>
          {user.name} {user.surname}
        </Text>

        <View style={{ flexDirection: "row", margin: 5 }}>
          <Segment number={user.follows} text={"Takip"} />
          <Segment number={user.followers} text={"Takipçi"} />
          <Segment number={user.posts.length} text={"Gönderi"} />
        </View>

        <View style={buttonBox}>
          <View style={follow}>
            <Octicons name="heart-fill" size={20} color="white" />
            <Text style={followText}>Follow</Text>
          </View>

          <View style={direct}>
            <MaterialCommunityIcons
              name="send-outline"
              size={24}
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Segment = ({ number, text }) => {
  return (
    <View
      style={{
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Consts.colors.appExtraLight,
        borderRadius: 30,
        width: 70,
        height: 45,
      }}
    >
      <Text style={{ fontFamily: Consts.font, color: "white", fontSize: 20 }}>
        {number}
      </Text>
      <Text style={{ fontFamily: Consts.font, color: "white", fontSize: 10 }}>
        {text}
      </Text>
    </View>
  );
};
