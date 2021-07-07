
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, Callbacks } from '../app-actions';
import { AppState, RequestTypes } from "../state-type";
import { useCallback } from 'react';

type UsePasswordRequired = {
  passwordRequired: AppState['passwordRequired'],
  newPasswordRequired: (data:RequestTypes['newPasswordRequired'], callbacks?:Callbacks)=>void,
}

export default function usePasswordRequired():UsePasswordRequired {
  const {
    passwordRequired, } = useSelector((state:AppState)=>({
    passwordRequired: state.passwordRequired,
  }));
  const dispatch = useDispatch();
  const newPasswordRequired = useCallback((data:RequestTypes['newPasswordRequired'], callbacks?:Callbacks)=>{
    return dispatch(AppActions.newPasswordRequired(data, callbacks))
  },[dispatch])
  return {
    passwordRequired,
    newPasswordRequired,
  }
}
