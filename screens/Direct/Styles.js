import { StyleSheet } from "react-native";
import { Consts } from "../../constants/Consts";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Consts.colors.back,
  },
  box: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 300,
    height: 50,
    backgroundColor: "#5c5747",
    borderRadius: 25,
    padding: 5,
    paddingLeft: 20,
    color: "white",
    fontFamily: Consts.font,
    fontSize: 17,
  },
  btn: {
    marginLeft: 10,
    backgroundColor: Consts.colors.app,
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});