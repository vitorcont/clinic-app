import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';
import theme from '@mobile/theme';
import Window from '@mobile/services/dimensions';

export const Picker = styled(DropDownPicker)`
  width: 100%;
  z-index: 100;
  border-radius: ${Window.widthScale(0.08)}px;
  padding-vertical: ${Window.widthScale(0.025)}px;
  background-color: ${theme.colors.inputBackgroud};
  border-color: ${({ error }: IProps) =>
    error ? theme.colors.error : theme.colors.inputBackgroud};
  border-width: 2px;
`;
