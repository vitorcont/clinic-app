import { Box, Text, Row, Col } from '@mobile/components';
import ConfirmationModal, {
  IConfirmationProps,
} from '@mobile/components/modules/ConfirmationModal/ConfirmationModal';
import theme from '@mobile/theme';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import * as S from './FormConfirmationModal.styles';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { cardColors } from '@mobile/services/appointments';
import { DateTime } from 'luxon';
import { months } from '@mobile/services/date';

interface IForm extends IConfirmationProps {
  appointment: models.Appointment;
}

const FormConfirmationModal: React.FC<IForm> = ({
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
        <S.TopContainer>
          <Box pdTop={2} marginLeft={2}>
            <Text
              text={appointment.type}
              textColor={theme.colors.primary}
              textSize={26}
              textFamily={theme.fonts.semiBold}
            />
          </Box>
        </S.TopContainer>
        <Box pdHorizontal={2}>
          <Col>
            <Row>
              <Text
                marginTop={2}
                text={'Disciplina: '}
                textColor={theme.colors.black}
              />
              <Text
                textFamily={theme.fonts.semiBold}
                marginTop={2}
                text={appointment.type}
                textColor={theme.colors.black}
              />
            </Row>
            <Row>
              <Text
                marginTop={2}
                text={'Paciente: '}
                textColor={theme.colors.black}
              />
              <Text
                textFamily={theme.fonts.semiBold}
                marginTop={2}
                text={appointment.patient.name}
                textColor={theme.colors.black}
              />
            </Row>
            <Row>
              <Text
                marginTop={2}
                text={'Aluno: '}
                textColor={theme.colors.black}
              />
              <Text
                textFamily={theme.fonts.semiBold}
                marginTop={2}
                text={appointment.student.name}
                textColor={theme.colors.black}
              />
            </Row>
            <Row>
              <Text text={'Professor: '} textColor={theme.colors.black} />
              <Text
                textFamily={theme.fonts.semiBold}
                text={appointment.professor.name}
                textColor={theme.colors.black}
              />
            </Row>
          </Col>
        </Box>
      </Box>
    </ConfirmationModal>
  );
};

export default FormConfirmationModal;
