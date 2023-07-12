import { FlatList } from "react-native-gesture-handler";
import { Dummy } from "../../stores/Dummy";
import { Story } from "../Story/Story";

export const StoryList = () => {
  return (
    <FlatList
      horizontal
      data={Dummy.stories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Story avatar={item.avatar} seen={item.seen} user={item.username} />
      )}
    />
  );
};
