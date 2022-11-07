import {
  AppointmentCard,
  AppointmentModal,
  Background,
  Box,
  Button,
  ConfirmationModal,
  Header,
  Text,
} from '@mobile/components';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import * as S from './HomeScreen.style';

const HomeScreen = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const onConfirmAppointment = () => {
    setDetailsVisible(false);
  };

  const onCancelDetails = () => {
    setDetailsVisible(false);
    setConfirmationVisible(true);
  };

  return (
    <Background alignItems="center">
      <Header title="Minhas Consultas" />
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
        onConfirm={() => setConfirmationVisible(false)}
        onDismiss={() => setConfirmationVisible(false)}
        setVisible={setConfirmationVisible}
        visible={confirmationVisible}
        confirmLabel="Sim"
        dismissLabel="Não"
      >
        <Box pdTop={2} pdHorizontal={4}>
          <Text
            textAlign="center"
            text="Você tem certeza que seja cancelar sua consulta?"
            textSize={theme.fontSizes.big}
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
      ></AppointmentModal>
    </Background>
  );
};

export default HomeScreen;
