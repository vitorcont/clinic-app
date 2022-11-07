import { Box, Text } from '@mobile/components';
import theme from '@mobile/theme';
import { DateTime } from 'luxon';
import React from 'react';
import * as S from './AppointmentCard.style';

export interface IAppointmentCardProps {
  title: string;
  teacher: string;
  date: string;
  onPress: () => void;
}

const AppointmentCard = (props: IAppointmentCardProps) => {
  const dateTime = DateTime.fromFormat(props.date, 'DD/MM/YYYY');

  return (
    <Box
      width={90}
      borderRadius={5}
      overflow="hidden"
      backgroundColor={theme.colors.cardBackgroud}
      shadowBox
      alignSelf="center"
      marginBottom={2}
    >
      <S.TouchableContainer onPress={props.onPress}>
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
        <Box pdTop={2} marginLeft={17}>
          <Text
            text={props.title}
            textColor={theme.colors.primary}
            textSize={26}
            textFamily={theme.fonts.semiBold}
          />
        </Box>
        <Box backgroundColor="white" pdBottom={6}>
          <Box marginLeft={17} pdVertical={1}>
            <Text text={props.teacher} textColor={theme.colors.black} />
            <Text text={props.date} textColor={theme.colors.black} />
          </Box>
          <Box
            pdVertical={0.5}
            marginHorizontal={2}
            marginVertical={2}
            width={30}
            alignItems="center"
            borderRadius={5}
            backgroundColor={theme.colors.primaryLight}
            position="absolute"
            bottom={-0.5}
            right={0.5}
          >
            <Text
              textColor="white"
              text="Detalhes"
              textSize={theme.fontSizes.regular}
            />
          </Box>
        </Box>
      </S.TouchableContainer>
    </Box>
  );
};

export default AppointmentCard;
