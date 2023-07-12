import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MessageList } from "../../components/MessageList/MessageList";
import { Consts } from "../../constants/Consts";
import { Styles } from "./Styles";

export const Directs = () => {
  const { container, box, text, btn } = Styles;

  return (
    <View style={container}>
      <View style={box}>
        <TextInput
          style={text}
          placeholder="Search"
          placeholderTextColor={"white"}
        />

        <View style={btn}>
          <TouchableOpacity>
            <Feather name="search" size={25} color={Consts.colors.title} />
          </TouchableOpacity>
        </View>
      </View>
      <MessageList />
    </View>
  );
};
