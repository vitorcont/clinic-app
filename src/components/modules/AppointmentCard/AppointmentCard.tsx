import { Box, Text } from '@mobile/components';
import appointment from '@mobile/controllers/appointment';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { cardColors } from '@mobile/services/appointments';
import { months } from '@mobile/services/date';
import theme from '@mobile/theme';
import { DateTime } from 'luxon';
import React from 'react';
import * as S from './AppointmentCard.style';

export interface IAppointmentCardProps {
  appointment: models.Appointment;
  onPress: () => void;
}

const AppointmentCard = (props: IAppointmentCardProps) => {
  const date = DateTime.fromJSDate(new Date(props.appointment.date));

  const {
    user: { student },
  } = useReduxState();

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
            backgroundColor={cardColors[props.appointment.status]}
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
        <Box pdTop={2} marginLeft={17}>
          <Text
            text={props.appointment.type}
            textColor={theme.colors.primary}
            textSize={26}
            textFamily={theme.fonts.semiBold}
          />
        </Box>
        <Box backgroundColor="white" pdBottom={6}>
          <Box marginLeft={17} pdVertical={1}>
            {student && (
              <Text
                text={props.appointment.professor.name}
                textColor={theme.colors.black}
              />
            )}
            <Text
              text={date.toFormat('dd/MM/yyyy HH:mm')}
              textColor={theme.colors.black}
            />
          </Box>
          <Box
            pdVertical={0.5}
            marginHorizontal={2}
            marginVertical={2}
            width={30}
            alignItems="center"
            borderRadius={5}
            backgroundColor={theme.colors.disabled}
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
