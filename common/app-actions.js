const BaseConstants = {
    'ACTIVE'    : 'ACTIVE',
    'INACTIVE'  : 'INACTIVE',

    'CONNECTED'     : 'CONNECTED',
    'DISCONNECTED'  : 'DISCONNECTED',

    'LOGIN'         : 'LOGIN',
    'LOGIN_LOADED'  : 'LOGIN_LOADED',
    'LOGIN_ERROR'   : 'LOGIN_ERROR',
    'REFRESH_TOKENS'   : 'REFRESH_TOKENS',

    'REGISTER'                  : 'REGISTER',
    'REGISTER_LOADED'           : 'REGISTER_LOADED',
    'REGISTER_ERROR'            : 'REGISTER_ERROR',

    'CONFIRM_EMAIL'       : 'CONFIRM_EMAIL',
    'CONFIRM_EMAIL_ERROR'       : 'CONFIRM_EMAIL_ERROR',
    'CONFIRM_EMAIL_LOADED'       : 'CONFIRM_EMAIL_LOADED',

    'UPDATE_USER'       : 'UPDATE_USER',
    'UPDATE_USER_LOADED'       : 'UPDATE_USER_LOADED',
    'UPDATE_USER_ERROR'       : 'UPDATE_USER_ERROR',

    'REFRESH_USER'       : 'REFRESH_USER',
    'REFRESH_USER_LOADED'       : 'REFRESH_USER_LOADED',
    'REFRESH_USER_ERROR'       : 'REFRESH_USER_ERROR',

    'STARTUP'           : 'STARTUP',
    'STARTUP_LOADED'    : 'STARTUP_LOADED',
    'STARTUP_ERROR'     : 'STARTUP_ERROR',

    'LOGOUT'        : 'LOGOUT',
    'CLEAR_USER'    : 'CLEAR_USER',
    'REFRESH'       : 'REFRESH',
};

const BaseActions = {
    connected() {
        return {
            type: Actions.CONNECTED,
        };
    },
    disconnected() { // when the device goes offline
        return {
            type: Actions.DISCONNECTED,
            // todo: maybe store last online
        };
    },
    active() {
        return {
            type: Actions.ACTIVE,
        };
    },
    inactive() { // when the app goes out of focus
        return {
            type: Actions.INACTIVE,
            // todo: maybe store last online
        };
    },
    confirmEmail(data, callbacks = {}) {
        return {
            type: Actions.CONFIRM_EMAIL,
            data,
            ...callbacks,
        };
    },
    refreshUser(data, callbacks = {}) {
        return {
            type: Actions.REFRESH_USER,
            data,
            ...callbacks,
        };
    },
    refresh() { // force the app to refresh data
        return {
            type: Actions.REFRESH,
        };
    },
    login(data, callbacks) {
        return {
            type: Actions.LOGIN,
            data,
            ...callbacks,
        };
    },
    // LOGIN
    loginLoaded: (user) => {
        return { type: Actions.LOGIN_LOADED, user };
    },
    loginError: (error) => {
        return { type: Actions.LOGIN_ERROR, error };
    },
    // STARTUP
    startup(data, callbacks) {
        return {
            type: Actions.STARTUP,
            data,
            ...callbacks,
        };
    },
    // REGISTER
    register(data, callbacks) {
        return {
            type: Actions.REGISTER,
            data,
            ...callbacks,
        };
    },
    registerLoaded: (user) => {
        return { type: Actions.REGISTER_LOADED, user };
    },
    registerError: (error) => {
        return { type: Actions.REGISTER_ERROR, error };
    },
    logout(callbacks) {
        return {
            type: Actions.LOGOUT,
            ...callbacks,
        };
    },
};

global.Actions = Object.assign({}, BaseConstants, {

});

global.AppActions = Object.assign({}, BaseActions, {
});
