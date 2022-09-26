import { Dispatch } from 'redux';

import navigationService from '@mobile/services/navigation';
import Toaster from '@mobile/services/toaster';

import { AUTH_LOGIN, AUTH_LOGOUT } from './types';
import { stopLoading } from '../Loading/action';
import { getMe } from '../User/action';
import AuthAPI from '@mobile/controllers/auth';

export const authenticate =
  (userData: models.LoginRequest) => async (dispatch: any) => {
    try {
      const payload: models.LoginResponse = await AuthAPI.login(userData);
      dispatch({ type: AUTH_LOGIN, payload });
      dispatch(getMe());
      navigationService.reset({
        index: 0,
        routes: [{ name: 'Content' }],
      });
      Toaster.success('Sucesso', 'Logado com Sucesso');
    } catch (err) {
      Toaster.error('Erro', 'Verifique seus dados e tente novamente.');
    } finally {
      dispatch(stopLoading());
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  navigationService.reset({
    index: 0,
    routes: [{ name: 'Start' }],
  });
  dispatch({ type: AUTH_LOGOUT });
};
