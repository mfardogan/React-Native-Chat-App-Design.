import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Consts } from "../constants/Consts";
import { Chat } from "../screens/Chat";
import { Directs } from "../screens/Directs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Dummy } from "../stores/Dummy";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "",
          headerShadowVisible: false,
          animationEnabled: false,
          headerStyle: {
            backgroundColor: Consts.colors.back,
            height: 80,
          },
          headerLeft: () => <Logo />,
          headerRight: () => <Notifications />,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          animationEnabled: false,
          headerShadowVisible: false,
          headerRight: () => <User />,

          headerStyle: {
            height: 90,
            backgroundColor: Consts.colors.back,
          },
          title: "",
          headerTitleStyle: {
            color: "white",
            fontFamily: Consts.font,
            fontSize: 25,
          },
          headerTintColor: "white",
        }}
      />

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
            fontSize: 25,
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
            fontSize: 25,
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

const Notifications = () => {
  const nav = useNavigation();

  return (
    <View
      style={{
        margin: 5,
        padding: 5,
        paddingTop: 10,
        backgroundColor: Consts.colors.back,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          nav.navigate("directs");
        }}
      >
        <Ionicons
          name="notifications-sharp"
          size={25}
          color={Consts.colors.title}
        />
      </TouchableOpacity>
    </View>
  );
};

const Logo = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        margin: 5,
        width: 155,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Consts.colors.app,
        }}
      >
        <Text
          style={{
            fontSize: 55,
            fontFamily: "Logo",
            color: Consts.colors.back,
          }}
        >
          So
        </Text>
      </View>
      <Text
        style={{
          marginLeft: -10,
          fontSize: 55,
          fontFamily: "Logo",
          color: Consts.colors.title,
        }}
      >
        ciyyta
      </Text>
    </View>
  );
};
