import AsyncStorage from '@react-native-async-storage/async-storage';
import { appointmentReducer } from './Appointment/reducer';
import { combineReducers } from 'redux';

import authReducer from './Auth/reducer';
import loadingReducer from './Loading/reducer';
import userReducer from './User/reducer';
import { StorageItems } from '@mobile/enum/storage';

const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  user: userReducer,
  appointments: appointmentReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
