import {
  Background,
  Box,
  Button,
  Dropdown,
  FormInputs,
  Question,
  Row,
  Text,
} from '@mobile/components';
import { Ionicons } from '@expo/vector-icons';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

const Form = () => {
  const [fowarded, setFowarded] = useState(false);
  const [form, setForm] = useState({
    student: '',
    teacher: '',
    discipline: '',
    pacientName: '',
    pacientDocument: '',
    fowarded: false,
    warned: false,
  });
  const [discipline, setDiscipline] = useState(null);
  const dropdownItems = [
    { label: 'Cirurgia', value: 'cirurgia' },
    { label: 'Implantes', value: 'implantes' },
    { label: 'Cuidados Gerais', value: 'cuidados' },
  ];

  return (
    <Background alignItems="center">
      <ScrollView>
        <Row
          width={100}
          height={15}
          alignItems="center"
          justifyContent="center"
        >
          <Box position="absolute" left={2}>
            <TouchableOpacity onPress={navigationService.back}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </Box>
          <Box>
            <Text
              text="Solicitar Consulta"
              textColor={theme.colors.black}
              textFamily={theme.fonts.bold}
            />
          </Box>
        </Row>
        <Box height={18}>
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
            ]}
          />
        </Box>
        <Box alignSelf="center" zIndex={100} pdBottom={5}>
          <Dropdown
            value={discipline}
            setValue={setDiscipline}
            items={dropdownItems}
            placeholder="Disciplina"
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
