import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import icon from "../constants/icon";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import HomeScreen from "../screen/main/HomeScreen";
import LeaderBoard from "../screen/main/LeaderBoard";
import PastQuestions from "../screen/main/PastQuestions";
import Profile from "../screen/main/Profile";
const Tab = createBottomTabNavigator();
const textChange = true;
const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          elevation: 10,
          backgroundColor: "#fff",
          borderRadius: 5,
          left: 30,
          right: 30,
          height: 90,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        tabBarLabelStyle: {
          ...FONTS.h4,
          fontSize: SIZES.height * 0.01,
         
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
      }}
    >
      <Tab.Screen
        name="Cbt"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icon.home : icon.home_outline}
              style={{
                height: focused ? 30 : 25,
                width: focused ? 30 : 25,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PST-Question"
        component={PastQuestions}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: focused
                  ? "https://img.icons8.com/?size=100&id=q3fTaQ6ZRN7X&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=eGAAZwjDl3Ls&format=png&color=000000",
              }}
              style={{
                height: focused ? 30 : 25,
                width: focused ? 30 : 25,
                tintColor: focused ? "#cd5c5c" : "#000",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: focused
                  ? "https://img.icons8.com/?size=100&id=87&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=7697&format=png&color=000000",
              }}
              style={{
                height: focused ? 30 : 25,
                width: focused ? 30 : 25,
                tintColor: focused ? "#cd5c5c" : "#000",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: focused
                  ? "https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=23264&format=png&color=000000",
              }}
              style={{
                height: focused ? 30 : 25,
                width: focused ? 30 : 25,
                tintColor: focused ? "#cd5c5c" : "#000",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
