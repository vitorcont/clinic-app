export as namespace reducers;

export interface AuthState {
  authenticated: {
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export interface UserState {
  me: models.User | null;
  student: boolean;
}

export interface AppointmentState {
  appointmentList: models.Appointment[];
}

export interface ReduxState {
  loading: number;
  auth: AuthState;
  user: UserState;
  appointments: AppointmentState;
}
