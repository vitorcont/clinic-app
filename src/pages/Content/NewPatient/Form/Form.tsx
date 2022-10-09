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

const Form = () => {
  const [fowarded, setFowarded] = useState(false);

  return (
    <Background alignItems="center">
      <ScrollView>
        <Box height={15} alignItems="center" justifyContent="center">
          <Text
            text="Solicitar Consulta"
            textColor={theme.colors.black}
            textFamily={theme.fonts.bold}
          />
        </Box>
        <Box height={25}>
          <FormInputs
            form={[
              [
                {
                  placeholder: 'Nome do Aluno',
                },
              ],
              [
                {
                  placeholder: 'Prof. Responsável',
                },
              ],
              [
                {
                  placeholder: 'Disciplina',
                },
              ],
            ]}
          />
        </Box>
        <Question
          title="Paciente encaminhado?"
          confirmText="Sim"
          dismissText="Não"
          onConfirm={() => setFowarded(true)}
          onDismiss={() => setFowarded(false)}
        />
        {fowarded && (
          <>
            <Box height={20} marginTop={4}>
              <FormInputs
                form={[
                  [
                    {
                      placeholder: 'Nome do Paciente',
                    },
                  ],
                  [
                    {
                      placeholder: 'CPF do Paciente',
                    },
                  ],
                ]}
              />
            </Box>
            <Question
              title="Paciente já foi avisado?"
              confirmText="Sim"
              dismissText="Não"
            />
          </>
        )}
        <Box marginTop={4} alignItems="center" pdBottom={8}>
          <Button
            label="Solicitar"
            width={75}
            onPress={() => navigationService.navigate('Confirmation')}
          />
        </Box>
      </ScrollView>
    </Background>
  );
};

export default Form;
