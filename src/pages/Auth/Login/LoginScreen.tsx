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
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
    navigationService.reset({
      index: 0,
      routes: [{ name: 'Content' }],
    });
    // dispatch(authenticate(form));
  };

  return (
    <GradientBackground>
      <S.ScrollContainer>
        <Box height={100} width={100} flex={1} alignItems="center">
          <Box width={50} marginBottom={10} marginTop={6}>
            <S.LogoImage resizeMode="contain" />
          </Box>
          <Box width={70} justifyContent="flex-end">
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
          <Box marginTop={3}>
            <HyperLink title="Esqueci minha senha" color={theme.colors.white} />
          </Box>
          <Box bottom={1}>
            <Box alignSelf="center" marginTop={15} pdBottom={4}>
              <Button
                animated
                loading={loading}
                label="Entrar"
                onPress={() => {
                  onSubmit();
                }}
              />
            </Box>

            <Box width={80}>
              <Text
                textAlign="center"
                textColor={theme.colors.white}
                text="Atendimento Clínicas Odontológias PUC-Campinas"
              />
            </Box>
          </Box>
        </Box>
      </S.ScrollContainer>
    </GradientBackground>
  );
};

export default LoginScreen;
