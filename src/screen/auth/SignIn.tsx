import FormButton from "@/src/components/Button/FormButton";
import ToggleBtn from "@/src/components/Button/ToggleBtn";
import FormInput from "@/src/components/Input/FormInput";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View ,Alert} from "react-native";
import icon from "../../constants/icon";
const SignIn = () => {
 useEffect(() => {
  const fillTempData = async () => {
    const remember = await AsyncStorage.getItem("rememberMe");

    if (remember === "true") {
      const storedEmail = await AsyncStorage.getItem("tempEmail");
      const storedPhone = await AsyncStorage.getItem("tempPhone");
      const storedPwd = await AsyncStorage.getItem("tempPwd");

      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);
      if (storedPwd) setPwd(storedPwd);
      setChecked(true); 
    }
  };
  fillTempData();
}, []);





  const handleSignIn = async () => {
  try {
    if (checked) {
      await AsyncStorage.setItem("rememberMe", "true");
      // Save inputs
      if (loginMethod === "Email") {
        await AsyncStorage.setItem("tempEmail", email);
      } else {
        await AsyncStorage.setItem("tempPhone", phone);
      }
      await AsyncStorage.setItem("tempPwd", pwd);
    } else {
      // Clear saved credentials if "Remember Me" is unchecked
      await AsyncStorage.removeItem("rememberMe");
      await AsyncStorage.removeItem("tempEmail");
      await AsyncStorage.removeItem("tempPhone");
      await AsyncStorage.removeItem("tempPwd");
    }

    console.log("Login data saved:", { email, phone, pwd });
    Alert.alert("Success", "Login data saved successfully!");

    
    navigation.navigate("Bottom") 

  } catch (error) {
    console.log("Error during login: ", error);
    Alert.alert("Login Error", error.message || "Something went wrong.");
  }
};

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(false);
  const [loginMethod, setLoginMethod] = useState("Email"); //To change if it email or mobile
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <StatusBar style="dark" />
      <View>
        <Text style={styles.text1}>Log in your account</Text>
        <Text style={styles.text2}>
          step back into your academic journey wih ease
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.height * 0.03,
        }}
      >
        {["Email", "Mobile"].map((method) => (
          <ToggleBtn
            key={method}
            title={method}
            onPress={() => setLoginMethod(method)}
            BtnStyle={{
              backgroundColor:
                loginMethod === method ? COLORS.primary : COLORS.gray,
              marginLeft: method === "Mobile" ? SIZES.width * 0.02 : 0,
            }}
            textStyle={{
              color: loginMethod === method ? COLORS.white : COLORS.black,
              ...FONTS.body6,
              fontSize: SIZES.height * 0.014,
            }}
          />
        ))}
      </View>

      <View style={{ marginTop: SIZES.height * 0.02 }}>
        {loginMethod === "Email" ? (
          <FormInput
            placeholder={"Email Address"}
            image1={icon.mail}
            keyboard={"email-address"}
            value={email}
            onChangeText={setEmail}
          />
        ) : (
          <FormInput
            placeholder={"Mobile Number"}
            image1={icon.phone} // assuming you have a phone icon
            keyboard={"phone-pad"}
            value={phone}
            onChangeText={setPhone}
          />
        )}

        <FormInput
          placeholder={"password"}
          image1={icon.padlock}
          image2={icon.eye}
          image3={icon.eyeclose}
          formStyle={{ marginTop: SIZES.height * 0.025 }}
          keyboard={"Password"}
          value={pwd}
          onChangeText={setPwd}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.height * 0.009,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <MaterialCommunityIcons
              name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
              size={SIZES.height * 0.03}
              color={COLORS.primary}
            />
          </TouchableOpacity>

          <Text
            style={{
              alignSelf: "center",
              width: SIZES.width * 0.4,
              marginLeft: SIZES.width * 0.01,
              ...FONTS.body,
              fontSize: SIZES.height * 0.0136,
              color: COLORS.black,
            }}
          >
            Remember me
          </Text>
        </View>
        <Text
          style={{
            width: SIZES.width * 0.4,
            ...FONTS.h5,
            fontSize: SIZES.height * 0.0134,
            color: COLORS.primary,
          }}
        >
          Forgot password?
        </Text>
      </View>
      <FormButton
        BtnStyle={{ width: SIZES, marginTop: SIZES.height * 0.05 }}
        title={"Sign In"}
        onPress={handleSignIn}
        textStyle={{
          width: SIZES.width * 0.24,
          ...FONTS.body2b,
          fontSize: SIZES.height * 0.017,
          textAlign: "center",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: SIZES.height * 0.06,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: SIZES.width * 0.4,
              height: SIZES.height * 0.0015,
              backgroundColor: COLORS.gray4,
              marginRight: SIZES.width * 0.05,
            }}
          ></View>
          <Text
            style={{
              width: SIZES.width * 0.0446,
              ...FONTS.body,
              fontSize: SIZES.height * 0.014,
            }}
          >
            or
          </Text>
        </View>
        <View
          style={{
            width: SIZES.width * 0.4,
            height: SIZES.height * 0.0015,
            backgroundColor: COLORS.gray4,
            marginLeft: SIZES.width * 0.05,
          }}
        ></View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.height * 0.05,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            ...FONTS.body,
            fontSize: SIZES.height * 0.014,
          }}
        >
          Don't have an account?{"  "}
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              color: COLORS.orange,
              ...FONTS.body,
              fontSize: SIZES.height * 0.014,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.height * 0.1,
    paddingHorizontal: SIZES.height * 0.012,
  },
  text1: {
    ...FONTS.h2,
  },
  text2: {
    ...FONTS.body,
    fontSize: SIZES.height * 0.012,
    marginTop: SIZES.height * 0.001,
  },
});
