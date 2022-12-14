import { LoginRequest } from './../models/module.d';
import { StorageItems } from '@mobile/enum/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appointmentsMock from './appointments';
import userMocks from './user';

export const setupMocks = async () => {
  const appointmetsStored = await AsyncStorage.getItem(
    StorageItems.MOCK_APPOINTMENT
  );
  await AsyncStorage.setItem(
    StorageItems.MOCK_USERS,
    JSON.stringify(userMocks)
  );
  if (!appointmetsStored) {
    await AsyncStorage.setItem(
      StorageItems.MOCK_APPOINTMENT,
      JSON.stringify(appointmentsMock)
    );
  }
};

export const getMockAppointments = async () => {
  const user = await getStoredUser();
  const profile = await AsyncStorage.getItem(StorageItems.STUDENT_PROFILE);
  const untreatedAppointments = await AsyncStorage.getItem(
    StorageItems.MOCK_APPOINTMENT
  );
  const mockedAppointments: models.Appointment[] = JSON.parse(
    untreatedAppointments ?? '[]'
  );

  if (!!profile) {
    return mockedAppointments.filter(
      (appointment) => appointment.student.id === user.id
    );
  }

  return mockedAppointments.filter(
    (appointment) => appointment.patient.id === user.id
  );
};

export const getMockUser = async (userId: number) => {
  const untreatedUsers = await AsyncStorage.getItem(StorageItems.MOCK_USERS);
  const mockedUsers: models.User[] = JSON.parse(untreatedUsers ?? '[]');

  return mockedUsers.find((user) => user.id === userId)!;
};

export const getMockUserByToken = async () => {
  const untreatedUser = await AsyncStorage.getItem(StorageItems.ACCESS_TOKEN);
  const mockedUser: models.LoginResponse = JSON.parse(untreatedUser ?? '');
  const user = getMockUser(parseInt(mockedUser.accessToken));

  return user;
};

export const validateMockUser = async (loginData: LoginRequest) => {
  const untreatedUsers = await AsyncStorage.getItem(StorageItems.MOCK_USERS);
  const mockedUsers: models.User[] = JSON.parse(untreatedUsers ?? '[]');

  const found = mockedUsers.find(
    (user) =>
      loginData.email === user.email && loginData.password === user.password
  );
  if (!found) {
    throw Error('Usuário não encontrado!');
  }

  return {
    accessToken: found.id.toString(),
    refreshToken: found.id.toString(),
  } as models.LoginResponse;
};

export const getStoredUser = async () => {
  const storedUser = await AsyncStorage.getItem(StorageItems.USER_STORED);
  const user: models.User = JSON.parse(storedUser ?? '');

  return user;
};

export const updateMockedAppointments = async (
  appointment: models.Appointment
) => {
  const appointments = await getMockAppointments();
  const updated = appointments.map((item) => {
    if (item.id === appointment.id) {
      return appointment;
    }
    return item;
  });

  await AsyncStorage.setItem(
    StorageItems.MOCK_APPOINTMENT,
    JSON.stringify(updated)
  );

  return appointment;
};

export const getUserByDocument = async (document: string) => {
  const untreatedUsers = await AsyncStorage.getItem(StorageItems.MOCK_USERS);
  const mockedUsers: models.User[] = JSON.parse(untreatedUsers ?? '[]');

  return mockedUsers.find((item) => item.cpf === document);
};

export const addAppointmentToMock = async (appointment: models.Appointment) => {
  const untreatedAppointments = await AsyncStorage.getItem(
    StorageItems.MOCK_APPOINTMENT
  );
  const mockedAppointments: models.Appointment[] = JSON.parse(
    untreatedAppointments ?? '[]'
  );

  await AsyncStorage.setItem(
    StorageItems.MOCK_APPOINTMENT,
    JSON.stringify(
      mockedAppointments.concat([
        { ...appointment, id: mockedAppointments.length + 1 },
      ])
    )
  );

  return { ...appointment, id: mockedAppointments.length + 1 };
};
