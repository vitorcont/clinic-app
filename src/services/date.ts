import { DateTime, DateTimeFormatOptions } from 'luxon';

export const toLocaleDate = (date: string, format: DateTimeFormatOptions) =>
  DateTime.fromISO(date, { zone: 'America/Sao_Paulo' }).toLocaleString(format);

export const getLocaleDate = (format: DateTimeFormatOptions) =>
  DateTime.now().toLocaleString(format);

export const getDay = (date: string) =>
  `${DateTime.fromISO(date, { zone: 'America/Sao_Paulo' }).day}`;

export const getWeekDay = (date: string) =>
  DateTime.fromISO(date, { zone: 'America/Sao_Paulo' }).weekdayShort;

export const getTimeDiff = (date1: DateTime, date2: DateTime) => {
  const diff = date1.diff(date2, 'days').toObject().days?.toFixed(0);

  if (parseInt(diff ?? '') < 1) {
    return 'Hoje';
  }

  return `${diff}d`;
};

export const formatCalendarDate = (date: string) => {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy');
};

export const toLocaleDateWithLocale = (
  date: string,
  format: DateTimeFormatOptions
) => DateTime.fromISO(date).toFormat('dd/MM/yyyy');

export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
