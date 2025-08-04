import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
    white: '#ffffff',
    black: "#000",
    primary: "#063A4F",
    primary2: "#40196D",
    sky: "#F1FAF9",
    orange: "#ff7040",
    secondary: "#00caf2",
    green: "#47cc49",
    green2: "#038654",
    gray: '#EFF2F7',
    chocolate: '#5d5c6c',
    chocolateBackground: '#CECFCD',
    grey2: '#f6f5fa',
    grey3: '#efefef',
    gray4: '#B4B5B5',
    red: 'red',
};

export const SIZES = {
    //global sizes
    base: screenHeight * 0.01,
    font: screenHeight * 0.0175,
    radius: 5,
    padding: screenHeight * 0.03,

    // font sizes
    navTitle: screenHeight * 0.04375,
    h1: screenHeight * 0.0375,
    h2: screenHeight * 0.0275,
    h2a: screenHeight * 0.0340,
    h2c: screenHeight * 0.0245,
    h3: screenHeight * 0.0225,
    h3a: screenHeight * 0.0235,
    h4: screenHeight * 0.0175,
    h5: screenHeight * 0.015,
    body1: screenHeight * 0.0355,
    body2: screenHeight * 0.025,
    body3: screenHeight * 0.02,
    body3a: screenHeight * 0.02,
    body3b: screenHeight * 0.022,
    body4: screenHeight * 0.0175,
    body5: screenHeight * 0.015,
    body6: screenHeight * 0.012,
    intro: screenHeight * 0.04,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    navTitle: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.navTitle },
    largeTitleBold: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.h1 * 1.5,
        lineHeight: screenHeight * 0.05,
    },
    h1: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h1,
        lineHeight: screenHeight * 0.05,
    },
    
    h2: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h2,
        lineHeight: screenHeight * 0.0375,
    },
    h3: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h3,
        lineHeight: screenHeight * 0.025,
    },
    h3a: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h3a,
        lineHeight: screenHeight * 0.025,
    },
    h4: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h4,
        lineHeight: screenHeight * 0.025,
    },
    h5: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SIZES.h5,
        lineHeight: screenHeight * 0.025,
    },
    // BODY
    body: {
        fontFamily: 'Montserrat-Medium',
        fontSize: SIZES.body1 * 1.2,
        lineHeight: 39,
    },
    body1: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body1a: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body1 * 0.9,
        lineHeight: 30,
    },
    body2: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
    },
    body2a: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body2 * 0.95,
        lineHeight: 30,
    }, body2b: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body2 * 0.935,
        lineHeight: 30,
    }, body2c: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body2 * 1.3,
        lineHeight: 30,
    },
    body3: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body3 * 1.05,
        lineHeight: 18,
    }, body3a: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body3a,
        lineHeight: 18,
    }, body3b: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body3b,
        lineHeight: 18,
    },
    body4: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body4,
        lineHeight: 18,
    },
    body5: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body5,
        lineHeight: 18,
    },
    body6: {
        fontFamily: 'Montserrat-Regular',
        fontSize: SIZES.body6 * 1.2,
        lineHeight: 18,
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;