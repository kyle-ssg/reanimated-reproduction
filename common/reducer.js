import './utils';

// const itemLoading = (state, prefix, action) => {
//     return {
//         ...state,
//         [`${prefix}Loading`]: true,
//     };
// };
//
// const itemSaved = (state, prefix, action) => {
//     return {
//         ...state,
//         [`${prefix}Loading`]: false,
//     };
// };
//
// const itemLoaded = (state, prefix, action) => {
//     return {
//         ...state,
//         [prefix]: { ...state[prefix], [action.index]:data },
//         [`${prefix}Loading`]: false,
//     };
// };
//
// const itemsLoaded = (state, prefix, action) => {
//     return {
//         ...state,
//         [prefix]: data };
// };
//
// const itemError = (state, prefix, action) => {
//     return {
//         ...state,
//         [`${prefix}Loading`]: false,
//         [`${prefix}Error`]: action.error,
//     };
// };

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
            return { ...state, userLoading: true };
        case Actions.LOGIN_LOADED:
            return { ...state, userLoading: false };
        case Actions.LOGIN_ERROR:
            return { ...state, userLoading: false, userError: action.error };
        case Actions.CLEAR_USER:
            return { ...state, articles:{} };

        case Actions.STARTUP_LOADED:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

export default (state, action) => {
    const newState      = defaultReducer(state, action);
    const finalState    = {
        ...newState,
    };

    return finalState;
};
