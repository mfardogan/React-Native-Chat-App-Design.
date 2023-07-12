import { StyleSheet } from "react-native";
import { Consts } from "../../constants/Consts";

export const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 85,
    padding: 20,
  },

  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: Consts.colors.app,
  },

  dot: {
    position: "absolute",
    bottom: -8,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#1ff05a",
  },
  middle: { flex: 3, padding: 5, paddingLeft: 20 },
  username: { fontFamily: Consts.font, fontSize: 18, color: "white" },
  message: { fontFamily: Consts.font, fontSize: 10, color: "#a6a4a4" },
  when: { flex: 1, alignItems: "center" },
  date: { fontFamily: Consts.font, fontSize: 9, color: "white" },
  news: {
    marginTop: 5,
    backgroundColor: Consts.colors.app,
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  newsText: {
    fontFamily: Consts.font,
    fontSize: 13,
    color: Consts.colors.title,
  },
});
