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
  id: string;
  name: string;
  email: string;
  cellphone: string;
}

export interface DropdownProps {
  label: string;
  value: string;
}
