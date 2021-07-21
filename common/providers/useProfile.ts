import { useDispatch, useSelector } from 'react-redux'
import { AppActions, Callbacks } from '../app-actions'
import { AppState, RequestTypes } from '../state-type'
import { useCallback } from 'react'

type UseProfile = {
  profile: AppState['profile']
  profileLoading: AppState['profileLoading']
  profileSaving: AppState['profileSaving']
  profileError: AppState['profileError']
  getProfile: (data: RequestTypes['getProfile'], callbacks?: Callbacks) => void
  updateProfile: (
    data: RequestTypes['updateProfile'],
    callbacks?: Callbacks,
  ) => void
}

export default function useProfile(): UseProfile {
  const { profile, profileLoading, profileSaving, profileError } = useSelector(
    (state: AppState) => ({
      profile: state.profile,
      profileLoading: state.profileLoading,
      profileSaving: state.profileSaving,
      profileError: state.profileError,
    }),
  )
  const dispatch = useDispatch()
  const getProfile = useCallback(
    (data: RequestTypes['getProfile'], callbacks?: Callbacks) => {
      return dispatch(AppActions.getProfile(data, callbacks))
    },
    [dispatch],
  )
  const updateProfile = useCallback(
    (data: RequestTypes['updateProfile'], callbacks?: Callbacks) => {
      return dispatch(AppActions.updateProfile(data, callbacks))
    },
    [dispatch],
  )

  return {
    profile,
    updateProfile,
    profileLoading,
    profileError,
    profileSaving,
    getProfile,
  }
}
