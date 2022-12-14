import { Box, Text, Row } from '@mobile/components';
import ConfirmationModal, {
  IConfirmationProps,
} from '@mobile/components/modules/ConfirmationModal/ConfirmationModal';
import theme from '@mobile/theme';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import * as S from './AppointmentModal.styles';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { cardColors } from '@mobile/services/appointments';
import { DateTime } from 'luxon';
import { months } from '@mobile/services/date';

interface IAppointmentProps extends IConfirmationProps {
  appointment: models.Appointment;
}

const AppointmentModal: React.FC<IAppointmentProps> = ({
  onConfirm,
  confirmLabel,
  onDismiss,
  dismissLabel,
  setVisible,
  visible,
  children,
  appointment,
}) => {
  const {
    user: { student },
  } = useReduxState();
  const date = DateTime.fromJSDate(new Date(appointment.date));

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
            backgroundColor={cardColors[appointment.status]}
            borderRadius={5}
            alignItems="center"
            pdVertical={2.2}
            pdHorizontal={1}
            left={3}
          >
            <Box width={20} alignItems="center">
              <Text
                style={{ lineHeight: 25 }}
                text={months[date.month - 1]}
                textFamily={theme.fonts.semiBold}
                textColor={theme.colors.white}
                textTransform={'uppercase'}
              />
            </Box>
            <Text
              style={{ lineHeight: 40 }}
              text={date.day.toString()}
              textFamily={theme.fonts.semiBold}
              textColor={theme.colors.white}
              textSize={theme.fontSizes.huggest}
            />
          </Box>
        </Box>
        <S.TopContainer>
          <Box pdTop={2} marginLeft={17}>
            <Text
              text={appointment.type}
              textColor={theme.colors.primary}
              textSize={26}
              textFamily={theme.fonts.semiBold}
            />
          </Box>
        </S.TopContainer>
        <Box>
          <Box marginLeft={17} pdVertical={0.5}>
            <Text
              text={date.toFormat('dd/MM/yyyy')}
              textColor={theme.colors.black}
            />
            <Text
              text={date.toFormat('HH:mm')}
              textColor={theme.colors.black}
            />
          </Box>
          <Box marginLeft={3} pdVertical={2}>
            <Row alignItems="center">
              <Box pdHorizontal={2}>
                <Entypo name="location" size={24} color="black" />
              </Box>
              <Box>
                <Text
                  text={appointment.location}
                  textFamily={theme.fonts.semiBold}
                  textColor={theme.colors.black}
                />
                {/* <Text
                  text="Prédio de Odontologia"
                  textFamily={theme.fonts.semiBold}
                  textColor={theme.colors.black}
                /> */}
              </Box>
            </Row>
            <Box pdTop={2}>
              <Text
                text={`Prof.: ${appointment.professor.name}`}
                textColor={theme.colors.black}
              />
              <Text
                text={`Aluno: ${appointment.student.name}`}
                textColor={theme.colors.black}
              />
              {student && (
                <Text
                  text={`Status do paciente: ${appointment.status}`}
                  textColor={theme.colors.black}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ConfirmationModal>
  );
};

export default AppointmentModal;
