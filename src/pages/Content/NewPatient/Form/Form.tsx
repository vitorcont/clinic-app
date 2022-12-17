import {
  Background,
  Box,
  Button,
  CalendarModal,
  DefaultInput,
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
import { Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { getUserByDocument } from '@mobile/mock/utils';
import { AppointmentStatus } from '@mobile/enum/Appointment';
import { useDispatch } from 'react-redux';
import {
  getAppointments,
  requestAppointment,
} from '@mobile/store/Appointment/action';
import { maskCpf, maskDate, maskHour } from '@mobile/services/masks';
import { DateTime } from 'luxon';
import { formatCalendarDate } from '@mobile/services/date';

const Form = () => {
  const [dateVisible, setDateVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [appointmentSelected, setAppointmentSelected] =
    useState<models.Appointment | null>(null);
  const [form, setForm] = useState({
    student: '',
    teacher: '',
    hour: '',
    date: DateTime.now().toFormat('yyyy-MM-dd'),
    discipline: '',
    pacientName: '',
    pacientDocument: '',
    fowarded: false,
    warned: false,
  });
  const [discipline, setDiscipline] = useState(null);
  const [timeSelected, setTimeSelected] = useState(null);

  const disciplines = [
    { label: 'CAE', value: 'CAE' },
    { label: 'CPO', value: 'CPO' },
    { label: 'CIRURGIA 4º ANO', value: 'cir_quarto' },
    { label: 'ENDO', value: 'ENDO' },
    { label: 'PPSC', value: 'PPSC' },
    { label: 'PEDIATRIA', value: 'PEDIATRIA' },
    { label: 'PERIO', value: 'PERIO' },
    { label: 'CO 1', value: 'CO_1' },
    { label: 'CO 2', value: 'CO_2' },
    { label: 'CO 3', value: 'CO_3' },
    { label: 'CO 4', value: 'CO_4' },
    { label: 'CO 5', value: 'CO_5' },
  ];

  const time = [
    { label: '07h10', value: '07h10' },
    { label: '09h55', value: '09h55' },
    { label: '13h15', value: '13h15' },
    { label: '16h00', value: '16h00' },
    { label: 'Outro', value: 'other' },
  ];

  const {
    user: { me },
  } = useReduxState();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    const patient = await getUserByDocument(
      form.pacientDocument.replace(/[^\w\s]/gi, '')
    );
    const time = (timeSelected !== 'other' ? timeSelected : form.hour)?.replace(
      'h',
      ':'
    );
    const date = DateTime.fromFormat(
      `${form.date} ${time}`,
      'yyyy-MM-dd HH:mm'
    );

    const data: models.Appointment = {
      id: 0,
      status: AppointmentStatus.PENDING,
      date: date.toJSDate().toString(),
      time: time!,
      duration: 79,
      type: disciplines.find((items) => items.value === discipline)!.label,
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
        cpf: form.pacientDocument.replace(/[^\w\s]/gi, ''),
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
        <Box alignSelf="center" zIndex={200} pdBottom={3}>
          <Dropdown
            value={discipline}
            setValue={setDiscipline}
            items={disciplines}
            placeholder="Disciplina"
          />
        </Box>
        <Box alignSelf="center" zIndex={100} pdBottom={3}>
          <Dropdown
            value={timeSelected}
            setValue={setTimeSelected}
            items={time}
            placeholder="Horário do Atendimento"
          />
        </Box>
        {timeSelected === 'other' && (
          <Box width={90} pdBottom={3} alignSelf="center">
            <DefaultInput
              keyboardType="phone-pad"
              value={form.hour}
              placeholder="Horário"
              mask={maskHour}
              maxLength={5}
              onChangeText={(value) => setForm({ ...form, hour: value })}
            />
          </Box>
        )}
        <Box width={90} pdBottom={3} height={10} alignSelf="center" zIndex={1}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 100,
            }}
            onPress={() => {
              setDateVisible(true);
            }}
          />
          <DefaultInput
            value={formatCalendarDate(form.date)}
            placeholder="Data do Atendimento (dia/mês/ano)"
            mask={maskDate}
            maxLength={10}
            onChangeText={(value) => setForm({ ...form, date: value })}
            showSoftInputOnFocus={false}
          />
        </Box>
        <Question title="Paciente novo?" confirmText="Sim" dismissText="Não" />
        <Box height={28} marginTop={4}>
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
                  maxLength: 14,
                  mask: maskCpf,
                  keyboardType: 'phone-pad',
                },
              ],
              [
                {
                  placeholder: 'Observações',
                },
              ],
            ]}
          />
        </Box>
        <Box marginTop={4}>
          <Question
            title="Paciente já foi avisado?"
            confirmText="Sim"
            dismissText="Não"
          />
        </Box>
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
      <CalendarModal
        date={form.date}
        setDate={(value) => setForm({ ...form, date: value })}
        visible={dateVisible}
        setVisible={setDateVisible}
      />
    </Background>
  );
};

export default Form;
