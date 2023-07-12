import { StyleSheet } from "react-native";
import { Consts } from "../constants/Consts";

export const Styles = {
  story: StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      margin: 1,
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    seen: {
      borderWidth: 3,
      borderStyle: "dashed",
      borderColor: Consts.colors.app,
    },
    avatar: {
      margin: 2,
      width: 70,
      height: 70,
      borderRadius: 35,
      borderColor: "#4f4f4f",
      borderWidth: 2,
    },
    name: {
      fontSize: 14,
      fontFamily: Consts.font,
      color: Consts.colors.title,
    },
  }),
};
