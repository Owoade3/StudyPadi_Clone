import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import image from "../../constants/image";
import { useNavigation } from "expo-router";
const SplashScreen = () => {
  const navigation = useNavigation();
  // Animation values
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoTranslateX = useRef(new Animated.Value(0)).current;
  const textTranslateX = useRef(new Animated.Value(50)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Step 1: Logo jumps in and scales down while sliding left
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateX, {
          toValue: -SIZES.width * 0.12, // Slide left
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Step 2: After logo settles, show the text sliding left with fade
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(textTranslateX, {
          toValue: -SIZES.width * 0.14, // Slide left
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
   }, 1100);
  }, []);

  const logoStyle = {
    transform: [{ scale: logoScale }, { translateX: logoTranslateX }],
  };

  const textStyle = {
    opacity: textOpacity,
    transform: [{ translateX: textTranslateX }],
  };
useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LandingScreen");
    }, 3500); // Navigate after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);
  return (
    <View style={styles.PageContainer}>
      <View style={styles.row}>
        <Animated.Image
          source={image.logo}
          style={[
            {
              width: SIZES.width * 0.3,
              height: SIZES.height * 0.13,
              tintColor: COLORS.white,
            },
            logoStyle,
          ]}
        />

        <Animated.Text style={[styles.Text1, textStyle]}>
          tudyPadi
        </Animated.Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15, // Final margin-left
  },
  Text1: {
    ...FONTS.h1,
    color: COLORS.white,
    marginLeft: 5,
  },
});
