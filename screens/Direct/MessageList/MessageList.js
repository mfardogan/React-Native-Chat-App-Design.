import { FlatList } from "react-native";
import { Dummy } from "../../../stores/Dummy";
import { Message } from "./Message/Message";

export const MessageList = () => {
  return (
    <FlatList
      data={Dummy.directs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Message item={item} />}
    />
  );
};
