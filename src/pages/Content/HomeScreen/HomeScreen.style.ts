import Window from '@mobile/services/dimensions';
import styled from 'styled-components/native';
import Logo from '@mobile/assets/images/img_logo_blue.png';

export const LogoImage = styled.Image.attrs({
  source: Logo,
})`
  width: 100%;
`;

export const TouchableContainer = styled.TouchableOpacity`
  width: 100%;
`;
