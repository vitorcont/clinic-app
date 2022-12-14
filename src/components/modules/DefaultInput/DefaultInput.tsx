import { InputProps } from '@mobile/components/elements/Input/Input';
import React, { useState } from 'react';
import { Box, Input, Text } from '@mobile/components';

import * as S from './DefaultInput.styles';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import theme from '@mobile/theme';

export interface DefaultInputProps extends InputProps {
  password?: boolean;
  type?: number;
  validator?: (value: string) => boolean;
  error?: boolean;
  errorMessage?: string;
  setError?: (value: boolean) => void;
}

const DefaultInput = React.forwardRef<TextInput, DefaultInputProps>(
  (props: DefaultInputProps, ref) => {
    const [securePassword, setSecurePassword] = useState(true);
    const [error, setError] = useState(false);

    return (
      <>
        <S.Container>
          <S.InputWrapper error={props.error ?? error}>
            <Input
              placeholderTextColor={
                props.placeholderTextColor ?? theme.colors.placeholder
              }
              height={props.height}
              ref={ref}
              onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                if (props.onFocus) {
                  props.onFocus(e);
                }
              }}
              onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                if (props.onBlur) {
                  props.onBlur(e);
                }
                if (props.validator) {
                  setError(props.validator(props.value ?? ''));
                }
                if (props.setError && props.validator) {
                  props.setError(props.validator(props.value ?? ''));
                }
              }}
              EndAdornment={
                props.password ? (
                  <S.SecureButton
                    onPress={() => setSecurePassword(!securePassword)}
                  >
                    {securePassword ? <S.OpenEyeIcon /> : <S.CloseEyeIcon />}
                  </S.SecureButton>
                ) : (
                  props.EndAdornment
                )
              }
              secureTextEntry={
                props.password ? securePassword : props.secureTextEntry
              }
              {...props}
            />
          </S.InputWrapper>
        </S.Container>
        {error && !!props.errorMessage && (
          <Box position="absolute" bottom={-2.7} left={1.5} width={80}>
            <Text
              text={props.errorMessage}
              textColor={theme.colors.error}
              textFamily={theme.fonts.semiBold}
              textSize={theme.fontSizes.small}
            />
          </Box>
        )}
      </>
    );
  }
);

export default DefaultInput;
