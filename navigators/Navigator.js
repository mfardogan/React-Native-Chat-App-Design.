import { createStackNavigator } from "@react-navigation/stack";
import { Image, View } from "react-native";
import { Consts } from "../constants/Consts";
import { Chat } from "../screens/Chat/Chat";
import { Directs } from "../screens/Direct/Directs";
import { Dummy } from "../stores/Dummy";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="directs"
        component={Directs}
        options={{
          title: "Messages",
          animationEnabled: false,
          headerShadowVisible: false,
          headerRight: () => <User />,
          headerStyle: {
            backgroundColor: Consts.colors.back,
            height: 90,
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: Consts.font,
            fontSize: 20,
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          title: "",
          animationEnabled: false,
          headerShadowVisible: false,
          headerRight: () => <User />,
          headerStyle: {
            backgroundColor: Consts.colors.back,
            height: 90,
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: Consts.font,
            fontSize: 20,
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

const User = () => {
  return (
    <View
      style={{
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
      }}
    >
      <Image
        style={{
          width: 55,
          height: 55,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Consts.colors.app,
        }}
        source={{ uri: Dummy.user.avatar }}
      />
    </View>
  );
};
