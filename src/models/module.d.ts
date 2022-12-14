import { AppointmentStatus } from '@mobile/enum/Appointment';
import { ImageSourcePropType } from 'react-native';

export as namespace models;
export interface HandleError {
  status: number;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface FormsInput {
  name: string;
  email: string;
  date: Date | undefined | null;
  phone: string;
  cpf: string;
  username: string;
  password: string;
  new_password: string;
}

export interface User {
  id: number;
  password?: string;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
}

export interface DropdownProps {
  label: string;
  value: string;
}

export interface Appointment {
  id: number;
  status: AppointmentStatus;
  date: string;
  time: string;
  duration: number;
  type: string;
  student: Student;
  location: string;
  professor: Professor;
  phone: string;
  patient: Patient;
  name: string;
  notification: Notification;
}
export interface Student {
  id: number;
  name: string;
  ra: number;
  period: number;
  phone: string;
  email: string;
  password: number;
  type: string;
}
export interface Professor {
  id: number;
  name: string;
  rp: number;
  phone: string;
  email: string;
  password: number;
  type: string;
}
export interface Patient {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  email: string;
  password: number;
  type: string;
}
export interface Notification {
  date: string;
  text: string;
  unread: boolean;
}

export interface ErrorResponse {
  hasError: true;
  message: string;
  result: null;
}
