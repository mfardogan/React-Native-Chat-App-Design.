import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "./Styles";

export const Message = ({ item }) => {
  const {
    dot,
    when,
    date,
    news,
    inner,
    image,
    middle,
    message,
    username,
    newsText,
    container,
  } = Styles;

  const { avatar, name, text, online } = item;
  const nav = useNavigation();

  return (
    <TouchableOpacity onPress={() => nav.navigate("chat")}>
      <View style={container}>
        <View style={inner}>
          <Image style={image} source={{ uri: avatar }} />
          {online && <View style={dot}></View>}
        </View>
        <View style={middle}>
          <Text style={username}>{name.substring(0, 15)}</Text>
          <Text style={message}>{text}</Text>
        </View>
        <View style={when}>
          <Text style={date}>Friday</Text>
          {item.news > 0 && (
            <View style={news}>
              <Text style={newsText}>{item.news}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
