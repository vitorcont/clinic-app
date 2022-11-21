import { Box, PureModal, Text, Col } from '@mobile/components';
import theme from '@mobile/theme';
import React, { useEffect } from 'react';
import ConfirmIcon from '@mobile/assets/svg/ic_check.svg';

export interface ISuccessProps {
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const SuccessModal: React.FC<ISuccessProps> = ({
  setVisible,
  visible,
  title,
}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [visible]);

  return (
    <PureModal visible={visible} setVisible={setVisible}>
      <Box overflow="hidden">
        <Col marginTop={2} pdVertical={2} pdHorizontal={5} alignItems="center">
          <Text
            textAlign="center"
            text={title ?? ''}
            textSize={theme.fontSizes.biggest}
          />
          <Box pdTop={2} alignSelf="center">
            <ConfirmIcon />
          </Box>
        </Col>
      </Box>
    </PureModal>
  );
};

export default SuccessModal;
