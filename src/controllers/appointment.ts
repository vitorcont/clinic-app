import {
  getUserMockAppointments,
  updateMockedAppointments,
} from './../mock/utils';
import getInstance from '@mobile/api/axios';

const BASE_URL = '/api/Appointment';

const AppointmentAPI = {
  update: async (appointmentData: models.Appointment) => {
    // const instance = await getInstance();
    // const { data } = await instance.put(
    //   `${BASE_URL}/update/${appointmentData.id}`,
    //   appointmentData
    // );

    const data = updateMockedAppointments(appointmentData);

    return data;
  },
  getById: async (id: number) => {
    const instance = await getInstance();
    const { data } = await instance.get(`${BASE_URL}/get/${id}`);

    return data;
  },
  get: async () => {
    // const instance = await getInstance();
    // const { data } = await instance.get(`${BASE_URL}/get`);

    const data = await getUserMockAppointments();

    return data;
  },
};

export default AppointmentAPI;
