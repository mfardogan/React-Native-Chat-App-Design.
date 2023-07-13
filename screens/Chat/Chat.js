import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Consts } from "../../constants/Consts";
import { Dummy } from "../../stores/Dummy";
import { Styles } from "./Styles";

export const Chat = () => {
  const room = Dummy.chat;
  const user = Dummy.users.at(3);
  const { container, date } = Styles;
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      title: user.username.substring(0, 15),
      headerTitleStyle: {
        fontFamily: Consts.font,
        fontSize: 20,
      },
      headerRight: () => <Icons />,
    });
  }, []);

  return (
    <View style={container}>
      <ScrollView>
        <Text style={date}>{room.date.toDateString()}</Text>

        {room.messages.map((x, i) => (
          <ToMe key={i} image={room.receiver} message={x.text} isme={x.isme} />
        ))}
      </ScrollView>
    </View>
  );
};

const Icons = () => {
  const { iconBox, iconCircle } = Styles;
  return (
    <View style={iconBox}>
      <TouchableOpacity>
        <View style={iconCircle}>
          <Feather name="phone-call" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ToMe = ({ image, message, isme }) => {
  const [like, setLike] = React.useState(false);
  const { boxSender, textSender, textMe, boxMe, msg, img, messageContainer } =
    Styles;
  return (
    <View style={{ alignItems: isme ? "flex-end" : "flex-start" }}>
      {!isme && (
        <View style={msg}>
          <Image style={img} source={{ uri: image }} />
          <View style={boxSender}>
            <Text style={textSender}>{message}</Text>
          </View>
          <View style={messageContainer}>
            <TouchableOpacity onPress={() => setLike((pre) => !pre)}>
              <Ionicons
                size={20}
                name={like ? "heart-sharp" : "heart-outline"}
                color={like ? Consts.colors.app : Consts.colors.appExtraLight}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isme && (
        <View style={boxMe}>
          <Text style={textMe}>{message}</Text>
        </View>
      )}
    </View>
  );
};
