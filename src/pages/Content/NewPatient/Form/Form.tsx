import {
  Background,
  Box,
  Button,
  Dropdown,
  FormConfirmationModal,
  FormInputs,
  Header,
  Question,
  Row,
  SuccessModal,
  Text,
} from '@mobile/components';
import { Ionicons } from '@expo/vector-icons';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useEffect, useReducer, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { getUserByDocument } from '@mobile/mock/utils';
import { AppointmentStatus } from '@mobile/enum/Appointment';
import { useDispatch } from 'react-redux';
import {
  getAppointments,
  requestAppointment,
} from '@mobile/store/Appointment/action';

const Form = () => {
  const [fowarded, setFowarded] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [appointmentSelected, setAppointmentSelected] =
    useState<models.Appointment | null>(null);
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
    { label: 'Ortodôntico', value: 'ortodontico' },
    { label: 'Prótese', value: 'protese' },
    { label: 'Limpeza', value: 'limpeza' },
  ];

  const {
    user: { me },
  } = useReduxState();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    const patient = await getUserByDocument(form.pacientDocument);

    const data: models.Appointment = {
      id: 0,
      status: AppointmentStatus.PENDING,
      date: new Date().toString(),
      time: '08:00',
      duration: 79,
      type: dropdownItems.find((items) => items.value === discipline)!.label,
      student: {
        id: me!.id,
        name: me!.name,
        ra: 12345678,
        period: 3,
        phone: me!.cellphone,
        email: 'fitzpatricksuarez@assistix.com',
        password: 12345678,
        type: 'Student',
      },
      location: 'Consultório 02 - H12',
      professor: {
        id: 1,
        name: form.teacher,
        rp: 12345678,
        phone: '(19) 99999-9999',
        email: 'cummingssuarez@assistix.com',
        password: 12345678,
        type: 'Professor',
      },
      phone: '(19) 99999-9999',
      patient: {
        cpf: '11111111111',
        id: patient?.id ?? 0,
        name: form.pacientName,
        phone: '(19) 99999-9999',
        email: 'cummingssuarez@assistix.com',
        password: 12345678,
        type: 'Patient',
      },
      name: 'NOMESLA',
      notification: {
        date: 'Tue Oct 18 2022 03:18:19 GMT-0300 (Horário Padrão de Brasília) ',
        text: 'texto',
        unread: false,
      },
    };

    setAppointmentSelected(data);
    setConfirmationVisible(true);
  };

  const onConfirm = () => {
    dispatch(
      requestAppointment(appointmentSelected!, () => {
        setConfirmationVisible(false);
        setSuccessModal(true);
        dispatch(getAppointments());
      })
    );
  };

  useEffect(() => {
    if (!successModal && !!appointmentSelected) {
      navigationService.back();
    }
  }, [successModal]);

  return (
    <Background alignItems="center">
      <Header title="Solicitar Consulta" goBack />
      <ScrollView>
        <Box height={18}>
          <FormInputs
            form={[
              [
                {
                  placeholder: 'Nome do Aluno',
                  value: form.student,
                  onChangeText: (value) => setForm({ ...form, student: value }),
                },
              ],
              [
                {
                  placeholder: 'Prof. Responsável',
                  value: form.teacher,
                  onChangeText: (value) => setForm({ ...form, teacher: value }),
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
                      onChangeText: (value) =>
                        setForm({ ...form, pacientName: value }),
                      value: form.pacientName,
                    },
                  ],
                  [
                    {
                      placeholder: 'CPF do Paciente',
                      onChangeText: (value) =>
                        setForm({ ...form, pacientDocument: value }),
                      value: form.pacientDocument,
                      maxLength: 11,
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
          <Button label="Solicitar" width={75} onPress={onSubmit} />
        </Box>
      </ScrollView>
      {appointmentSelected && (
        <FormConfirmationModal
          appointment={appointmentSelected}
          onConfirm={onConfirm}
          onDismiss={() => setConfirmationVisible(false)}
          setVisible={setConfirmationVisible}
          visible={confirmationVisible}
          confirmLabel={'Confirmar'}
          dismissLabel={'Editar'}
        />
      )}
      <SuccessModal
        setVisible={setSuccessModal}
        visible={successModal}
        title="Solicitação realizada com sucesso!"
      />
    </Background>
  );
};

export default Form;
