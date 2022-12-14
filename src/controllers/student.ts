import getInstance from '@mobile/api/axios';
import { addAppointmentToMock } from '@mobile/mock/utils';

const BASE_URL = '/api/Student';

const StudentAPI = {
  requestPatient: async (appointment: models.Appointment) => {
    // const instance = await getInstance();
    // const { data } = await instance.post(
    //   `${BASE_URL}/request-patient`,
    //   appointment
    // );

    const data = await addAppointmentToMock(appointment);

    return data;
  },
};

export default StudentAPI;
