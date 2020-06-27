import './utils';
import { Actions } from './app-actions';
import produce from "immer"
// eslint-disable-next-line no-unused-vars
import { appendItem, deleteItem, itemError, itemLoaded, itemLoading, itemSaved, itemSaving } from './utils/reducer-helpers';
import { AppState } from './state-type';

const defaultReducer =produce(
    (state: AppState, action): AppState | void => {
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
                itemLoading(state, 'user');
                break;
            case Actions.CLEAR_USER:
                state.user = null;
                break;
            case Actions.STARTUP_LOADED:
                Object.keys(action.data).map((k)=>{
                    state[k] = action.data[k];
                });
                break;
                // END OF REDUCER
                // KEEP THE ABOVE LINE IN, IT IS USED BY OUR CLI
            default:
                break;
        }
    })

export default defaultReducer;
