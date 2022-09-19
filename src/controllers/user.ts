import getInstance from '@mobile/api/axios';

const BASE_URL = '/youruserurl';

const UserAPI = {
  getMe: async () => {
    const instance = await getInstance();
    const { data } = await instance.get(`${BASE_URL}/me`);

    return data;
  },
};

export default UserAPI;
