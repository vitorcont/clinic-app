import { Box, PureModal, Text, Button } from '@mobile/components';
import theme from '@mobile/theme';
import React from 'react';

export interface IConfirmationProps {
  onConfirm: () => void;
  confirmLabel?: string;
  dismissLabel?: string;
  onDismiss: () => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: React.ReactNode;
}

const ConfirmationModal: React.FC<IConfirmationProps> = ({
  onConfirm,
  confirmLabel,
  onDismiss,
  dismissLabel,
  setVisible,
  visible,
  children,
}) => {
  return (
    <PureModal visible={visible} setVisible={setVisible}>
      <Box overflow="hidden">
        {children}
        <Box
          marginTop={2}
          flexDirection="row"
          pdBottom={3}
          justifyContent="space-around"
        >
          {!!dismissLabel && (
            <Button
              width={35}
              label={dismissLabel ?? ''}
              backgroundColor={theme.colors.cancel}
              onPress={onDismiss}
            />
          )}
          {!!confirmLabel && (
            <Button width={35} label={confirmLabel ?? ''} onPress={onConfirm} />
          )}
        </Box>
      </Box>
    </PureModal>
  );
};

export default ConfirmationModal;
