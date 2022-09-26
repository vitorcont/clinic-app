import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';

interface IProps {
  error?: boolean;
}

export const Container = styled.View`
  width: 100%;
  border-radius: ${Window.widthScale(0.08)}px;
  overflow: hidden;
`;

export const InputWrapper = styled.View`
  padding-horizontal: ${Window.widthScale(0.03)}px;
  border-radius: ${Window.widthScale(0.08)}px;
  padding-vertical: ${Window.widthScale(0.025)}px;
  width: 100%;
  background-color: ${theme.colors.inputBackgroud};
  border-color: ${({ error }: IProps) =>
    error ? theme.colors.error : theme.colors.inputBackgroud};
  border-width: 2px;
`;

export const OpenEyeIcon = styled(Feather).attrs({
  name: 'eye',
  size: 16,
  color: theme.colors.white,
})``;

export const CloseEyeIcon = styled(Feather).attrs({
  name: 'eye-off',
  size: 16,
  color: theme.colors.white,
})``;

export const SecureButton = styled.TouchableOpacity`
  opacity: 1;
  padding-horixontal: 3%;
`;
