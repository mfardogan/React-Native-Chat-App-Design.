import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MessageList } from "../components/MessageList";
import { Consts } from "../constants/Consts";
import { Dummy } from "../stores/Dummy";

export const Directs = () => {
  const message = Dummy.directs.at(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Consts.colors.back,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderRadius: 10,
          width: "100%",
          height: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: 300,
            height: 50,
            backgroundColor: "#5c5747",
            borderRadius: 25,
            padding: 5,
            paddingLeft: 20,
            color: "white",
            fontFamily: Consts.font,
            fontSize: 20,
          }}
          placeholder="Search"
          placeholderTextColor={"white"}
        />

        <View
          style={{
            marginLeft: 10,
            backgroundColor: Consts.colors.app,
            width: 40,
            height: 40,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Feather name="search" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <MessageList />
    </View>
  );
};
