import { Dimensions } from 'react-native';
// import themes from '../../assets/themes'
const { width, height } = Dimensions.get('window');

const screenWidth = Math.round(width);
const screenHeight = Math.round(height);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const COLORS = {
    white: '#ffffff',
    offwhite: '#F3F3F3',
    black: "#000000",
    primary: "#272662",
    secondary: "",
    green: "#2BC652",
    chocolate: '#5d5c6c',
    chocolateBackground: '#CECFCD',
};