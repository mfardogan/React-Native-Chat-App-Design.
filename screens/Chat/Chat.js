import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Consts } from "../../constants/Consts";
import { Dummy } from "../../stores/Dummy";
import { Styles } from "./Styles";

export const Chat = () => {
  const room = Dummy.chat;
  const user = Dummy.users.at(3);
  const { container, date } = Styles;
  const nav = useNavigation();

  React.useEffect(() => {
    nav.setOptions({
      title: user.username,
      headerTitleStyle: {
        fontFamily: Consts.font,
        fontSize: 20,
      },
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

const ToMe = ({ image, message, isme }) => {
  const { boxSender, textSender, textMe, boxMe, msg, img } = Styles;
  return (
    <View style={{ alignItems: isme ? "flex-end" : "flex-start" }}>
      {!isme && (
        <View style={msg}>
          <Image style={img} source={{ uri: image }} />
          <View style={boxSender}>
            <Text style={textSender}>{message}</Text>
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
