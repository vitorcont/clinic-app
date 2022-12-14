import Axios, { AxiosError, AxiosResponse } from 'axios';

// import { API_URL } from '@mobile/config/env.json';
import { StorageItems } from '@mobile/enum/storage';
import navigationService from '@mobile/services/navigation';
import Toaster from '@mobile/services/toaster';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AxiosStatus {
  Unauthorized = 401,
  Forbidden = 403,
}

interface IHandler {
  unauthorizedError: () => void;
}

const handler: IHandler = {
  unauthorizedError: async () => {
    Toaster.error('Erro', 'Falha ao autenticar, logue no app novamente');
    await AsyncStorage.removeItem(StorageItems.AUTHENTICATED);
    await AsyncStorage.removeItem(StorageItems.ACCESS_TOKEN);

    navigationService.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  },
};

export const getInstance = async () => {
  const accessToken = await AsyncStorage.getItem(StorageItems.ACCESS_TOKEN);

  const axiosInstance = Axios.create({
    baseURL: 'http://puc-homolog-api.ativy.com:8080',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.hasError) {
        return Promise.reject(response.data.message ?? 'Erro Genérico');
      }
      return response;
    },
    async (err: AxiosError) => {
      if (err.response?.status === AxiosStatus.Unauthorized) {
        handler.unauthorizedError();
      } else if (err.response?.status === AxiosStatus.Forbidden) {
        // your mechanism to forbidden
      }

      return Promise.reject();
    }
  );

  return axiosInstance;
};

export const setHandleUnauthorizedError = (fn: () => void) => {
  handler.unauthorizedError = fn;
};

export default getInstance;
