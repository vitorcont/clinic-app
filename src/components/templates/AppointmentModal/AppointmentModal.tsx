import { Box, PureModal, Text, Button } from '@mobile/components';
import ConfirmationModal, {
  IConfirmationProps,
} from '@mobile/components/modules/ConfirmationModal/ConfirmationModal';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
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
      <Box alignSelf="center" alignItems="center" pdVertical={2}>
        <Text text="Cirurgia" textColor={theme.colors.primary} />
        <Text text="Setembro" textColor={theme.colors.primary} />
        <Text text="19/09/2022 - 12:00h" textColor={theme.colors.primary} />
        <Text text="Prédio H11" textColor={theme.colors.primary} />
      </Box>
      {children}
    </ConfirmationModal>
  );
};

export default AppointmentModal;
