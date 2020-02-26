import './utils';
import filter from 'lodash/filter';

// Sets item in reducer as loading, clears error for that item
const itemLoading = (state, prefix, action) => {
    return {
        ...state,
        [`${prefix}Error`]: null,
        [`${prefix}Loading`]: true,
    };
};

// todo: perhaps we need loading/errors to be based on particular ids i.e. dont show user 2 as saving if it's just user 1
// Sets item in reducer as saved, clears error for that item
const itemLoaded = (state, prefix, action) => {
    if (action.index) { // Item is part of a collection, add it within the prefix
        return {
            ...state,
            [prefix]: { ...state[prefix], [action.index]: action.data },
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
const itemSaved = (state, prefix, action) => {
    if (action.index) { // Item is part of a collection, add it within the prefix
        return {
            ...state,
            [prefix]: { ...state[prefix], [action.index]: action.data },
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

// Adds an item to the reducer collection, if one exists with the same ID it will be updated
const appendItem = (state, prefix, action) => {
    return {
        ...state,
        [prefix]: filter(state[prefix], i => i.id !== action.id || action.data.id).concat([action.data]),
    };
};

// Removes an item from a collection based on an ID
const deleteItem = (state, prefix, action) => {
    return {
        ...state,
        [prefix]: filter(state[prefix], i => i.id !== action.id),
    };
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
) {
    if (typeof window === 'undefined') {
        // API.log('SERVER', action.type);
    } else {
        // API.log('DISPATCHER', action.type);
    }
    switch (action.type) {
        case Actions.LOGIN_LOADED:
        case Actions.UPDATE_USER_LOADED:
        case Actions.CONFIRM_EMAIL_LOADED:
        case Actions.REGISTER_LOADED:
            return itemLoaded(state, 'user', action);
        case Actions.LOGIN_ERROR:
        case Actions.CONFIRM_EMAIL_ERROR:
        case Actions.REGISTER_ERROR:
        case Actions.UPDATE_USER_ERROR:
            return itemError(state, 'user', action);
        case Actions.REGISTER:
        case Actions.UPDATE_USER:
        case Actions.CONFIRM_EMAIL:
        case Actions.LOGIN:
            return itemLoading(state, 'user', action);
        case Actions.CLEAR_USER:
            return { ...state, user: null };
        case Actions.STARTUP_LOADED:
            return { ...state, ...action.data };
        // END OF REDUCER
        // KEEP THE ABOVE LINE IN, IT IS USED BY OUR CLI
        default:
            return state;
    }
}

export default defaultReducer;
