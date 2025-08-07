import FormButton from "@/src/components/Button/FormButton";
import ToggleBtn from "@/src/components/Button/ToggleBtn";
import FormInput from "@/src/components/Input/FormInput";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icon from "../../constants/icon";
const SignUp = () => {
  // state Management
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [errors, setError] = useState({});
  //To change if it email or mobile
  const [loginMethod, setLoginMethod] = useState("Email");
  //Password Check a special character, uppercase, lowercase and digit
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Phone Number check for Nigeria phone number
  const nigeriaRegex = /^(\+234|0)[789][01]\d{8}$/;
  const isValidPhone = (phone) => {
    return nigeriaRegex.test(phone);
  };
  // emal check
  const isEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo)\.com$/.test(email);
  };
  // Adding + format to phone number and remove the 0 at the front
  const formatPhoneNumber = (phone) => {
    let trimmed = phone.replace(/\s+/g, "").replace(/[^+\d]/g, ""); // remove spaces and special chars

    if (trimmed.startsWith("0")) {
      // Nigeria
      if (nigeriaRegex.test(trimmed)) return "+234" + trimmed.slice(1);
    }

    return trimmed;
  };

  // handle error messageby keeping them in an object format key=input(e.g name,phone)
  const handlerror = (errorMessage, input) => {
    setError((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const navigation = useNavigation();
  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!firstName.trim().length > 0) {
      handlerror("Please  input your first name ", "firstName");
      valid = false;
    }
    if (!lastName.trim().length > 0) {
      handlerror("Please input your  last name ", "lastName");
      valid = false;
    }
    if (loginMethod === "Email") {
      if (!email) {
        handlerror("Please input email", "email");
        valid = false;
      } else if (!isEmail(email)) {
        handlerror("Invalid email format", "email");
        valid = false;
      }
    } else {
      if (!phone) {
        handlerror("Please input phone number", "phone");
        valid = false;
      } else if (!isValidPhone(phone)) {
        handlerror("Enter a valid Nigeria phone number", "phone");
        valid = false;
      } else if (phone.replace(/\D/g, "").length < 10) {
        handlerror("Phone number must have at least 10 digits", "phone");
        valid = false;
      }
    }

    if (!pwd) {
      handlerror("Please input password", "pwd");
      valid = false;
    } else if (!passwordRegex.test(pwd)) {
      handlerror(
        "Password must be at least 8 characters, include uppercase, lowercase, number and special character.",
        "pwd"
      );
      valid = false;
    }

    if (valid) {
      const formattedPhone = formatPhoneNumber(phone);
      const payload = {
        firstName,
        lastName,
        password: pwd,
        ...(loginMethod === "Email" ? { email } : { phone: formattedPhone }),
      };

      console.log(payload);
      console.log("Valid form. Proceeding with data:", payload);
      navigation.navigate("SignIn");
    }
  };
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.text1}>Create an account</Text>
          <Text style={styles.text2}>
            Step back into your academic journey wih ease
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: SIZES.height * 0.02,
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
          <FormInput
            placeholder={"first name"}
            image1={icon.person}
            keyboard={"default"}
            value={firstName}
            onChangeText={setfirstName}
            error={errors.firstName}
            onFocus={() => {
              handlerror(null, "firstName");
            }}
          />
          <FormInput
            placeholder={"last name"}
            image1={icon.person}
            keyboard={"default"}
            value={lastName}
            onChangeText={setLastName}
            error={errors.lastName}
            onFocus={() => {
              handlerror(null, "lastName");
            }}
          />
          {loginMethod === "Email" ? (
            <FormInput
              placeholder={"Email Address"}
              image1={icon.mail}
              keyboard={"email-address"}
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              onFocus={() => {
                handlerror(null, "email");
              }}
            />
          ) : (
            <FormInput
              placeholder={"Mobile Number"}
              image1={icon.phone} // assuming you have a phone icon
              keyboard={"phone-pad"}
              value={phone}
              onChangeText={setPhone}
              error={errors.phone}
              onFocus={() => {
                handlerror(null, "phone");
              }}
            />
          )}

          <FormInput
            placeholder={"password"}
            image1={icon.padlock}
            image2={icon.eye}
            image3={icon.eyeclose}
            keyboard={"Password"}
            value={pwd}
            onChangeText={setPwd}
            error={errors.pwd}
            onFocus={() => {
              handlerror(null, "pwd");
            }}
          />
        </View>
        <FormButton
          BtnStyle={{ marginTop: SIZES.height * 0.04 }}
          title={"Create Account"}
          onPress={() => validate()}
          textStyle={{
            width: SIZES.width * 0.4,
            ...FONTS.body2b,
            fontSize: SIZES.height * 0.016,
            textAlign: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: SIZES.height * 0.05,
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
            Already have an account?{"  "}
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={{
                color: COLORS.orange,
                ...FONTS.body,
                fontSize: SIZES.height * 0.014,
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,

    paddingHorizontal: SIZES.height * 0.012,
  },
  text1: {
    ...FONTS.h2,
  },
  text2: {
    ...FONTS.body,
    fontSize: SIZES.height * 0.01,
    marginTop: SIZES.height * 0,
  },
});
