import {
  Background,
  Box,
  Button,
  FormInputs,
  Question,
  Text,
} from '@mobile/components';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import * as S from './Form.style';

const Confirmation = () => {
  const [fowarded, setFowarded] = useState(false);

  return (
    <Background alignItems="center">
      <ScrollView>
        <Box height={15} alignItems="center" justifyContent="center">
          <Text
            text="Detalhes Consulta"
            textColor={theme.colors.black}
            textFamily={theme.fonts.bold}
          />
        </Box>
        <Box
          backgroundColor={theme.colors.inputBackgroud}
          height={60}
          borderRadius={10}
        ></Box>
        <Box
          marginTop={4}
          width={90}
          alignItems="center"
          pdBottom={8}
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            label="Editar"
            backgroundColor={theme.colors.cancel}
            width={30}
            onPress={navigationService.back}
          />
          <Button
            label="Solicitar"
            width={30}
            onPress={() =>
              navigationService.reset({
                index: 0,
                routes: [{ name: 'Content' }],
              })
            }
          />
        </Box>
      </ScrollView>
    </Background>
  );
};

export default Confirmation;
