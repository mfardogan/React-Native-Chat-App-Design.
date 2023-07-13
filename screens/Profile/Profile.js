import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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

      <Nocontent />
    </View>
  );
};

const Nocontent = () => {
  const { shareContainer, shareImg, shareText } = Styles;

  return (
    <View style={shareContainer}>
      <TouchableOpacity>
        <Image
          style={shareImg}
          source={require("../../assets/images/add.png")}
        />
      </TouchableOpacity>
      <Text style={shareText}>Share something.</Text>
    </View>
  );
};

const Segment = ({ number, text }) => {
  const { segmentContainer, segmentTextBig, segmentTextSmall } = Styles;
  return (
    <View style={segmentContainer}>
      <Text style={segmentTextBig}>{number}</Text>
      <Text style={segmentTextSmall}>{text}</Text>
    </View>
  );
};
