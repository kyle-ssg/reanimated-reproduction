import { useDispatch, useSelector } from 'react-redux'
import { AppActions, Callbacks } from '../app-actions'
import { AppState, RequestTypes } from '../state-type'
import { useCallback } from 'react'

type UseAuthType = {
  register: (data: RequestTypes['register'], callbacks?: Callbacks) => void
  login: (data: RequestTypes['login'], callbacks?: Callbacks) => void
  logout: (callbacks?: Callbacks) => void
  confirmEmail: (data: Record<string, any>, callbacks?: Callbacks) => void
  updateUser: (data: Record<string, any>, callbacks?: Callbacks) => void
  user: AppState['user']
  userLoading: AppState['userLoading']
  userError: AppState['userError']
}

export function useAuth(): UseAuthType {
  const { user, userLoading, userError } = useSelector((state: AppState) => {
    return {
      user: state.profile,
      userLoading: state.userLoading || state.profileLoading,
      userError: state.userError || state.profileError,
    }
  })
  const dispatch = useDispatch()
  const login = useCallback(
    (data, callbacks) => {
      return dispatch(AppActions.login(data, callbacks))
    },
    [dispatch],
  )
  const register = useCallback(
    (data, callbacks) => {
      return dispatch(AppActions.register(data, callbacks))
    },
    [dispatch],
  )
  const logout = useCallback(
    (callbacks) => {
      return dispatch(AppActions.logout(callbacks))
    },
    [dispatch],
  )
  const confirmEmail = useCallback(
    (data, callbacks) => {
      return dispatch(AppActions.confirmEmail(data, callbacks))
    },
    [dispatch],
  )
  const updateUser = useCallback(
    (data, callbacks) => {
      return dispatch(AppActions.updateUser(data, callbacks))
    },
    [dispatch],
  )

  return {
    user,
    userLoading,
    userError,
    login,
    logout,
    register,
    updateUser,
    confirmEmail,
  }
}
