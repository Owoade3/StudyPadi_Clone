import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormInput = ({
  image1,
  placeholder,
  value,
  onChangeText,
  keyboard,
  image2,
  image3,
  formStyle,
  error,
  onFocus = () => {},
}) => {
  const [uncheck, setCheck] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const handleToggle = () => {
    setCheck(!uncheck);
  };
  const isPasswordField = placeholder === "password";
  return (
    <View>
      <View
        style={[
          styles.inputStyle,
          {
            borderColor: error
              ? COLORS.red
              : isFocus
              ? COLORS.primary
              : COLORS.gray4,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={image1} style={styles.imageStyle} />
          <TextInput
            style={{
              marginLeft: SIZES.width * 0.04,
              width: SIZES.width * 0.65,
              height: SIZES.height * 0.1,
              ...FONTS.body3,
              fontSize: SIZES.height * 0.013,
            }}
            value={value}
            onChangeText={(item) => onChangeText(item)}
            keyboardType={keyboard}
            placeholderTextColor={COLORS.black}
            placeholder={placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={isPasswordField && !uncheck}
            onFocus={() => {
              onFocus();
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
          />
        </View>
        {isPasswordField && (
          <TouchableOpacity activeOpacity={0.5} onPress={() => handleToggle()}>
            <Image
              source={uncheck ? image2 : image3}
              style={{
                width: SIZES.width * 0.07,
                height: SIZES.height * 0.03,
                marginRight: SIZES.width * 0.035,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body6,
            fontSize: SIZES.height * 0.012,
            marginTop: 10,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    height: SIZES.height * 0.062,
    borderRadius: SIZES.height * 0.008,
    backgroundColor: COLORS.gray,
    width: SIZES.width * 0.95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.height * 0.015,
  },
  imageStyle: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.026,
    marginLeft: SIZES.width * 0.04,
    tintColor: COLORS.black,
  },
});
