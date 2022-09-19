import styled from 'styled-components/native';

import Window from '@mobile/services/dimensions';

interface IProps {
  borderColor?: string;
  borderWidth?: number;
  width?: number;
  height?: number;
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  borderRadius?: number;
}

export const Container = styled.View`
  elevation: 5;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  overflow: hidden;
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width / 100) : Window.widthScale(0.77)}px;
  height: ${({ height }: IProps) =>
    height ? Window.heightScale(height / 100) : Window.heightScale(0.07)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: ${({ borderRadius }: IProps) =>
    Window.widthScale(borderRadius ?? 0)}px;
  flex-direction: row;
  background-color: ${({ backgroundColor }: IProps) => backgroundColor};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
})``;
