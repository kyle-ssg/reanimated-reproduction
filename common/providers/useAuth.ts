import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState } from "../state-type";
import { useCallback } from 'react';

type UseAuthType = {
  register: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  login: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  logout: (callbacks?:Callbacks)=>void,
  confirmEmail: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  updateUser: (data:Record<string, any>, callbacks?:Callbacks)=>void,
  user: AppState['user'],
  userLoading: AppState['userLoading'],
  userError: AppState['userError'],
}

export function useAuth():UseAuthType {
  const {
    user, userLoading, userError } = useSelector((state:AppState)=>({
    user: state.user,
    userLoading: state.userLoading,
    userError: state.userError,
  }));
  const dispatch = useDispatch()
  const login = useCallback((data,callbacks)=>{
    return dispatch(AppActions.login(data,callbacks))
  },[dispatch])
  const register = useCallback((data,callbacks)=>{
    return dispatch(AppActions.register(data,callbacks))
  },[dispatch])
  const logout = useCallback((callbacks)=>{
    return dispatch(AppActions.logout(callbacks))
  },[dispatch])
  const confirmEmail = useCallback((data,callbacks)=>{
    return dispatch(AppActions.confirmEmail(data,callbacks))
  },[dispatch])
  const updateUser = useCallback((data,callbacks)=>{
    return dispatch(AppActions.updateUser(data,callbacks))
  },[dispatch])

  return {
    user,
    userLoading,
    userError,
    login,
    logout,
    register,
    updateUser,
    confirmEmail
  }
}
