import CustomBtn from "@/src/components/Button/CustomBtn";
import images from "@/src/constants/image";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useNavigation } from "expo-router";
const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.statubarView}></View>
      <Text
        style={{
          ...FONTS.body3b,
          textAlign: "center",
          justifyContent: "center",
          marginTop: SIZES.height * 0.04,
          height: SIZES.height * 0.03,
        }}
      >
        {" "}
        English (NG)
      </Text>
      <View style={{ marginTop: SIZES.height * 0.05, alignItems: "center" }}>
        <Image
          source={images.LandImg}
          style={{
            height: SIZES.height * 0.3,
            width: SIZES.width * 0.7,
            borderRadius: 100,
          }}
        />
        <View style={{ marginTop: SIZES.height * 0.135 }}>
          <CustomBtn
           title={"Login into your account"} 
          onPress={()=>navigation.navigate("SignIn")}
          />
          <CustomBtn
            title={"create new account"}
            textStyle={{ color: COLORS.primary2 }}
            BtnStyle={{ borderColor: COLORS.primary2 }}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  statubarView: {
    height: SIZES.height * 0.058,
    backgroundColor: COLORS.white,
  },
});
