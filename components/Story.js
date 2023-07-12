import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./Styles";

export const Story = ({ avatar, user, seen }) => {
  const styles = Styles.story;

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.container}>
        <View style={[styles.box, seen ? styles.seen : ""]}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
      </TouchableOpacity>

      <Text style={styles.name}>{user.substring(0, 7)}</Text>
    </View>
  );
};
