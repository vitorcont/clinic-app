import {
  Box,
  Button,
  DefaultInput,
  GradientBackground,
  HyperLink,
  Text,
} from '@mobile/components';
import navigationService from '@mobile/services/navigation';
import Toaster from '@mobile/services/toaster';
import { validateEmail } from '@mobile/services/validators';
import { authenticate } from '@mobile/store/Auth/action';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './LoginScreen.styles';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (error) {
      Toaster.error(
        'Erro!',
        'Verifique os campos em vermelho e tente novamente!'
      );
      return;
    }
    setLoading(!loading);
    navigationService.navigate('Content');
    // dispatch(authenticate(form));
  };

  return (
    <GradientBackground>
      <Box
        height={100}
        width={100}
        flex={1}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box width={60}>
          <S.LogoImage resizeMode="contain" />
        </Box>
        <Box
          backgroundColor={theme.colors.white}
          width={85}
          height={65}
          borderRadius={10}
          marginBottom={-5}
          alignItems="center"
        >
          <Box width={70} marginTop={4}>
            <Text
              marginTop={1}
              textSize={theme.fontSizes.big}
              textAlign="center"
              textFamily={theme.fonts.semiBold}
              textColor={theme.colors.primary}
              text="Atendimento Clínicas Odontológias PUC-Campinas"
            />
          </Box>
          <Box width={70} marginTop={5}>
            <DefaultInput
              setError={setError}
              value={form.email}
              onChangeText={(value: string) =>
                setForm({ ...form, email: value })
              }
              placeholder="exemplo@hotmail.com"
              StartAdornment={<S.UserIcon />}
              validator={(email: string) => !validateEmail(email)}
              autoCapitalize="none"
            />
          </Box>
          <Box width={70} marginTop={3}>
            <DefaultInput
              setError={setError}
              value={form.password}
              onChangeText={(value: string) =>
                setForm({ ...form, password: value })
              }
              placeholder="Senha"
              password
              StartAdornment={<S.KeyIcon />}
              validator={(value: string) => value.length < 6}
            />
          </Box>
          <Box marginBottom={2} marginTop={6}>
            <HyperLink title="Esqueci minha senha" />
          </Box>
          <Button
            animated
            loading={loading}
            label="Entrar"
            onPress={() => {
              onSubmit();
            }}
          />
        </Box>
      </Box>
    </GradientBackground>
  );
};

export default LoginScreen;
