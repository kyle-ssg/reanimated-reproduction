import { AnyAction } from "redux";
import { RequestTypes } from './state-type';

const BaseConstants = {
  LOGIN: "LOGIN",
  LOGIN_LOADED: "LOGIN_LOADED",
  LOGIN_ERROR: "LOGIN_ERROR",
  REFRESH_TOKENS: "REFRESH_TOKENS",

  REGISTER: "REGISTER",
  REGISTER_LOADED: "REGISTER_LOADED",
  REGISTER_ERROR: "REGISTER_ERROR",

  STARTUP: "STARTUP",
  STARTUP_LOADED: "STARTUP_LOADED",
  STARTUP_ERROR: "STARTUP_ERROR",

  LOGOUT: "LOGOUT",
  CLEAR_USER: "CLEAR_USER",
  REFRESH: "REFRESH",

  'GET_PROFILE': 'GET_PROFILE',
  'GET_PROFILE_LOADED': 'GET_PROFILE_LOADED',
  'GET_PROFILE_ERROR': 'GET_PROFILE_ERROR',

  'UPDATE_PROFILE': 'UPDATE_PROFILE',
  'UPDATE_PROFILE_LOADED': 'UPDATE_PROFILE_LOADED',
  'UPDATE_PROFILE_ERROR': 'UPDATE_PROFILE_ERROR',

  CONFIRM_EMAIL: "CONFIRM_EMAIL",
  CONFIRM_EMAIL_ERROR: "CONFIRM_EMAIL_ERROR",
  CONFIRM_EMAIL_LOADED: "CONFIRM_EMAIL_LOADED",

  UPDATE_USER: "UPDATE_USER",
  UPDATE_USER_ERROR: "UPDATE_USER_ERROR",
  UPDATE_USER_LOADED: "UPDATE_USER_LOADED",

  SET_ACTIVE_SCREEN: "SET_ACTIVE_SCREEN",
};
export interface Callbacks {
  onSuccess?: (data: any) => void;
  onError?: (data: any, originalError?:any) => void;
}

const BaseActions = {
  login(data: Record<string, any>, callbacks: Callbacks = {}): AnyAction {
    return {
      type: Actions.LOGIN,
      data,
      ...callbacks,
    };
  },
  // STARTUP
  startup(data: Record<string, any>, callbacks: Callbacks = {}): AnyAction {
    return {
      type: Actions.STARTUP,
      data,
      ...callbacks,
    };
  },
  // REGISTER
  register(data: Record<string, any>, callbacks: Callbacks = {}): AnyAction {
    return {
      type: Actions.REGISTER,
      data,
      ...callbacks,
    };
  },
  updateUser(data: Record<string, any>, callbacks: Callbacks = {}): AnyAction {
    return {
      type: Actions.UPDATE_USER,
      data,
      ...callbacks,
    };
  },
  confirmEmail(
    data: Record<string, any>,
    callbacks: Callbacks = {}
  ): AnyAction {
    return {
      type: Actions.CONFIRM_EMAIL,
      data,
      ...callbacks,
    };
  },
  logout(callbacks: Callbacks = {}): AnyAction {
    return {
      type: Actions.LOGOUT,
      ...callbacks,
    };
  },

  getProfile(data:RequestTypes['getProfile'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.GET_PROFILE,
      data,
      ...callbacks,
    };
  },

  updateProfile(data:RequestTypes['updateProfile'], callbacks:Callbacks={}):AnyAction {
    return {
      type: Actions.UPDATE_PROFILE,
      data,
      ...callbacks,
    };
  },
  setActiveScreen(name: string, navigator = "root"): AnyAction {
    return {
      type: Actions.SET_ACTIVE_SCREEN,
      index: navigator,
      data: name,
    };
  },
};

// @ts-ignore
export const Actions = (global.Actions = Object.assign({}, BaseConstants, {

  'NEW_PASSWORD_REQUIRED': 'NEW_PASSWORD_REQUIRED',

// END OF ACTION_STRINGS
}));

// @ts-ignore
export const AppActions = (global.AppActions = Object.assign({}, BaseActions, {
  
    newPasswordRequired(data:RequestTypes['newPasswordRequired'], callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.NEW_PASSWORD_REQUIRED,
            data,
            ...callbacks,
        };
    },

// END OF APP_ACTIONS
}));
