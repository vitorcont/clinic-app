import { getMockUserByToken, validateMockUser } from './../mock/utils';
import getInstance from '@mobile/api/axios';

const BASE_URL = '/api/User';

const UserAPI = {
  getMe: async () => {
    // const instance = await getInstance();
    // const { data } = await instance.get(`${BASE_URL}/getLogged`);

    const data = await getMockUserByToken();

    return data;
  },
  login: async (userData: models.LoginRequest) => {
    // const instance = await getInstance();
    // const { data } = await instance.post(`${BASE_URL}/login`, userData);

    const data = validateMockUser(userData);

    return data;
  },
};

export default UserAPI;
