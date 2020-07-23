import { AnyAction } from 'redux';

const BaseConstants = {

    'LOGIN': 'LOGIN',
    'LOGIN_LOADED': 'LOGIN_LOADED',
    'LOGIN_ERROR': 'LOGIN_ERROR',
    'REFRESH_TOKENS': 'REFRESH_TOKENS',

    'REGISTER': 'REGISTER',
    'REGISTER_LOADED': 'REGISTER_LOADED',
    'REGISTER_ERROR': 'REGISTER_ERROR',

    'STARTUP': 'STARTUP',
    'STARTUP_LOADED': 'STARTUP_LOADED',
    'STARTUP_ERROR': 'STARTUP_ERROR',

    'LOGOUT': 'LOGOUT',
    'CLEAR_USER': 'CLEAR_USER',
    'REFRESH': 'REFRESH',

    'CONFIRM_EMAIL': 'CONFIRM_EMAIL',
    'CONFIRM_EMAIL_ERROR': 'CONFIRM_EMAIL_ERROR',
    'CONFIRM_EMAIL_LOADED': 'CONFIRM_EMAIL_LOADED',


    'UPDATE_USER': 'UPDATE_USER',
    'UPDATE_USER_ERROR': 'UPDATE_USER_ERROR',
    'UPDATE_USER_LOADED': 'UPDATE_USER_LOADED',

    'SET_ACTIVE_SCREEN': 'SET_ACTIVE_SCREEN',
};
interface Callbacks {
    onSuccess?:(data:any)=>void;
    onError?:(data:any)=>void;
}

const BaseActions = {
    login(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.LOGIN,
            data,
            ...callbacks,
        };
    },
    // STARTUP
    startup(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.STARTUP,
            data,
            ...callbacks,
        };
    },
    // REGISTER
    register(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.REGISTER,
            data,
            ...callbacks,
        };
    },
    updateUser(data:Record<string, any>, callbacks:Callbacks = {}):AnyAction {
        return {
            type: Actions.UPDATE_USER,
            data,
            ...callbacks,
        };
    },
    confirmEmail(data:Record<string, any>, callbacks:Callbacks={}):AnyAction {
        return {
            type: Actions.CONFIRM_EMAIL,
            data,
            ...callbacks,
        };
    },
    logout(callbacks: Callbacks = {}):AnyAction {
        return {
            type: Actions.LOGOUT,
            ...callbacks,
        };
    },
    setActiveScreen(name:string, navigator:string="root"):AnyAction {
        return {
            type: Actions.SET_ACTIVE_SCREEN,
            index: navigator,
            data: name
        };
    },
};

export const Actions = global.Actions = Object.assign({}, BaseConstants, {

// END OF ACTION_STRINGS
});

export const AppActions = global.AppActions = Object.assign({}, BaseActions, {

// END OF APP_ACTIONS
});
