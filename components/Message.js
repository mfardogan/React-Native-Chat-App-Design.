import { Image, Text, View } from "react-native";
import { Consts } from "../constants/Consts";

export const Message = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 85,
        padding: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: Consts.colors.app,
          }}
          source={{ uri: item.avatar }}
        />

        {item.online && (
          <View
            style={{
              position: "absolute",
              bottom: -8,
              right: 2,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#1ff05a",
            }}
          ></View>
        )}
      </View>
      <View style={{ flex: 3, padding: 5, paddingLeft: 20 }}>
        <Text style={{ fontFamily: Consts.font, fontSize: 18, color: "white" }}>
          {item.name.substring(0, 15)}
        </Text>
        <Text
          style={{ fontFamily: Consts.font, fontSize: 10, color: "#a6a4a4" }}
        >
          {item.text}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontFamily: Consts.font, fontSize: 9, color: "white" }}>
          Friday
        </Text>
        {item.news > 0 && (
          <View
            style={{
              marginTop: 5,
              backgroundColor: Consts.colors.app,
              width: 25,
              height: 25,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: Consts.font,
                fontSize: 13,
                color: Consts.colors.back,
              }}
            >
              {item.news}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
