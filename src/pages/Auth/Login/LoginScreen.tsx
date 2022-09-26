import {
  Box,
  Button,
  DefaultInput,
  GradientBackground,
  HyperLink,
  Text,
} from '@mobile/components';
import Toaster from '@mobile/services/toaster';
import { validateEmail } from '@mobile/services/validators';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import * as S from './LoginScreen.styles';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    if (error) {
      Toaster.error(
        'Erro!',
        'Verifique os campos em vermelho e tente novamente!'
      );
      return;
    }
    setLoading(!loading);
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
          height={70}
          borderRadius={10}
          marginBottom={-5}
          alignItems="center"
        >
          <Box width={75} marginTop={4}>
            <Text
              textAlign="center"
              textSize={theme.fontSizes.big}
              textColor={theme.colors.black}
              text="Seja bem-vindo ao sistema de agendamento de clínicas odontológicas da PUC-Campinas!"
            />
            <Text
              marginTop={1}
              textAlign="center"
              textColor={theme.colors.black}
              text=" Para entrar informe seu email e senha nos campos abaixo!"
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
            <HyperLink title="Esqueci minha senha!" />
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
