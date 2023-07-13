import { StyleSheet } from "react-native";
import { Consts } from "../../constants/Consts";

export const Styles = StyleSheet.create({
  container: { backgroundColor: Consts.colors.back, flex: 1, padding: 10 },
  date: {
    color: "white",
    textAlign: "center",
    fontFamily: Consts.font,
    fontSize: 16,
    marginBottom: 5,
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
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 5,
    backgroundColor: Consts.colors.appLight,
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 5,
    backgroundColor: Consts.colors.appExtraLight,
    width: 300,
    padding: 15,
  },
  textMe: { fontFamily: Consts.font, color: "white", fontSize: 12 },

  iconBox: {
    margin: 10,
    width: 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: Consts.colors.app,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  messageContainer: { justifyContent: "center", alignItems: "center" },
  sendMessageBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    flexDirection: "row",
  },
  textBox: {
    width: "90%",
    padding: 5,
    color: "white",
    paddingLeft: 15,
    paddingRight: 85,
    fontFamily: Consts.font,
    height: 55,
    borderRadius: 30,
    backgroundColor: Consts.colors.appExtraLight,
  },

  attachments: {
    position: "absolute",
    right: 65,
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  send: {
    position: "absolute",
    right: 25,
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
