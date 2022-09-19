import { Dimensions, Platform } from 'react-native';

export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;
export const winFont = Dimensions.get('window').fontScale;

const guidelineBaseWidth = 350;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

export const platform = (android: number, ios: number) =>
  Platform.select({ android, ios });

const Window = {
  widthScale: (value: number) => Dimensions.get('window').width * value,

  heightScale: (value: number) => Dimensions.get('window').height * value,

  fontScale: (size: number) => size * (winWidth / guidelineBaseWidth),

  platform: (android: number, ios: number) => Platform.select({ android, ios }),
};

export default Window;
