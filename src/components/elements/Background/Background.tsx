import theme from '@mobile/theme';
import React from 'react';
import Box, { IBoxProps } from '../Box/Box';

const Background = (props: IBoxProps) => (
  <Box
    flex={1}
    width={100}
    height={100}
    backgroundColor={theme.colors.background}
    {...props}
  >
    {props.children}
  </Box>
);

export default Background;
