import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import theme from '@mobile/theme';
import { Box, Text } from '@mobile/components';

export interface IHyperLink extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  color?: string;
  textSize?: number;
  textDecoration?: string;
}

const HyperLink = ({
  title,
  textSize,
  disabled,
  onPress,
  color,
  textDecoration,
}: IHyperLink) => {
  return (
    <Box>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text
          textSize={textSize}
          text={title}
          textColor={color ?? theme.colors.black}
          textDecoration={textDecoration || 'underline'}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default HyperLink;
