import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Consts } from "../../constants/Consts";
import { Dummy } from "../../stores/Dummy";
import { Styles } from "./Styles";

export const Profile = () => {
  const user = Dummy.users.at(9);
  const nav = useNavigation();
  const { container } = Styles;

  React.useEffect(() => {
    nav.setOptions({
      title: user.name + " " + user.surname,
      headerTitleStyle: {
        fontFamily: Consts.font,
        fontSize: 20,
      },
    });
  }, []);
  return <View style={container}></View>;
};
