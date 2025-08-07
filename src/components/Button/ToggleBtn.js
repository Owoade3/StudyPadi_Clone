import { COLORS, SIZES } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ToggleBtn = ({ title, BtnStyle, textStyle, onPress }) => {
  //   const [button, setButton] = React.useState(title1);
  //  const toggleButton = () => {
  //     const newTitle = button === title1 ? title2 : title1;
  //     setButton(newTitle);
  //     if (onPress) onPress(newTitle); // callback with the current value if needed
  //   };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.3}>
      <View style={[styles.page, BtnStyle]}>
        <Text style={[{ color: COLORS.white }, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToggleBtn;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.065,
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width * 0.46,
    borderRadius: SIZES.height * 0.009,
  },
});
