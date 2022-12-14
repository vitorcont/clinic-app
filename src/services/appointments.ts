import { AppointmentStatus } from '@mobile/enum/Appointment';
import theme from '@mobile/theme';

export const cardColors = {
  [AppointmentStatus.CONFIRMED]: theme.colors.primaryLight,
  [AppointmentStatus.CANCELED]: theme.colors.cancel,
  [AppointmentStatus.PENDING]: theme.colors.pending,
};
