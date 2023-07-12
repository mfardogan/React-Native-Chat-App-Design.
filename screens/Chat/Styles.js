import { StyleSheet } from "react-native";
import { Consts } from "../../constants/Consts";

export const Styles = StyleSheet.create({
  container: { backgroundColor: Consts.colors.back, flex: 1 },
  date: {
    fontFamily: Consts.font,
    color: "white",
    textAlign: "center",
  },

  msg: { flexDirection: "row", padding: 5 },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Consts.colors.app,
  },
  boxSender: {
    margin: 5,
    borderRadius: 15,
    backgroundColor: "#5c5747",
    width: 250,
    padding: 15,
  },
  textSender: {
    fontFamily: Consts.font,
    color: "white",
    fontSize: 12,
  },
  boxMe: {
    margin: 5,
    borderRadius: 15,
    backgroundColor: "#8c887a",
    width: 250,
    padding: 15,
  },
  textMe: { fontFamily: Consts.font, color: "white", fontSize: 12 },
});
