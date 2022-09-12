import { Dispatch } from 'redux';

import { startLoading, stopLoading } from '../Loading/action';
import UserAPI from '@mobile/controllers/user';
import { USER_ME } from './types';
import Toaster from '@mobile/services/toaster';

export const getMe = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await UserAPI.getMe();
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
