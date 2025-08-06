import { COLORS, SIZES } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const FormButton = ({ title, BtnStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.page, BtnStyle]}
      onPress={onPress}
      activeOpacity={0.3}
    >
      <Text style={[{ color: COLORS.white }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.065,
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width * 0.94,
    borderRadius: SIZES.height * 0.008,
  },
});
