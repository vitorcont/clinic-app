import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';

import { startLoading, stopLoading } from '../Loading/action';
import UserAPI from '@mobile/controllers/user';
import { USER_ME, USER_STUDENT } from './types';
import Toaster from '@mobile/services/toaster';
import { StorageItems } from '@mobile/enum/storage';

export const getMe = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await UserAPI.getMe();
    await AsyncStorage.setItem(
      StorageItems.USER_STORED,
      JSON.stringify(payload)
    );
    dispatch({ type: USER_ME, payload });
  } catch (err) {
    Toaster.error(
      'Erro',
      'Não foi possível buscar os dados do usuário no mommento'
    );
  } finally {
    dispatch(stopLoading());
  }
};

export const setStudent = (student: boolean) => async (dispatch: Dispatch) => {
  dispatch({ type: USER_STUDENT, payload: student });
};
