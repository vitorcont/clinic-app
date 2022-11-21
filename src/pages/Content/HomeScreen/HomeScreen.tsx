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
import React, { useState } from 'react';
import * as S from './HomeScreen.style';

const HomeScreen = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [exitVisible, setExitVisible] = useState(false);

  const onConfirmAppointment = () => {
    setDetailsVisible(false);
  };

  const onCancelDetails = () => {
    setDetailsVisible(false);
    setConfirmationVisible(true);
  };

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
      <S.List
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <AppointmentCard
            onPress={() => setDetailsVisible(true)}
            teacher="Teste"
            title="Cirurgia"
            date="30/10/2022"
          />
        )}
      />
      <Box position="absolute" height={10} alignItems="center" bottom={3}>
        <Button
          label="Nova Consulta"
          width={75}
          onPress={() => navigationService.navigate('NewPatient')}
        />
      </Box>
      <ConfirmationModal
        onConfirm={() => {
          setConfirmationVisible(false);
          setSuccessVisible(true);
        }}
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
      <AppointmentModal
        onConfirm={onConfirmAppointment}
        onDismiss={onCancelDetails}
        setVisible={setDetailsVisible}
        visible={detailsVisible}
        confirmLabel="Confirmar"
        dismissLabel="Cancelar"
      />
      <SuccessModal
        setVisible={setSuccessVisible}
        visible={successVisible}
        title="Consulta cancelada com sucesso!"
      />
      <ConfirmationModal
        onConfirm={() => {
          setExitVisible(false);
          navigationService.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
          });
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
