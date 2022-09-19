import React from 'react';

import { Text } from '@mobile/components';
import theme from '@mobile/theme';

import * as S from './Button.styles';

interface IButton {
  width?: number;
  height?: number;
  title: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  backgroundColor?: string;
  textSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  padding?: number;
}

const Button = ({
  backgroundColor = theme.colors.black,
  borderColor,
  borderWidth,
  width = 50,
  height = 5,
  title,
  loading,
  disabled,
  onPress,
  textSize = theme.fontSizes.regular,
  borderRadius = 12,
  padding,
}: IButton) => {
  return (
    <S.Container>
      <S.Button
        backgroundColor={backgroundColor}
        borderWidth={borderWidth}
        borderColor={borderColor}
        onPress={onPress}
        width={width}
        height={height}
        disabled={disabled}
        borderRadius={borderRadius}
      >
        <>
          {!loading && (
            <Text
              padding={padding}
              text={title}
              textSize={textSize ?? theme.fontSizes.regular}
              textAlign="center"
            />
          )}
          {loading && <S.Loading animating={loading} />}
        </>
      </S.Button>
    </S.Container>
  );
};

export default Button;
