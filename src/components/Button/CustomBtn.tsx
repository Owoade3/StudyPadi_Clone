import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomBtn = ({ title, BtnStyle,textStyle, onPress }) => {
  return (
    <View >
      <TouchableOpacity  onPress={onPress} style={[styles.container, BtnStyle]}>
      <Text
        style={[{
           width: SIZES.width * 0.7,
            ...FONTS.h4, textAlign: "center",
            color:COLORS.black,
            
          },textStyle]}
      >
        {title}
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.width * 0.005,
    width: SIZES.width * 0.9,
    borderWidth: SIZES.height * 0.001,
    height: SIZES.height * 0.07,
    borderRadius: SIZES.height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:SIZES.height*0.04
  },
});
