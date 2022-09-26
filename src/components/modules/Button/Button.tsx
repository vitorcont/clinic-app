import theme from '@mobile/theme';
import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Animated, TouchableOpacity } from 'react-native';

import * as S from './Button.styles';
import { Box, Text } from '@mobile/components';
import Window from '@mobile/services/dimensions';

interface IButtonProps {
  width?: number;
  loading?: boolean;
  onPress?: () => void;
  label: string;
  animated?: boolean;
  minWidth?: number;
  backgroundColor?: string;
}

const Button = ({
  loading,
  onPress,
  label,
  animated = true,
  minWidth = 20,
  backgroundColor,
  width = 0.6,
}: IButtonProps) => {
  const calculatedWidth = Window.widthScale(width);
  const value = useRef(new Animated.Value(calculatedWidth)).current;

  useEffect(() => {
    const buttonWidth = () => {
      Animated.timing(value, {
        toValue: loading ? Window.widthScale(0.2) : calculatedWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    buttonWidth();
  }, [loading]);

  return (
    <S.ButtonContainer
      borderRadius={loading ? 0.6 : 0.1}
      style={{ width: animated ? value : '100%' }}
      backgroundColor={backgroundColor}
    >
      <S.TouchableButton onPress={onPress} activeOpacity={0.7}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.white} />
        ) : (
          <Text text={label} />
        )}
      </S.TouchableButton>
    </S.ButtonContainer>
  );
};

export default Button;
