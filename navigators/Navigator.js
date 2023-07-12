import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Consts } from "../constants/Consts";
import { Directs } from "../screens/Directs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

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
          title: "Profile",
          animationEnabled: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: Consts.font,
            fontSize: 25,
          },
        }}
      />

      <Stack.Screen
        name="directs"
        component={Directs}
        options={{
          title: "Messages",
          animationEnabled: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: Consts.font,
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
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
