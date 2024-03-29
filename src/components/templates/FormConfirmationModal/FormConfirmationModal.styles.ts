import styled from 'styled-components/native';
import theme from '@mobile/theme';
import Window from '@mobile/services/dimensions';
import { BlurView } from '@react-native-community/blur';

export const Blur = styled(BlurView).attrs({
  blurAmount: 1,
  overlayColor: 'rgba(26, 26, 26, 0.6)',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${Window.widthScale(0.06)}px;
`;

export const Container = styled.View`
  background-color: ${theme.colors.background};
  border-radius: ${Window.widthScale(0.01)}px;
  padding: ${Window.widthScale(0.05)}px;
`;

export const TopContainer = styled.View`
  width: 100%;
  background-color: ${theme.colors.cardBackgroud};
`;
