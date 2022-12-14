import { APPOINTMENT_SET } from './types';

export const initialState: reducers.AppointmentState = {
  appointmentList: [],
};

export const appointmentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case APPOINTMENT_SET:
      return {
        ...state,
        appointmentList: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
