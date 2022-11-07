import styled from 'styled-components/native';
import Logo from '@mobile/assets/images/img_logo_white.png';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import theme from '@mobile/theme';

export const LogoImage = styled.Image.attrs({
  source: Logo,
})`
  width: 100%;
`;

export const UserIcon = styled(Feather).attrs({
  name: 'user',
  size: 16,
  color: theme.colors.black,
})`
  padding-right: 4%;
`;

export const KeyIcon = styled(FontAwesome5).attrs({
  name: 'key',
  size: 16,
  color: theme.colors.black,
})`
  padding-right: 4%;
`;

export const ScrollContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;
