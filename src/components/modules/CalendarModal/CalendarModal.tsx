import { Box, PureModal, Text, Button } from '@mobile/components';
import theme from '@mobile/theme';
import React from 'react';
import { Calendar } from 'react-native-calendars';

export interface ICalendarModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setDate: (value: string) => void;
  date: string;
}

const CalendarModal: React.FC<ICalendarModalProps> = ({
  setVisible,
  visible,
  date,
  setDate,
}) => {
  return (
    <PureModal visible={visible} setVisible={setVisible}>
      <Box overflow="hidden" pdHorizontal={2} pdVertical={2}>
        <Calendar
          initialDate={date ?? new Date().toISOString()}
          minDate={new Date().toISOString()}
          onDayPress={(day) => {
            setDate(day.dateString);
            setVisible(false);
          }}
          theme={{
            selectedDayBackgroundColor: theme.colors.primaryLight,
            backgroundColor: theme.colors.background,
            calendarBackground: theme.colors.background,
          }}
          hideExtraDays
          firstDay={1}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableAllTouchEventsForDisabledDays
          enableSwipeMonths
        />
      </Box>
    </PureModal>
  );
};

export default CalendarModal;
