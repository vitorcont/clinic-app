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
}

const Input = React.forwardRef<TextInput>((props: InputProps, ref) => {
  return (
    <S.Container>
      {!!props.StartAdornment && props.StartAdornment}
      <S.Input
        ref={ref}
        height={props.height}
        fontSize={props.fontSize}
        maxLength={props.maxLength}
        {...props}
      />
      {!!props.EndAdornment && props.EndAdornment}
    </S.Container>
  );
});

export default Input;
