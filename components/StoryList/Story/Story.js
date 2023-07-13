import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./Styles";

export const Story = ({ avatar, user, seen }) => {
  const nav = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={Styles.container}
        onPress={() => {
          nav.navigate("profile");
        }}
      >
        <View style={[Styles.box, seen ? Styles.seen : ""]}>
          <Image style={Styles.avatar} source={{ uri: avatar }} />
        </View>
      </TouchableOpacity>

      <Text style={Styles.name}>{user.substring(0, 7)}</Text>
    </View>
  );
};
