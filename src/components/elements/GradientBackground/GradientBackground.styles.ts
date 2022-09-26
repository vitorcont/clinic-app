import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const GradientContainer = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;
