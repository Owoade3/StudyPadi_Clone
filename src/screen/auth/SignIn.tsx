import FormButton from "@/src/components/Button/FormButton";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const SignIn = () => {
  const navigation = useNavigation;
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
          marginTop:SIZES.height*0.035,
          
        }}
      >
        <FormButton title={"Email"} />
        <FormButton
          title={"Mobile"}
          BtnStyle={{ backgroundColor: COLORS.gray }}
          textStyle={{color:COLORS.black}}
        />
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
    paddingHorizontal: SIZES.height * 0.024,
  },
  text1: {
    ...FONTS.h2,
  },
  text2: {
    ...FONTS.body,
    fontSize: SIZES.height * 0.011,
    marginTop: SIZES.height * 0.001,
  },
});
