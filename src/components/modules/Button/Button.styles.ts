import Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export const ButtonContainer = styled(Animated.View)`
  height: ${({ height }: IProps) => Window.heightScale(height ?? 0.06)}px;
  border-radius: ${({ borderRadius }: IProps) =>
    Window.widthScale(borderRadius ?? 0.2)}px;
  justify-content: center;
  elevation: 5;
  overflow: hidden;
`;

export const TouchableButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }: IProps) =>
    backgroundColor ?? theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
`;
