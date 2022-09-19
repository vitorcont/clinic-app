import theme from '@mobile/theme';
import React from 'react';
import { TextProps } from 'react-native';

import * as S from './Text.styles';

interface IText extends TextProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  text: string;
  textColor?: string;
  textSize?: number;
  textAlign?: string;
  textFamily?: string;
  padding?: number;
  borderColor?: string;
}

const Text = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  text,
  textColor,
  textSize,
  textAlign,
  textFamily,
  style,
  padding,
}: IText) => {
  return (
    <S.Text
      textAlign={textAlign}
      textColor={textColor ?? theme.colors.white}
      textSize={textSize ?? theme.fontSizes.regular}
      style={style}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      padding={padding}
    >
      {text}
    </S.Text>
  );
};

export default Text;
