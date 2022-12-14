import { Dispatch } from 'redux';
import { startLoading, stopLoading } from '../Loading/action';
import { APPOINTMENT_SET } from './types';
import Toaster from '@mobile/services/toaster';
import AppointmentAPI from '@mobile/controllers/appointment';
import StudentAPI from '@mobile/controllers/student';

export const getAppointments = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await AppointmentAPI.get();
    dispatch({ type: APPOINTMENT_SET, payload });
  } catch (err) {
    Toaster.error('Erro', 'Não foi possível buscar os agendamentos no momento');
  } finally {
    dispatch(stopLoading());
  }
};

export const updateAppointment =
  (data: models.Appointment, callback?: () => void) =>
  async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await AppointmentAPI.update(data);
      if (callback) {
        callback();
      }
    } catch (err) {
      Toaster.error(
        'Erro',
        'Não foi possível atualizar o agendamento no momento'
      );
    } finally {
      dispatch(stopLoading());
    }
  };

export const requestAppointment =
  (data: models.Appointment, callback?: () => void) =>
  async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await StudentAPI.requestPatient(data);
      if (callback) {
        callback();
      }
    } catch (err) {
      Toaster.error(
        'Erro',
        'Não foi possível requisitar o agendamento no momento'
      );
    } finally {
      dispatch(stopLoading());
    }
  };
