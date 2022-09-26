import theme from '@mobile/theme';
import React from 'react';
import Box from '../Box/Box';
import * as S from './GradientBackground.styles';

interface IGradientProps {
  children: React.ReactNode;
}

const GradientBackground = (props: IGradientProps) => (
  <Box width={100} height={100} flex={1}>
    <>
      <S.GradientContainer
        colors={[theme.colors.gradient, theme.colors.primary]}
      />
      <S.ContentContainer>{props.children}</S.ContentContainer>
    </>
  </Box>
);

export default GradientBackground;
