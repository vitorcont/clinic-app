import theme from '@mobile/theme';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, TouchableOpacity } from 'react-native';

import * as S from './Question.styles';
import { Box, Button, Text } from '@mobile/components';
import Window from '@mobile/services/dimensions';

interface IQuestionProps {
  title: string;
  confirmText: string;
  dismissText: string;
  onConfirm?: () => void;
  onDismiss?: () => void;
}

const Question = ({
  title,
  confirmText,
  dismissText,
  onConfirm,
  onDismiss,
}: IQuestionProps) => {
  const [confirmDisabled, setConfirmDisabled] = useState(true);

  const onPressConfirm = () => {
    setConfirmDisabled(false);
    if (onConfirm) {
      onConfirm();
    }
  };

  const onPressDismiss = () => {
    setConfirmDisabled(true);
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <Box width={100}>
      <Box alignSelf="center">
        <Text text={title} textSize={theme.fontSizes.big} />
      </Box>
      <Box marginTop={3} justifyContent="space-around" flexDirection="row">
        <Button
          width={20}
          label={confirmText}
          onPress={onPressConfirm}
          backgroundColor={confirmDisabled ? theme.colors.disabled : undefined}
        />
        <Button
          width={20}
          label={dismissText}
          onPress={onPressDismiss}
          backgroundColor={confirmDisabled ? undefined : theme.colors.disabled}
        />
      </Box>
    </Box>
  );
};

export default Question;
