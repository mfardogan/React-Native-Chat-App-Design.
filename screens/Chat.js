import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Consts } from "../constants/Consts";
import { Dummy } from "../stores/Dummy";

export const Chat = () => {
  const room = Dummy.chat;

  return (
    <View style={{ backgroundColor: Consts.colors.back, flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            fontFamily: Consts.font,
            color: "white",
            textAlign: "center",
          }}
        >
          {room.date.toDateString()}
        </Text>

        {room.messages.map((x, i) => (
          <ToMe key={i} image={room.receiver} message={x.text} isme={x.isme} />
        ))}
      </ScrollView>
    </View>
  );
};

const ToMe = ({ image, message, isme }) => {
  return (
    <View style={{ alignItems: isme ? "flex-end" : "flex-start" }}>
      {!isme && (
        <View style={{ flexDirection: "row", padding: 5 }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: Consts.colors.app,
            }}
            source={{ uri: image }}
          />

          <View
            style={{
              margin: 5,
              borderRadius: 15,
              backgroundColor: "#5c5747",
              width: 250,
              padding: 15,
            }}
          >
            <Text
              style={{
                fontFamily: Consts.font,
                color: "white",
                fontSize: 12,
              }}
            >
              {message}
            </Text>
          </View>
        </View>
      )}

      {isme && (
        <View
          style={{
            margin: 5,
            borderRadius: 15,
            backgroundColor: "#8c887a",
            width: 250,
            padding: 15,
          }}
        >
          <Text
            style={{ fontFamily: Consts.font, color: "white", fontSize: 12 }}
          >
            {message}
          </Text>
        </View>
      )}
    </View>
  );
};
