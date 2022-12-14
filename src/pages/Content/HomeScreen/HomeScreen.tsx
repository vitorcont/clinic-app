import {
  AppointmentCard,
  AppointmentModal,
  Background,
  Box,
  Button,
  ConfirmationModal,
  DefaultInput,
  Header,
  SuccessModal,
  Text,
} from '@mobile/components';
import { MaterialIcons } from '@expo/vector-icons';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useEffect, useState } from 'react';
import * as S from './HomeScreen.style';
import { useReduxState } from '@mobile/hooks/useReduxState';
import Window from '@mobile/services/dimensions';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  getAppointments,
  updateAppointment,
} from '@mobile/store/Appointment/action';
import { AppointmentStatus } from '@mobile/enum/Appointment';
import { logout } from '@mobile/store/Auth/action';

const HomeScreen = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [successConfirmVisible, setSuccessConfirmVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [exitVisible, setExitVisible] = useState(false);
  const [appointmentSelected, setAppointmentSelected] =
    useState<models.Appointment | null>(null);
  const dispatch = useDispatch();

  const {
    appointments: { appointmentList },
    user: { student },
  } = useReduxState();

  const onConfirmAppointment = () => {
    dispatch(
      updateAppointment(
        {
          ...appointmentSelected!,
          status: AppointmentStatus.CONFIRMED,
        },
        () => {
          dispatch(getAppointments());
          setDetailsVisible(false);
          setSuccessConfirmVisible(true);
        }
      )
    );
  };

  const onCancelAppointment = () => {
    dispatch(
      updateAppointment(
        {
          ...appointmentSelected!,
          status: AppointmentStatus.CANCELED,
        },
        () => {
          dispatch(getAppointments());
          setConfirmationVisible(false);
          setSuccessVisible(true);
        }
      )
    );
  };

  const onCancelDetails = () => {
    setDetailsVisible(false);
    setConfirmationVisible(true);
  };

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <Background alignItems="center">
      <Header
        title="Minhas Consultas"
        leftIcon={
          <MaterialIcons
            name="exit-to-app"
            size={34}
            color={theme.colors.primaryLight}
          />
        }
        onPressLeft={() => {
          setExitVisible(true);
        }}
      />
      <FlatList
        data={appointmentList}
        contentContainerStyle={{
          paddingBottom: Window.heightScale(0.15),
        }}
        style={{
          width: '100%',
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AppointmentCard
            onPress={() => {
              setAppointmentSelected(item);
              setDetailsVisible(true);
            }}
            appointment={item}
          />
        )}
      />
      {student && (
        <Box position="absolute" height={10} alignItems="center" bottom={3}>
          <Button
            label="Nova Consulta"
            width={75}
            onPress={() => navigationService.navigate('NewPatient')}
          />
        </Box>
      )}
      <ConfirmationModal
        onConfirm={onCancelAppointment}
        onDismiss={() => setConfirmationVisible(false)}
        setVisible={setConfirmationVisible}
        visible={confirmationVisible}
        confirmLabel="Sim"
        dismissLabel="Não"
      >
        <Box pdTop={2} pdHorizontal={4}>
          <Text
            textAlign="center"
            text="Tem certeza que seja cancelar sua consulta?"
            textSize={theme.fontSizes.big}
          />
        </Box>
        <Box pdHorizontal={2} pdTop={2}>
          <DefaultInput
            height={20}
            placeholder={'Justifique seu cancelamento'}
            multiline
          />
        </Box>
      </ConfirmationModal>
      {appointmentSelected && (
        <AppointmentModal
          appointment={appointmentSelected}
          onConfirm={onConfirmAppointment}
          onDismiss={onCancelDetails}
          setVisible={setDetailsVisible}
          visible={detailsVisible}
          confirmLabel={
            appointmentSelected.status === AppointmentStatus.PENDING
              ? 'Confirmar'
              : undefined
          }
          dismissLabel={
            appointmentSelected.status !== AppointmentStatus.CANCELED
              ? 'Cancelar'
              : undefined
          }
        />
      )}
      <SuccessModal
        setVisible={setSuccessConfirmVisible}
        visible={successConfirmVisible}
        title="Consulta confirmada com sucesso!"
      />
      <SuccessModal
        setVisible={setSuccessVisible}
        visible={successVisible}
        title="Consulta cancelada com sucesso!"
      />
      <ConfirmationModal
        onConfirm={() => {
          setExitVisible(false);
          dispatch(logout());
        }}
        onDismiss={() => setExitVisible(false)}
        setVisible={setExitVisible}
        visible={exitVisible}
        confirmLabel="Sim"
        dismissLabel="Cancelar"
      >
        <Box pdTop={2} pdHorizontal={4}>
          <Text
            textAlign="center"
            text="Tem certeza que deseja sair de sua conta?"
            textSize={theme.fontSizes.big}
          />
        </Box>
      </ConfirmationModal>
    </Background>
  );
};

export default HomeScreen;
