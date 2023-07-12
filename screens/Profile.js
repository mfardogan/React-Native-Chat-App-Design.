import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Consts } from "../constants/Consts";
import { Dummy } from "../stores/Dummy";

export const Profile = () => {
  const user = Dummy.users.at(9);
  const nav = useNavigation();

  React.useEffect(() => {
    nav.setOptions({
      title: user.name + " " + user.surname,
      headerTitleStyle: {
        fontFamily: Consts.font,
        fontSize: 22,
      },
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Consts.colors.back,
      }}
    ></View>
  );
};
