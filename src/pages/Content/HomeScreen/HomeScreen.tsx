import {
  AppointmentModal,
  Background,
  Box,
  Button,
  ConfirmationModal,
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
      <Box height={15} alignItems="center" justifyContent="center">
        <Text
          text="Minhas Consultas"
          textColor={theme.colors.black}
          textFamily={theme.fonts.bold}
        />
      </Box>
      <S.List
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <Box
            width={80}
            borderRadius={5}
            overflow="hidden"
            backgroundColor={theme.colors.white}
            shadowBox
            alignSelf="center"
            marginBottom={2}
          >
            <S.TouchableContainer onPress={() => setDetailsVisible(true)}>
              <Box alignSelf="center" alignItems="center" pdVertical={2}>
                <Text text="Cirurgia" textColor={theme.colors.primary} />
                <Text text="Setembro" textColor={theme.colors.primary} />
                <Text
                  text="19/09/2022 - 12:00h"
                  textColor={theme.colors.primary}
                />
                <Text text="Prédio H11" textColor={theme.colors.primary} />
              </Box>
            </S.TouchableContainer>
          </Box>
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
        <Box>
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
