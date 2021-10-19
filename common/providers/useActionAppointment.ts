import { useDispatch, useSelector } from 'react-redux'
import { AppActions, Callbacks } from '../app-actions'
import { AppState, RequestTypes } from '../state-type'
import { useCallback } from 'react'

type UseActionAppointment = {
  actionAppointment: AppState['actionAppointment']
  actionAppointmentLoading: AppState['actionAppointmentLoading']
  actionAppointmentSaving: AppState['actionAppointmentSaving']
  actionAppointmentError: AppState['actionAppointmentError']
  createActionAppointment: (
    data: RequestTypes['createActionAppointment'],
    callbacks?: Callbacks,
  ) => void
}

export default function useActionAppointment(): UseActionAppointment {
  const {
    actionAppointment,
    actionAppointmentLoading,
    actionAppointmentSaving,
    actionAppointmentError,
  } = useSelector((state: AppState) => ({
    actionAppointment: state.actionAppointment,
    actionAppointmentLoading: state.actionAppointmentLoading,
    actionAppointmentSaving: state.actionAppointmentSaving,
    actionAppointmentError: state.actionAppointmentError,
  }))
  const dispatch = useDispatch()

  const createActionAppointment = useCallback(
    (data: RequestTypes['createActionAppointment'], callbacks?: Callbacks) => {
      return dispatch(AppActions.createActionAppointment(data, callbacks))
    },
    [dispatch],
  )

  return {
    actionAppointment,
    actionAppointmentLoading,
    actionAppointmentSaving,
    actionAppointmentError,
    createActionAppointment,
  }
}
