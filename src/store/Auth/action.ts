import { setStudent } from './../User/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { startLoading } from './../Loading/action';
import { Dispatch } from 'redux';

import navigationService from '@mobile/services/navigation';
import Toaster from '@mobile/services/toaster';

import { AUTH_LOGIN, AUTH_LOGOUT } from './types';
import { stopLoading } from '../Loading/action';
import { getMe } from '../User/action';
import UserAPI from '@mobile/controllers/user';
import { StorageItems } from '@mobile/enum/storage';

export const authenticate =
  (userData: models.LoginRequest, callback?: (fieldError: string) => void) =>
  async (dispatch: any) => {
    dispatch(startLoading());
    try {
      const payload: models.LoginResponse = await UserAPI.login(userData);
      await AsyncStorage.setItem(
        StorageItems.ACCESS_TOKEN,
        JSON.stringify(payload)
      );
      dispatch(getMe());

      const meData = await UserAPI.getMe();
      await AsyncStorage.setItem(
        StorageItems.USER_STORED,
        JSON.stringify(meData)
      );

      dispatch(setStudent(userData.email.includes('@puccampinas.edu.br')));
      if (userData.email.includes('@puccampinas.edu.br')) {
        await AsyncStorage.setItem(StorageItems.STUDENT_PROFILE, 'true');
      } else {
        await AsyncStorage.removeItem(StorageItems.STUDENT_PROFILE);
      }
      dispatch({ type: AUTH_LOGIN, payload });
      navigationService.reset({
        index: 0,
        routes: [{ name: 'Content' }],
      });
    } catch (err) {
      Toaster.error('Erro', 'Verifique seus dados e tente novamente.');
    } finally {
      dispatch(stopLoading());
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  navigationService.reset({
    index: 0,
    routes: [{ name: 'Auth' }],
  });
  await AsyncStorage.removeItem(StorageItems.ACCESS_TOKEN);
  await AsyncStorage.removeItem(StorageItems.AUTHENTICATED);
  await AsyncStorage.removeItem(StorageItems.STUDENT_PROFILE);
  await AsyncStorage.removeItem(StorageItems.USER_STORED);
  // await AsyncStorage.removeItem(StorageItems.MOCK_APPOINTMENT);

  dispatch({ type: AUTH_LOGOUT });
};
