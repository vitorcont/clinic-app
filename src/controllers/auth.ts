import getInstance from '@mobile/api/axios';

const BASE_URL = '/yourbaseurl';

const AuthAPI = {
  login: async (userData: models.LoginRequest) => {
    const instance = await getInstance();
    const { data } = await instance.post(BASE_URL, userData);

    return data as models.LoginResponse;
  },
  recovery: async (email: string) => {
    const instance = await getInstance();
    await instance.post(`${BASE_URL}/recovery`, { email });
  },
  refresh: async () => {
    const instance = await getInstance();
    const { data } = await instance.post(`${BASE_URL}/refresh-token`);

    return data;
  },
};

export default AuthAPI;
