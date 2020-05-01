import './utils';
import { Actions } from './app-actions';
import filter from 'lodash/filter';
import produce from "immer"
import _data from './utils/_data';

// Sets item in reducer as loading, clears error for that item
const itemLoading = (state, prefix) => {
    state[`${prefix}Error`] = null;
    state[`${prefix}Loading`] = true;
};

const itemSaving = (state, prefix) => {
    state[`${prefix}Error`] = null;
    state[`${prefix}Saving`] = true;
};

// todo: perhaps we need loading/errors to be based on particular ids i.e. dont show user 2 as saving if it's just user 1
// Sets item in reducer as loaded, clears error for that item
const itemLoaded = (state, prefix, action) => {
    if (action.index) { // Item is part of a collection, add it within the prefix
        if (!state[prefix]) {
            state[prefix] = {}
        }
        state[prefix][action.index] = action.data;
        state[`${prefix}Error`] = null;
        state[`${prefix}Loading`] = false;
    } else {
        state[prefix] = action.data;
        state[`${prefix}Loading`] = false;
        state[`${prefix}Error`] = null;
    }
};

const itemSaved = (state, prefix, action) => {
    if (action.index) { // Item is part of a collection, add it within the prefix
        if (!state[prefix]) {
            state[prefix] = {}
        }
        state[prefix][action.index] = action.data;
        state[`${prefix}Error`] = null;
        state[`${prefix}Saving`] = false;
    } else {
        state[prefix] = action.data;
        state[`${prefix}Saving`] = false;
        state[`${prefix}Error`] = null;
    }
};

// Adds an item to the reducer collection, if one exists with the same ID it will be updated
// eslint-disable-next-line no-unused-vars
const appendItem = (state, prefix, action) => {
    state[prefix] = filter(state[prefix], i => i.id !== action.id || action.data.id).concat([action.data]);
};

// Removes an item from a collection based on an ID
// eslint-disable-next-line no-unused-vars
const deleteItem = (state, prefix, action) => {
    state[prefix] = filter(state[prefix], i => i.id !== action.id)
};

const itemError = (state, prefix, action) => {
    state[`${prefix}Error`] = action.error;
    state[`${prefix}Loading`] = false;
    state[`${prefix}Saving`] = false;
};

const defaultReducer = produce((state, action) => {
    if (typeof window === 'undefined') {
        API.log('SERVER', action.type);
        if (action.type.includes("ERROR")) {
            API.log('SERVER', action)
        }
    } else {
        // API.log('DISPATCHER', action.type);
    }
    switch (action.type) {
        case Actions.LOGIN_LOADED:
        case Actions.UPDATE_USER_LOADED:
        case Actions.CONFIRM_EMAIL_LOADED:
        case Actions.REGISTER_LOADED:
            itemLoaded(state, 'user', action);
            break;
        case Actions.LOGIN_ERROR:
        case Actions.CONFIRM_EMAIL_ERROR:
        case Actions.REGISTER_ERROR:
        case Actions.UPDATE_USER_ERROR:
            itemError(state, 'user', action);
            break;
        case Actions.REGISTER:
        case Actions.UPDATE_USER:
        case Actions.CONFIRM_EMAIL:
        case Actions.LOGIN:
            itemLoading(state, 'user', action);
            break;
        case Actions.CLEAR_USER:
            state.user = null;
            break;
        case Actions.STARTUP_LOADED:
            Object.keys(action.data).map((k)=>{
                state[k] = action.data[k];
            });
            break;        // END OF REDUCER
        // KEEP THE ABOVE LINE IN, IT IS USED BY OUR CLI
        default:
            break;
    }
})

export default defaultReducer;
