import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Dummy } from "../../stores/Dummy";
import { Story } from "../Story/Story";
import { Styles } from "./Styles";

export const StoryList = () => {
  return (
    <View style={Styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Dummy.stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Story avatar={item.avatar} seen={item.seen} user={item.username} />
        )}
      />
    </View>
  );
};
