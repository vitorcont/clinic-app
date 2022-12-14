import theme from '@mobile/theme';
import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './Input.styles';

export interface InputProps extends TextInputProps {
  StartAdornment?: React.ReactElement;
  EndAdornment?: React.ReactElement;
  fontSize?: number;
  ref?: React.Ref<TextInput>;
  height?: number;
  maxLength?: number;
  mask?: (value: string) => string;
}

const Input = React.forwardRef<TextInput, InputProps>(
  (props: InputProps, ref) => {
    return (
      <S.Container>
        {!!props.StartAdornment && props.StartAdornment}
        <S.Input
          ref={ref}
          height={props.height}
          fontSize={props.fontSize}
          maxLength={props.maxLength}
          {...props}
          onChangeText={(value) => {
            if (props.onChangeText) {
              if (!!props.mask) {
                const maskedValue = props.mask(value);
                props.onChangeText(maskedValue);
              } else {
                props.onChangeText(value);
              }
            }
          }}
        />
        {!!props.EndAdornment && props.EndAdornment}
      </S.Container>
    );
  }
);

export default Input;
