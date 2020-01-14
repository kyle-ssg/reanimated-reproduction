import './utils';

const itemLoading = (state, prefix, action) => {
    return {
        ...state,
        [`${prefix}Error`]: null,
        [`${prefix}Loading`]: true,
    };
};

const itemSaved = (state, prefix, action) => {
    if (action.index) {  // Item is part of a collection, add it within the prefix
        return {
            ...state,
            [prefix]: { ...state[prefix], [action.index]:action.data },
            [`${prefix}Loading`]: false,
            [`${prefix}Error`]: null,
        };
    }
    return {
        ...state,
        [`${prefix}Error`]: null,
        [prefix]: action.data,
        [`${prefix}Loading`]: false,
    };
};

const itemLoaded = (state, prefix, action) => {
    if (action.index) { // Item is part of a collection, add it within the prefix
        return {
            ...state,
            [prefix]: { ...state[prefix], [action.index]:action.data },
            [`${prefix}Error`]: null,
            [`${prefix}Loading`]: false,
        };
    }
    return {
        ...state,
        [`${prefix}Error`]: null,
        [`${prefix}Loading`]: false,
        [prefix]: action.data };
};

const itemError = (state, prefix, action) => {
    return {
        ...state,
        [`${prefix}Loading`]: false,
        [`${prefix}Error`]: action.error,
    };
};

function defaultReducer(
    state = {
        isConnected: true,
    },
    action,
)
{
    if (typeof window === 'undefined') {
        // API.log('SERVER', action.type);
    } else {
        // API.log('DISPATCHER', action.type);
    }
    switch (action.type) {
        case Actions.LOGIN:
            return itemLoading(state, 'user', action);
        case Actions.LOGIN_LOADED:
        case Actions.REFRESH_USER_LOADED:
            return itemLoaded(state, 'user', action);
        case Actions.LOGIN_ERROR:
            return itemError(state, 'user', action);
        case Actions.REGISTER:
            return itemLoading(state, 'user', action);
        case Actions.REGISTER_LOADED:
            return itemLoaded(state, 'user', action);
        case Actions.REGISTER_ERROR:
            return itemError(state, 'user', action);
        case Actions.CONFIRM_EMAIL:
            return itemLoading(state, 'user', action);
        case Actions.CONFIRM_EMAIL_LOADED:
            return itemSaved(state, 'user', action);
        case Actions.CONFIRM_EMAIL_ERROR:
            return itemError(state, 'user', action);
        case Actions.UPDATE_USER_LOADED:
            return itemSaved(state, 'user', action);
        case Actions.UPDATE_USER_ERROR:
            return itemError(state, 'user', action);
        case Actions.CLEAR_USER:
            return { ...state, user:null };
        case Actions.STARTUP_LOADED:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

export default (state, action) => {
    return defaultReducer(state, action);
};
