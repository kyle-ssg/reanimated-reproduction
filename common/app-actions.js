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

    'STARTUP'           : 'STARTUP',
    'STARTUP_LOADED'    : 'STARTUP_LOADED',
    'STARTUP_ERROR'     : 'STARTUP_ERROR',

    'LOGOUT'        : 'LOGOUT',
    'CLEAR_USER'    : 'CLEAR_USER',
    'REFRESH'       : 'REFRESH',
};

const BaseActions = {
    connected() { // when the device comes online
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
    active() { // when the device comes online
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
    startup(data) {
        return {
            type: Actions.STARTUP,
            data,
        };
    },
    startupLoaded: (user) => {
        return { type: Actions.STARTUP_LOADED, user };
    },
    startupError: (user) => {
        return { type: Actions.STARTUP_LOADED, user };
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
    logout() {
        return {
            type: Actions.LOGOUT,
        };
    },
};

global.Actions = Object.assign({}, BaseConstants, {

});

global.AppActions = Object.assign({}, BaseActions, {
});
