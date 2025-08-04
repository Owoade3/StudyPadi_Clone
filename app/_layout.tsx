import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import LandingScreen from "../src/screen/auth/LandingScreen";
import SplashScreen from "../src/screen/auth/SplashScreen";
import SignIn from "@/src/screen/auth/SignIn";
const Stack = createNativeStackNavigator();
export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("../src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../src/assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
