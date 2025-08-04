import { COLORS, SIZES } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const FormButton = ({ title, BtnStyle ,textStyle}) => {
  return (
    <View style={[styles.page,BtnStyle]}>
      <Text style={[{color:COLORS.white},textStyle]}>{title}</Text>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width * 0.45,
    borderRadius:SIZES.height*0.008
  },
});
