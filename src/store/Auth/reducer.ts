import { AUTH_LOGIN, AUTH_LOGGED } from './types';

export const initialState: reducers.AuthState = {
  authenticated: {
    accessToken: null,
    refreshToken: null,
  },
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
