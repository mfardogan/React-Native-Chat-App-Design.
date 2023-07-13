import { StyleSheet } from "react-native";
import { Consts } from "../../constants/Consts";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Consts.colors.back,
  },

  flig: {
    backgroundColor: Consts.colors.app,
    height: 300,
    width: "100%",
    alignItems: "center",
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
  name: {
    fontFamily: Consts.font,
    fontSize: 30,
    color: "white",
  },

  location: {
    fontFamily: Consts.font,
    fontSize: 20,
    color: "white",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Consts.colors.app,
  },
  topBox: { justifyContent: "center", alignItems: "center" },

  buttonBox: { flexDirection: "row", margin: 5 },
  follow: {
    backgroundColor: Consts.colors.appLight,
    width: 120,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  followText: { fontFamily: Consts.font, color: "white", margin: 5 },
  direct: {
    marginLeft: 5,
    backgroundColor: Consts.colors.appLight,
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  shareContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderStyle: "dashed",
    borderColor: Consts.colors.appExtraLight,
    borderRadius: 10,
    width: 220,
    height: 190,
    padding: 10,
  },
  shareImg: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: Consts.colors.appLight,
    borderRadius: 75,
  },
  shareText: {
    fontFamily: Consts.font,
    color: Consts.colors.appExtraLight,
    fontSize: 15,
  },

  segmentContainer: {
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Consts.colors.appExtraLight,
    borderRadius: 30,
    width: 70,
    height: 45,
  },

  segmentTextBig: { fontFamily: Consts.font, color: "white", fontSize: 20 },
  segmentTextSmall: { fontFamily: Consts.font, color: "white", fontSize: 10 },
});
