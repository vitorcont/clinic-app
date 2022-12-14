import { USER_ME, USER_STUDENT } from './types';

export const initialState: reducers.UserState = {
  me: null,
  student: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_ME:
      return {
        ...state,
        me: action.payload,
      };
    case USER_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
