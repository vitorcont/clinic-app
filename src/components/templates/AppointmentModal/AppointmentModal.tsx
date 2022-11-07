import { Box, Text, Row } from '@mobile/components';
import ConfirmationModal, {
  IConfirmationProps,
} from '@mobile/components/modules/ConfirmationModal/ConfirmationModal';
import theme from '@mobile/theme';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import * as S from './AppointmentModal.styles';

interface IAppointmentProps extends IConfirmationProps {
  title?: string;
}

const AppointmentModal: React.FC<IAppointmentProps> = ({
  onConfirm,
  confirmLabel,
  onDismiss,
  dismissLabel,
  setVisible,
  visible,
  children,
  title,
}) => {
  return (
    <ConfirmationModal
      dismissLabel={dismissLabel}
      confirmLabel={confirmLabel}
      onDismiss={onDismiss}
      onConfirm={onConfirm}
      visible={visible}
      setVisible={setVisible}
    >
      <Box overflow="hidden">
        <Box
          position="absolute"
          marginTop={2.5}
          alignSelf="flex-start"
          style={{
            height: '100%',
          }}
          zIndex={100}
        >
          <Box
            justifyContent="center"
            backgroundColor={theme.colors.primary}
            borderRadius={5}
            alignItems="center"
            pdVertical={1.25}
            pdHorizontal={1}
            left={3}
          >
            <Text
              text="SETEMBRO"
              textFamily={theme.fonts.semiBold}
              textColor={theme.colors.white}
            />
            <Text
              text="30"
              textFamily={theme.fonts.semiBold}
              textColor={theme.colors.white}
              textSize={theme.fontSizes.huggest}
            />
          </Box>
        </Box>
        <S.TopContainer>
          <Box pdVertical={2} marginLeft={17}>
            <Text
              text={title ?? 'Cirurgia'}
              textColor={theme.colors.primary}
              textSize={theme.fontSizes.huge}
              textFamily={theme.fonts.semiBold}
            />
          </Box>
        </S.TopContainer>
        <Box>
          <Box marginLeft={17} pdVertical={0.5}>
            <Text text={'12:00'} textColor={theme.colors.black} />
            <Text text={'19/08/2022'} textColor={theme.colors.black} />
          </Box>
          <Box marginLeft={3} pdVertical={2}>
            <Row alignItems="center">
              <Box pdHorizontal={2}>
                <Entypo name="location" size={24} color="black" />
              </Box>
              <Box>
                <Text
                  text="Sala 115"
                  textFamily={theme.fonts.semiBold}
                  textColor={theme.colors.black}
                />
                <Text
                  text="Prédio de Odontologia"
                  textFamily={theme.fonts.semiBold}
                  textColor={theme.colors.black}
                />
              </Box>
            </Row>
            <Box pdTop={2}>
              <Text
                text="Prof.: Dr. Maurício Souza"
                textColor={theme.colors.black}
              />
              <Text
                text="Aluno: Marilia Silva"
                textColor={theme.colors.black}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ConfirmationModal>
  );
};

export default AppointmentModal;
